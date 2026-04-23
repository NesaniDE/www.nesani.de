"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

type Tab = {
  key: string;
  label: string;
  title: string;
  copy: string;
  img: string;
};

const TABS: Tab[] = [
  {
    key: "klein",
    label: "Kleinunternehmen",
    title: "Passgenaues Firmenkonto für Kleinunternehmen",
    copy: "Digitales Kontomanagement, integrierte Rechnungsstellung und ein erstklassiger Kundenservice – alles in einem.",
    img: "/images/oa-33408-829a09d824.avif",
  },
  {
    key: "solo",
    label: "Selbstständige",
    title: "Das Geschäftskonto für Selbstständige",
    copy: "Steueroptimierung, DATEV-Schnittstelle und automatisierte Belegverwaltung – Zeit sparen, Fokus auf Ihr Business.",
    img: "/images/oa-33412-a33120a38f.avif",
  },
  {
    key: "kmu",
    label: "KMU",
    title: "Die richtige Lösung für wachsende KMU",
    copy: "Teambudgets, Firmenkarten, Ausgabenmanagement und Cashflow-Übersicht – skalierbare Finanzprozesse für Ihr Team.",
    img: "/images/oa-33280-7d5866da7f.avif",
  },
];

export function OaIndividual() {
  const [active, setActive] = useState(0);
  const t = TABS[active];

  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[20ch]">
            Ein Firmenkonto, so individuell wie Ihr Business.
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#050505] text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition self-start"
          >
            Konto eröffnen
            <ArrowUpRightIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {TABS.map((tb, i) => (
            <button
              key={tb.key}
              onClick={() => setActive(i)}
              className={[
                "rounded-full px-5 py-2.5 text-[14px] font-medium transition",
                i === active
                  ? "bg-white text-[#050505]"
                  : "bg-white/10 text-white hover:bg-white/15",
              ].join(" ")}
            >
              {tb.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <h3 className="font-sans font-semibold text-[28px] md:text-[34px] leading-[1.15] tracking-[-0.01em] max-w-[18ch]">
              {t.title}
            </h3>
            <p className="mt-5 text-[16px] leading-[1.55] text-white/75 max-w-[50ch]">
              {t.copy}
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-white hover:text-white/80 transition"
            >
              Mehr erfahren
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                key={t.img}
                src={t.img}
                alt={t.label}
                fill
                sizes="(min-width:1024px) 720px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
