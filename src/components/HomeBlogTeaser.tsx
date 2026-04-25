import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { POSTS } from "@/data/blog";

export function HomeBlogTeaser() {
  const latest = POSTS.filter((p) => p.available).slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className="bg-[#F4F1EA] text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="text-[12px] font-semibold tracking-widest uppercase text-[#050505]/55">
              Aus dem Blog
            </div>
            <h2 className="mt-3 font-sans font-semibold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] max-w-[20ch]">
              Praxis statt Hype.
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-1.5 text-[14px] font-semibold hover:opacity-80 transition"
          >
            Alle Beiträge
            <ArrowUpRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {latest.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group block h-full rounded-2xl bg-white border border-[#050505]/5 overflow-hidden hover:border-[#050505]/20 transition"
            >
              <div className="relative aspect-[16/10] bg-[#F5F2EB]">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 380px, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5 md:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="rounded-full bg-[#F4F1EA] px-2.5 py-1 font-medium">
                    {p.category}
                  </span>
                  <time
                    dateTime={p.dateIso}
                    className="text-[#050505]/55"
                  >
                    {p.date}
                  </time>
                </div>
                <h3 className="font-sans font-semibold text-[17px] md:text-[19px] leading-[1.3] line-clamp-3">
                  {p.title}
                </h3>
                <p className="text-[14px] leading-[1.5] text-[#050505]/70 line-clamp-3">
                  {p.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/blog"
          className="md:hidden mt-8 inline-flex items-center gap-1.5 text-[14px] font-semibold hover:opacity-80 transition"
        >
          Alle Beiträge
          <ArrowUpRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
