import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/site";
import { BOOKING_ENABLED } from "@/lib/booking";
import { POSTS, getHubCategories, getPostsByCategory } from "@/data/blog";

/**
 * Feste Seiten mit dem Datum ihrer letzten inhaltlichen Aenderung.
 *
 * Bewusst KEIN Build-Zeitpunkt: Bing nutzt lastmod stark, um zu entscheiden,
 * was neu gecrawlt wird, und ignoriert es, wenn es bei jedem Deploy auf
 * "heute" springt. Ausserdem meldet /api/cron/indexnow nur Seiten, deren
 * Datum in den letzten Tagen liegt.
 *
 * Wenn sich der Inhalt einer Seite aendert: `updated` auf den Tag setzen.
 * Aenderungen an Header, Footer oder dem Terminbereich zaehlen nicht —
 * die sind auf jeder Seite gleich und kein neuer Inhalt.
 */
const STATIC_ROUTES: {
  path: string;
  updated: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", updated: "2026-10-02", changeFrequency: "weekly", priority: 1 },
  { path: "/leistungen", updated: "2026-10-02", changeFrequency: "monthly", priority: 0.9 },
  { path: "/projekte", updated: "2026-10-02", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ueber-uns", updated: "2026-10-02", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", updated: "2026-10-02", changeFrequency: "weekly", priority: 0.7 },
  { path: "/kontakt", updated: "2026-09-02", changeFrequency: "monthly", priority: 0.8 },
  ...(BOOKING_ENABLED
    ? [{ path: "/termin", updated: "2026-09-02", changeFrequency: "monthly" as const, priority: 0.9 }]
    : []),
  { path: "/leistungen/websites", updated: "2026-10-02", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leistungen/ki-workflows", updated: "2026-10-02", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leistungen/ki-assistenten", updated: "2026-10-02", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leistungen/autonome-agenten", updated: "2026-10-02", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leistungen/systemarchitektur", updated: "2026-10-02", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leistungen/social-media", updated: "2026-10-02", changeFrequency: "monthly", priority: 0.7 },
  { path: "/impressum", updated: "2026-05-25", changeFrequency: "yearly", priority: 0.2 },
  { path: "/datenschutz", updated: "2026-09-02", changeFrequency: "yearly", priority: 0.2 },
];

const day = (iso: string) => new Date(`${iso}T00:00:00.000Z`);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: day(r.updated),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogRoutes: MetadataRoute.Sitemap = POSTS.filter((p) => p.available).map(
    (p) => ({
      url: `${BASE_URL}/blog/${p.slug}`,
      lastModified: day(p.dateIso),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }),
  );

  // Ein Hub aendert sich, wenn ein Beitrag dazukommt: Datum des neuesten Beitrags.
  const categoryRoutes: MetadataRoute.Sitemap = getHubCategories().map((c) => {
    const newest = getPostsByCategory(c.name)
      .map((p) => p.dateIso)
      .sort()
      .pop();
    return {
      url: `${BASE_URL}/blog/kategorie/${c.slug}`,
      lastModified: newest ? day(newest) : undefined,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    };
  });

  // Keine /projekte#slug-Eintraege mehr: Suchmaschinen ignorieren alles nach
  // dem #, das waeren nur Duplikate von /projekte.
  return [...staticRoutes, ...categoryRoutes, ...blogRoutes];
}
