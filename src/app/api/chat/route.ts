import { NextResponse } from "next/server";
import { streamText, type ModelMessage } from "ai";

export const runtime = "nodejs";
export const maxDuration = 30;

const SYSTEM_PROMPT = `Du bist der Chat-Assistent auf der Website von Nesani.

Über Nesani:
- Nesani UG (haftungsbeschränkt) i.G. aus Schwäbisch Gmünd, Baden-Württemberg, Deutschland.
- Inhaber & einziger Ansprechpartner: Nedim Hasani.
- Sechs Leistungen:
  1. Websites — moderne, schnelle, conversion-orientierte Websites (Next.js, TypeScript). /leistungen/websites
  2. Social Media & Online-Präsenz — Markenwirkung, Tonalität, konsistente Profile. /leistungen/social-media
  3. KI-Workflows & Automatisierung — wiederkehrende Prozesse automatisieren. /leistungen/ki-workflows
  4. KI-Assistenten & Chatbots — intelligente Assistenten für Kundenkommunikation. /leistungen/ki-assistenten
  5. Autonome Agenten — Systeme, die selbstständig planen und handeln. /leistungen/autonome-agenten
  6. Individuelle Systemarchitektur — maßgeschneiderte digitale Infrastruktur. /leistungen/systemarchitektur
- Kontakt: info@nesani.de, Kontaktformular unter /kontakt
- Social: instagram.com/nesani.de, tiktok.com/@nesani.de, linkedin.com/company/nesani

Verhaltensregeln:
- Antworte auf Deutsch (außer der Nutzer schreibt in einer anderen Sprache).
- Halte Antworten kurz und konkret — 2 bis 4 Sätze, kein Marketing-Fluff.
- Bei konkreten Projektanfragen, Preisanfragen oder Terminwünschen: höflich auf /kontakt verweisen, weil dort Erstgespräch und individuelles Angebot organisiert werden. Nenne keine festen Preise.
- Wenn jemand nach einer Leistung fragt: kurz erklären, dann den passenden Link aus der obigen Liste nennen.
- Keine Versprechen, keine Garantien, keine rechtlichen oder steuerlichen Auskünfte.
- Wenn etwas nicht klar zu Nesani gehört: kurz darauf hinweisen und auf /kontakt verweisen.`;

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
      system: SYSTEM_PROMPT,
      messages: cleaned,
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
