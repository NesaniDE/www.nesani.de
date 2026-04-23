"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo: string;
  logo: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Zu Qonto zu wechseln, war eine der besten Entscheidungen für unsere Finanzverwaltung. Qonto hat unseren Zahlungsverkehr rationalisiert und uns eine umfassende Kontrolle über unsere Finanzen gegeben.",
    name: "Marc Peter Dauter",
    role: "GF Le Wagon GmbH",
    photo: "/images/about-9896-325d93b61b.jpg",
    logo: "/images/asset-10917-a533c5c60a.svg",
  },
  {
    quote:
      "Mit Qonto brauchen wir kein Extratool für die Spesenabrechnung oder Rechnungsverwaltung. Das haben wir alles in unserem Geschäftskonto.",
    name: "Hans-Peter Frank",
    role: "Country Manager Germany Fleet",
    photo: "/images/about-10061-083993b70c.jpg",
    logo: "/images/oa-12511-0ace07dedb.svg",
  },
  {
    quote:
      "Qonto unterstützt uns dabei, Zahlungen in Echtzeit abwickeln zu können und gleichzeitig die eintreffenden Zahlungsströme optimal auf unsere verschiedenen Konten aufzuteilen.",
    name: "Klemens Witte",
    role: "Gründer & CEO GreenHomeNow",
    photo: "/images/about-9508-5f9a305e70.jpg",
    logo: "/images/oa-8188-8a907734de.svg",
  },
  {
    quote:
      "Wir nutzen fünf Karten in unserem Team. Unsere Mitarbeiter können damit selbstständig im Rahmen ihrer Budgets und Kostenkategorien bezahlen. Das gibt unseren Mitarbeitern Autonomie und wir behalten den Überblick.",
    name: "Benita Krahforst",
    role: "CFO Meine Erde",
    photo: "/images/oa-26186-4dee364eb8.avif",
    logo: "/images/asset-10919-d162311289.svg",
  },
  {
    quote:
      "Qonto ist einfach intuitiv zu bedienen und spart uns jeden Monat spürbar Zeit in der Buchhaltung. Besonders die DATEV-Integration ist für uns ein echter Gamechanger.",
    name: "Sebastian Janus",
    role: "Geschäftsführer",
    photo: "/images/oa-25273-c52bb89d2b.avif",
    logo: "/images/asset-12508-23234381bc.svg",
  },
  {
    quote:
      "Mit Qonto haben wir endlich ein digitales Geschäftskonto gefunden, das mit unserem Tempo mithält. Rechnungen, Karten und Buchhaltung – alles an einem Ort.",
    name: "Norman Simon",
    role: "CEO onGRID",
    photo: "/images/about-9511-a1c0fa9690.jpg",
    logo: "/images/asset-10917-a533c5c60a.svg",
  },
  {
    quote:
      "Die Kombination aus moderner App, Firmenkarten und starkem Kundenservice macht Qonto zum idealen Partner für unser Business.",
    name: "Charlotte Piller",
    role: "Lotta Ludwigson",
    photo: "/images/about-26195-eedb3091b7.jpg",
    logo: "/images/oa-12511-0ace07dedb.svg",
  },
];

export function OaTestimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);

  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-[-0.02em] max-w-[26ch]">
          Das sagen unsere Kundinnen und Kunden zum Online-Geschäftskonto
        </h2>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-[420px] rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                key={t.photo}
                src={t.photo}
                alt={t.name}
                fill
                sizes="(min-width:1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-[22px] md:text-[28px] lg:text-[32px] leading-[1.35] font-sans max-w-[40ch]">
              <span className="text-white/40">&ldquo;</span>
              {t.quote}
              <span className="text-white/40">&rdquo;</span>
            </p>

            <div className="mt-8 flex items-center gap-6">
              <div>
                <p className="font-semibold text-[15px]">{t.name}</p>
                <p className="text-[13px] text-white/60">{t.role}</p>
              </div>
              <div className="h-8 flex items-center">
                <Image
                  key={t.logo}
                  src={t.logo}
                  alt=""
                  width={100}
                  height={32}
                  className="h-7 md:h-8 w-auto opacity-90"
                />
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-white hover:text-white/80 transition"
              >
                Kundenbericht ansehen
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Vorheriger"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Nächster"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
