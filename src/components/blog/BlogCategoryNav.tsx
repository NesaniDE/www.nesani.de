import Link from "next/link";
import type { BlogCategory } from "@/data/blog";

type Props = {
  categories: BlogCategory[];
  /** Slug der aktiven Kategorie – auf dem Hub hervorgehoben. */
  activeSlug?: string;
  /** Auf Kategorieseiten führt der erste Chip zurück zur Übersicht. */
  showAll?: boolean;
};

export function BlogCategoryNav({
  categories,
  activeSlug,
  showAll = true,
}: Props) {
  return (
    <nav
      aria-label="Beitragskategorien"
      className="bg-[#F4F1EA] text-[#050505]"
    >
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pb-2">
        <ul className="flex flex-wrap gap-2">
          {showAll && (
            <li>
              <Link
                href="/blog"
                aria-current={activeSlug ? undefined : "page"}
                className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition ${
                  activeSlug
                    ? "border-[#050505]/15 bg-white text-[#050505]/75 hover:border-[#050505]/40"
                    : "border-[#050505] bg-[#050505] text-white"
                }`}
              >
                Alle Beiträge
              </Link>
            </li>
          )}
          {categories.map((c) => {
            const active = c.slug === activeSlug;
            return (
              <li key={c.slug}>
                <Link
                  href={`/blog/kategorie/${c.slug}`}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition ${
                    active
                      ? "border-[#050505] bg-[#050505] text-white"
                      : "border-[#050505]/15 bg-white text-[#050505]/75 hover:border-[#050505]/40"
                  }`}
                >
                  {c.name}
                  <span
                    className={
                      active ? "text-white/60" : "text-[#050505]/45"
                    }
                  >
                    {c.count}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
