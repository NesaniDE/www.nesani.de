import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/site";
import { POSTS } from "@/data/blog";
import { PROJECTS } from "@/data/projects";

const STATIC_ROUTES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/leistungen", changeFrequency: "monthly", priority: 0.9 },
  { path: "/projekte", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ueber-uns", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/kontakt", changeFrequency: "monthly", priority: 0.8 },
  { path: "/leistungen/websites", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leistungen/ki-workflows", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leistungen/ki-assistenten", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leistungen/autonome-agenten", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leistungen/systemarchitektur", changeFrequency: "monthly", priority: 0.7 },
  { path: "/leistungen/social-media", changeFrequency: "monthly", priority: 0.7 },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.2 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogRoutes: MetadataRoute.Sitemap = POSTS.filter((p) => p.available).map(
    (p) => ({
      url: `${BASE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.dateIso),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }),
  );

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.filter(
    (p) => p.available,
  ).map((p) => ({
    url: `${BASE_URL}/projekte#${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
