import { POSTS } from "@/data/blog";
import { BASE_URL, SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = 3600; // 1 Stunde

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const posts = POSTS.filter((p) => p.available);
  const lastBuild = posts.length
    ? new Date(
        Math.max(...posts.map((p) => new Date(p.dateIso).getTime())),
      ).toUTCString()
    : new Date().toUTCString();

  const items = posts
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${BASE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.dateIso).toUTCString()}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
      <category>${escapeXml(p.category)}</category>
      <author>noreply@nesani.de (${escapeXml(p.author)})</author>
    </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} – Blog</title>
    <link>${BASE_URL}/blog</link>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Praxis statt Hype: Artikel zu digitaler Präsenz, KI-Integration und Automatisierung von Nesani.</description>
    <language>de-DE</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
