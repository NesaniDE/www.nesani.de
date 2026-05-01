"use client";

import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CheckIcon } from "@/components/icons";

type Step = {
  number: string;
  title: string;
  body: string;
  bullets: string[];
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Analyse & Audit",
    body: "Wir analysieren bestehende Prozesse und identifizieren die größten Potenziale für Automatisierung und Sichtbarkeit.",
    bullets: ["Prozess-Mapping", "Datenanalyse", "ROI-Kalkulation"],
  },
  {
    number: "02",
    title: "Strategie",
    body: "Wir definieren eine klare Roadmap mit messbaren Zielen — priorisiert nach Wirkung und Umsetzbarkeit.",
    bullets: ["Zieldefinition", "Stack-Auswahl", "Priorisierung"],
  },
  {
    number: "03",
    title: "Prototyping",
    body: "In einem kurzen Sprint entsteht ein funktionsfähiger Prototyp, den Sie direkt testen können.",
    bullets: ["MVP in 2–4 Wochen", "Iteratives Feedback", "Proof of Concept"],
  },
  {
    number: "04",
    title: "Umsetzung",
    body: "Wir bauen die finale Lösung — sauber integriert, skalierbar und auf Ihre Systeme abgestimmt.",
    bullets: ["Integration", "Automatisierung", "Qualitätssicherung"],
  },
  {
    number: "05",
    title: "Wachstum",
    body: "Nach dem Launch optimieren wir kontinuierlich auf Basis echter Daten und skalieren, wo es wirkt.",
    bullets: ["Monitoring", "Optimierung", "Skalierung"],
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
            In 5 Schritten zur Lösung
          </h2>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollBy(-400)}
              aria-label="Vorheriger Schritt"
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollBy(400)}
              aria-label="Nächster Schritt"
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
          {STEPS.map((s, i) => (
            <li
              key={s.number}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] max-w-[420px]"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-[28px] bg-[#050505] text-white">
                <div className="relative px-7 md:px-8 pt-8 md:pt-10 pb-4">
                  <div className="flex items-baseline justify-between">
                    <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-white/55">
                      Schritt {s.number}
                    </div>
                    {i < STEPS.length - 1 && (
                      <span className="hidden md:block text-[11px] tracking-[0.18em] uppercase text-white/30">
                        →
                      </span>
                    )}
                  </div>
                  <div className="font-sans font-semibold text-[88px] md:text-[112px] lg:text-[128px] leading-[0.85] tracking-[-0.04em] text-white/[0.07] -mb-4 md:-mb-6 select-none">
                    {s.number}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 px-7 md:px-8 pb-8 md:pb-10">
                  <h3 className="font-sans font-semibold text-[24px] md:text-[28px] leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-white/70 text-[15px] leading-relaxed">
                    {s.body}
                  </p>
                  <ul className="mt-auto flex flex-col gap-3 pt-4 border-t border-white/10">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[15px] text-white/85"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[#050505]">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
