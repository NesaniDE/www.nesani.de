import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogCategoryNav } from "@/components/blog/BlogCategoryNav";
import { BlogCta } from "@/components/blog/BlogCta";
import {
  getHubCategories,
  getCategoryBySlug,
  getPostsByCategory,
} from "@/data/blog";
import { getCategoryMeta } from "@/data/blog-categories";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getHubCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  const meta = getCategoryMeta(category.name);
  const url = `${BASE_URL}/blog/kategorie/${category.slug}`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${meta.title} | NESANI`,
      description: meta.description,
      url,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const meta = getCategoryMeta(category.name);
  const posts = getPostsByCategory(category.name);
  const categories = getHubCategories();
  const url = `${BASE_URL}/blog/kategorie/${category.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: meta.title,
    description: meta.description,
    inLanguage: "de-DE",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE_URL}/blog/${p.slug}`,
        name: p.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        trail={[
          { name: "Blog", path: "/blog" },
          { name: category.name, path: `/blog/kategorie/${category.slug}` },
        ]}
      />
      <Header />
      <main>
        <section className="relative bg-[#F4F1EA] text-[#050505] pt-28 md:pt-32 lg:pt-36 pb-8 md:pb-10">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
            <p className="text-[13px] font-medium tracking-widest text-[#050505]/55 uppercase">
              Kategorie
            </p>
            <h1 className="mt-4 font-sans font-semibold text-[36px] md:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.025em] max-w-[22ch]">
              {category.name}
            </h1>
            <p className="mt-6 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/75 max-w-[62ch]">
              {meta.intro}
            </p>
            {meta.serviceHref && meta.serviceLabel && (
              <p className="mt-6 text-[15px] text-[#050505]/70">
                Passende Leistung:{" "}
                <Link
                  href={meta.serviceHref}
                  className="font-medium text-[#050505] underline underline-offset-4 hover:no-underline"
                >
                  {meta.serviceLabel}
                </Link>
              </p>
            )}
          </div>
        </section>

        <BlogCategoryNav categories={categories} activeSlug={category.slug} />
        <BlogGrid posts={posts} />
        <BlogCta />
      </main>
      <Footer />
    </>
  );
}
