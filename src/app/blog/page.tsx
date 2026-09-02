import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogFeatured } from "@/components/blog/BlogFeatured";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogCategoryNav } from "@/components/blog/BlogCategoryNav";
import { BlogCta } from "@/components/blog/BlogCta";
import { POSTS, getHubCategories } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Personal Branding, Social Media & digitale Präsenz",
  description:
    "Praxisnahe Artikel zu Personal Branding, Social Media für Unternehmen, Websites, SEO und KI-Automatisierung. Ohne Marketing-Sprech, ohne Buzzwords.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: "Blog — Personal Branding, Social Media & digitale Präsenz | NESANI",
    description:
      "Praxisnahe Artikel zu Personal Branding, Social Media für Unternehmen, Websites, SEO und KI-Automatisierung.",
    url: `${BASE_URL}/blog`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const featured = POSTS.filter((p) => p.available).slice(0, 2);
  const rest = POSTS.filter((p) => !featured.some((f) => f.slug === p.slug));
  const categories = getHubCategories();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE_URL}/blog#blog`,
    url: `${BASE_URL}/blog`,
    name: "NESANI Blog",
    description:
      "Praxisnahe Artikel zu Personal Branding, Social Media für Unternehmen, Websites, SEO und KI-Automatisierung.",
    inLanguage: "de-DE",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    blogPost: POSTS.filter((p) => p.available)
      .slice(0, 24)
      .map((p) => ({
        "@type": "BlogPosting",
        "@id": `${BASE_URL}/blog/${p.slug}#article`,
        url: `${BASE_URL}/blog/${p.slug}`,
        headline: p.title,
        datePublished: p.dateIso,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd trail={[{ name: "Blog", path: "/blog" }]} />
      <Header />
      <main>
        <BlogHero />
        <BlogCategoryNav categories={categories} />
        {featured.length > 0 && <BlogFeatured posts={featured} />}
        <BlogGrid posts={rest} />
        <BlogCta />
      </main>
      <Footer />
    </>
  );
}
