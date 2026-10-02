import { NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { BASE_URL, INDEXNOW_KEY } from "@/lib/site";
import sitemap from "@/app/sitemap";

export const runtime = "nodejs";
export const maxDuration = 30;

/**
 * Wie weit zurueck Aenderungen gemeldet werden. Der Cron laeuft taeglich;
 * mit drei Tagen wird jede Aenderung in zwei Laeufen gemeldet, ein
 * ausgefallener Lauf geht also nicht verloren.
 */
const WINDOW_MS = 3 * 24 * 60 * 60 * 1000;

/**
 * Vercel Cron Job — meldet nur Seiten bei IndexNow (Bing, Yandex, Seznam,
 * Naver), deren lastmod in der Sitemap in den letzten Tagen liegt.
 * Bing will ausdruecklich nur geaenderte URLs; taeglich alles zu melden
 * waere fuer IndexNow wie Spam.
 *
 * Die URLs kommen direkt aus sitemap(), damit Sitemap und Meldung nie
 * auseinanderlaufen.
 *
 * Schutz: Ist CRON_SECRET gesetzt, wird es verlangt — Vercel Cron schickt
 *         den Header `Authorization: Bearer <CRON_SECRET>` automatisch mit,
 *         Vergleich erfolgt timing-safe. Ohne CRON_SECRET ist die Route offen,
 *         wie bei den Stadtportalen und nedimhasani.de. Vertretbar, weil sie
 *         nur kuerzlich geaenderte eigene URLs meldet: Ein fremder Aufruf
 *         loest hoechstens dieselbe Meldung noch einmal aus. Vorher lehnte
 *         die Route ohne Secret alles ab, auch den Cron selbst.
 */
function verifyCronAuth(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true;
  const auth = req.headers.get("authorization");
  if (!auth) return false;
  const expected = `Bearer ${secret}`;
  // Längen müssen übereinstimmen, sonst wirft timingSafeEqual.
  if (auth.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(auth), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function GET(req: Request) {
  if (!verifyCronAuth(req)) {
    return NextResponse.json(
      { error: "Unauthorized", hint: "CRON_SECRET ist gesetzt und wird verlangt" },
      { status: 401 },
    );
  }

  try {
    const since = Date.now() - WINDOW_MS;
    const urls = sitemap()
      .filter(
        (e) => e.lastModified && new Date(e.lastModified).getTime() >= since,
      )
      .map((e) => e.url);

    if (urls.length === 0) {
      return NextResponse.json({ ok: true, submitted: 0, urls });
    }

    const host = new URL(BASE_URL).host;
    const submitRes = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    return NextResponse.json({
      ok: submitRes.ok,
      status: submitRes.status,
      submitted: urls.length,
      urls,
    });
  } catch (err) {
    console.error("[indexnow cron] error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
