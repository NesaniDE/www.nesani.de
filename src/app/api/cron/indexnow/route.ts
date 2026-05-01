import { NextResponse } from "next/server";
import { BASE_URL } from "@/lib/site";

export const runtime = "nodejs";
export const maxDuration = 30;

const KEY = "da9aaf5e1e0a4792836ed2b67dacd9c0";

/**
 * Vercel Cron Job — reicht alle Sitemap-URLs bei IndexNow
 * (Bing, Yandex, Seznam, Naver) ein.
 *
 * Schutz: Vercel Cron schickt den Header `Authorization: Bearer <CRON_SECRET>`
 *         automatisch mit. Manuelle Aufrufe ohne richtigen Secret werden geblockt.
 */
export async function GET(req: Request) {
  // Security: Vercel-Cron-Header prüfen
  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Sitemap holen
    const sitemapRes = await fetch(`${BASE_URL}/sitemap.xml`, {
      cache: "no-store",
    });
    if (!sitemapRes.ok) {
      return NextResponse.json(
        { error: "Sitemap unreachable" },
        { status: 500 },
      );
    }
    const xml = await sitemapRes.text();
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

    if (urls.length === 0) {
      return NextResponse.json({ ok: true, submitted: 0 });
    }

    // An IndexNow-API senden
    const host = new URL(BASE_URL).host;
    const submitRes = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: KEY,
        keyLocation: `${BASE_URL}/${KEY}.txt`,
        urlList: urls,
      }),
    });

    return NextResponse.json({
      ok: submitRes.ok,
      status: submitRes.status,
      submitted: urls.length,
    });
  } catch (err) {
    console.error("[indexnow cron] error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
