import { NextResponse } from "next/server";
import { streamText, type ModelMessage } from "ai";
import { NESANI_KNOWLEDGE } from "@/data/chat-knowledge";

export const runtime = "nodejs";
export const maxDuration = 30;

const SYSTEM_RULES = `Du bist der Chat-Assistent auf der Website von Nesani.

Verhaltensregeln:
- Antworte auf Deutsch (außer der Nutzer schreibt in einer anderen Sprache).
- Antworte kurz und konkret — 2 bis 4 Sätze, kein Marketing-Fluff, keine Floskeln.
- Stütze dich ausschließlich auf die untenstehende Wissensbasis. Wenn etwas nicht abgedeckt ist, sag das ehrlich und verweise auf /kontakt.
- Bei Projektanfragen, Preisanfragen oder Terminwünschen: höflich auf /kontakt verweisen — dort wird das Erstgespräch organisiert. Nenne niemals Preise, auch nicht "ab X €".
- Wenn nach einer Leistung gefragt wird: kurz erklären, dann den passenden Pfad (/leistungen/...) nennen.
- Keine Versprechen, keine Garantien, keine rechtlichen, steuerlichen oder unternehmerischen Auskünfte.
- Wenn etwas nicht zu Nesani gehört: freundlich darauf hinweisen und auf /kontakt verweisen.

${NESANI_KNOWLEDGE}`;

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  if (process.env.CHAT_ENABLED !== "1") {
    return NextResponse.json(
      { unavailable: true, reason: "disabled" },
      { status: 503 },
    );
  }

  let messages: IncomingMessage[] = [];
  try {
    const body = (await req.json()) as { messages?: IncomingMessage[] };
    messages = Array.isArray(body.messages) ? body.messages : [];
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // Sanitize: only user/assistant with non-empty string content, cap length
  const cleaned: ModelMessage[] = messages
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-12)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  if (cleaned.length === 0) {
    return NextResponse.json({ error: "Empty messages" }, { status: 400 });
  }

  try {
    const result = streamText({
      model: process.env.CHAT_MODEL ?? "anthropic/claude-haiku-4-5",
      // Ephemeral cache: identische System-Prompts werden für 5 Minuten serverseitig
      // bei Anthropic gecacht und nicht erneut bezahlt. Spart bei dauerhaftem
      // Traffic ~90 % der Input-Token-Kosten der Wissensbasis.
      messages: [
        {
          role: "system",
          content: SYSTEM_RULES,
          providerOptions: {
            anthropic: { cacheControl: { type: "ephemeral" } },
          },
        },
        ...cleaned,
      ] satisfies ModelMessage[],
      temperature: 0.4,
    });
    return result.toTextStreamResponse();
  } catch (err) {
    console.error("[chat] streamText error:", err);
    return NextResponse.json(
      { unavailable: true, reason: "upstream" },
      { status: 503 },
    );
  }
}
