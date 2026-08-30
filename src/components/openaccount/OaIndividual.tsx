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
    key: "social-media",
    label: "Social Media",
    title: "Sichtbar werden — und sichtbar bleiben.",
    copy: "Personal Branding für Unternehmer und Creator sowie Social Media für Unternehmensmarken: Strategie, Content-Produktion und auf Wunsch die laufende Betreuung.",
    img: "/images/services/leistung-social-media.png",
  },
  {
    key: "websites",
    label: "Websites",
    title: "Die Seite, auf der alles zusammenläuft.",
    copy: "Vom fokussierten One-Pager bis zur individuellen Unternehmenswebsite – schnell, technisch sauber und auf Anfragen ausgelegt statt nur auf Optik.",
    img: "/images/services/leistung-websites.png",
  },
  {
    key: "ki-automatisierung",
    label: "KI & Automatisierung",
    title: "Wiederkehrende Arbeit verschwindet.",
    copy: "KI-Workflows, Assistenten, autonome Agenten und individuelle Systeme: Prozesse laufen strukturiert und messbar – integriert in die Tools, die Ihr Team ohnehin nutzt.",
    img: "/images/services/leistung-ki-workflows.png",
  },
];

export function OaIndividual() {
  const [active, setActive] = useState(0);
  const t = TABS[active];

  return (
    <section className="bg-[#F4F1EA] text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[20ch]">
            Drei Bereiche, so individuell wie Ihr Business.
          </h2>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#050505] text-white text-[15px] font-semibold px-5 py-3 hover:bg-black/90 transition self-start"
          >
            Projekt anfragen
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
                  ? "bg-[#050505] text-white"
                  : "bg-[#050505]/[0.06] text-[#050505] hover:bg-[#050505]/10",
              ].join(" ")}
            >
              {tb.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div
            key={`text-${active}`}
            className="lg:col-span-5 animate-in fade-in slide-in-from-bottom-3 duration-500 ease-out"
          >
            <h3 className="font-sans font-semibold text-[28px] md:text-[34px] leading-[1.15] tracking-[-0.01em] max-w-[18ch]">
              {t.title}
            </h3>
            <p className="mt-5 text-[16px] leading-[1.55] text-[#050505]/75 max-w-[50ch]">
              {t.copy}
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#050505] hover:text-[#050505]/80 transition"
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
                className="object-cover animate-in fade-in zoom-in-95 duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
