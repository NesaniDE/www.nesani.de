"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

type Tool = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

const TOOLS: Tool[] = [
  {
    title: "Cashflow-Management",
    body: "Cashflow einfach unter Kontrolle – mit Analysen und Prognosen.",
    image: "/images/asset-33556-867a6474ee.avif",
    alt: "Cashflow-Management auf dem Smartphone",
  },
  {
    title: "Rechnungen",
    body: "Angebote und Rechnungen direkt erstellen und effizient verwalten.",
    image: "/images/asset-33557-6af108a220.avif",
    alt: "Rechnungen auf dem Smartphone",
  },
  {
    title: "Ausgabenverwaltung",
    body: "Belege und Erstattungen digital und zentral im Team managen.",
    image: "/images/asset-33562-e3fe80533b.avif",
    alt: "Ausgabenverwaltung",
  },
  {
    title: "Buchhaltung",
    body: "Prozesse automatisieren und direkt mit DATEV und Tools verbinden.",
    image: "/images/asset-33570-fd6109162e.avif",
    alt: "Buchhaltung",
  },
];

export function SmartTools() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (delta: number) => {
    scrollRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="bg-white text-[#050505] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1344px] px-5 lg:px-12">
        <div className="flex items-end justify-between gap-4 mb-10 md:mb-14">
          <h2 className="font-sans font-semibold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[900px]">
            Smarte Finanztools für Ihr Business
          </h2>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollBy(-400)}
              aria-label="Vorheriges Tool"
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollBy(400)}
              aria-label="Nächstes Tool"
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        <ul className="flex gap-4 md:gap-6 px-5 lg:px-12 pb-1">
          {TOOLS.map((t) => (
            <li
              key={t.title}
              className="snap-start shrink-0 w-[80%] sm:w-[60%] md:w-[45%] lg:w-[31%] max-w-[420px]"
            >
              <article className="flex flex-col gap-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-[#d6d4ca]">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    fill
                    sizes="(max-width: 768px) 80vw, 32vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-1">
                  <h3 className="font-sans font-semibold text-[22px] md:text-[24px] leading-tight">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[#050505]/70 text-[15px] leading-relaxed max-w-xs">
                    {t.body}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
