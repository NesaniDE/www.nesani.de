"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

type T = {
  quote: string;
  name: string;
  role: string;
  img: string;
  /** CSS object-position für die Card. Default: rechts (95% center). */
  imgPos?: string;
};

const ITEMS: T[] = [
  {
    quote:
      "Nesani hilft mir dabei, meine Online-Präsenz aufzubauen und meinen Umsatz langfristig zu steigern. Klare Profile, regelmäßiger Content und ein Ansprechpartner, der versteht, worum es geht.",
    name: "Christian Jungwirth",
    role: "MMA-Fighter",
    img: "/images/breit/portrait-christian.webp",
    imgPos: "60% center",
  },
  {
    quote:
      "Wir wollten endlich eine Website, die zu unserem Handwerk passt – nicht eine von der Stange. Nedim hat verstanden, worauf es bei uns ankommt. Die neue Seite ist klar, schnell und bringt genau die Anfragen, die wir wollten.",
    name: "Urim Hasani",
    role: "Inhaber, Handwerk",
    img: "/images/breit/portrait-urim.webp",
  },
];

export function AboutTestimonials() {
  const [i, setI] = useState(0);
  const t = ITEMS[i];
  const prev = () => setI((n) => (n - 1 + ITEMS.length) % ITEMS.length);
  const next = () => setI((n) => (n + 1) % ITEMS.length);

  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="font-sans font-semibold text-[32px] md:text-[40px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] max-w-[20ch]">
            Was unsere Kunden über die Zusammenarbeit sagen
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Zurück"
              onClick={prev}
              className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Weiter"
              onClick={next}
              className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div key={`t-${i}`} className="testimonial-fade">
              <div className="text-[56px] md:text-[80px] leading-none text-[#050505]/15 font-serif">
                &ldquo;
              </div>
              <blockquote className="text-[20px] md:text-[26px] lg:text-[28px] leading-[1.4] tracking-[-0.01em] max-w-[38ch]">
                {t.quote}
              </blockquote>
              <div className="mt-8">
                <div className="font-sans font-semibold text-[17px] md:text-[18px]">
                  {t.name}
                </div>
                <div className="text-[14px] md:text-[15px] text-[#050505]/70">
                  {t.role}
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-1.5">
              {ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-[#050505]" : "w-4 bg-black/20"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] md:aspect-[3/2] rounded-2xl md:rounded-3xl overflow-hidden bg-[#F5F2EB]">
              {ITEMS.map((it, idx) => (
                <Image
                  key={it.img}
                  src={it.img}
                  alt={it.name}
                  fill
                  sizes="(min-width:1024px) 640px, 100vw"
                  quality={92}
                  style={{ objectPosition: it.imgPos ?? "95% center" }}
                  className={[
                    "object-cover scale-110 transition-opacity duration-500 ease-out",
                    idx === i ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  priority={idx === 0}
                  loading="eager"
                  fetchPriority={idx === 0 ? "high" : "auto"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
