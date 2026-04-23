"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/icons";

type Plan = {
  name: string;
  badge?: string;
  price: string;
  priceNote?: string;
  sub: string;
  bullets: string[];
  cta: string;
  ctaNote?: string;
};

const SEGMENTS = [
  { key: "solo", label: "Selbstständige" },
  { key: "sme", label: "1-9 Mitarbeiter" },
  { key: "team", label: "10-250+ Mitarbeiter" },
] as const;

type SegmentKey = (typeof SEGMENTS)[number]["key"];

const PLANS: Record<SegmentKey, Plan[]> = {
  solo: [
    {
      name: "Starter",
      badge: "Neu",
      price: "0 €",
      sub: "Für Freiberufler:innen & Einzelunternehmen",
      bullets: [
        "1 Konto mit DE-IBAN",
        "1 virtuelle Karte (physische Karte zubuchbar)",
        "5 Transaktionen / Monat",
      ],
      cta: "Wählen",
      ctaNote: "Ohne Vertragsbindung",
    },
    {
      name: "Basic",
      price: "Ab 9 €",
      priceNote: "/ Monat (exkl. MwSt.)",
      sub: "Mit E-Rechnungsfunktionen, integrierter Buchhaltung & einer physischen Karte.",
      bullets: [
        "1 Konto mit DE-IBAN",
        "1 One Card Mastercard + 2 virtuelle Karten",
        "30 Transaktionen / Monat",
      ],
      cta: "Kostenlos testen",
      ctaNote: "30 Tage unverbindlich",
    },
    {
      name: "Smart",
      badge: "Bestseller",
      price: "Ab 19 €",
      priceNote: "/ Monat (exkl. MwSt.)",
      sub: "Das erweiterte Geschäftskonto mit direktem Buchhaltungszugriff, Rechnungs- & Buchhaltungstools.",
      bullets: [
        "1 Konto mit DE-IBAN",
        "1 Plus Card + 2 virtuelle Karten",
        "100 Transaktionen / Monat",
      ],
      cta: "Wählen",
      ctaNote: "1 Monat kostenlos testen.",
    },
  ],
  sme: [
    {
      name: "Basic",
      price: "Ab 9 €",
      priceNote: "/ Monat (exkl. MwSt.)",
      sub: "Das Geschäftskonto mit integrierten Rechnungstools vereinfacht Ihr tägliches Finanzmanagement.",
      bullets: [
        "1 Konto mit DE-IBAN",
        "1 One Card Mastercard + 2 virtuelle Karten",
        "30 Transaktionen / Monat",
      ],
      cta: "Wählen",
      ctaNote: "1 Monat kostenlos testen.",
    },
    {
      name: "Smart",
      badge: "Bestseller",
      price: "Ab 19 €",
      priceNote: "/ Monat (exkl. MwSt.)",
      sub: "Das erweiterte Geschäftskonto mit direktem Buchhaltungszugriff, Rechnungs- & Buchhaltungstools.",
      bullets: [
        "1 Konto mit DE-IBAN",
        "1 Plus Card + 2 virtuelle Karten",
        "100 Transaktionen / Monat",
      ],
      cta: "Wählen",
      ctaNote: "1 Monat kostenlos testen.",
    },
    {
      name: "Premium",
      price: "Ab 39 €",
      priceNote: "/ Monat (exkl. MwSt.)",
      sub: "Das leistungsstarke Geschäftskonto mit Premium Kundenservice, Rechnungs- & Buchhaltungstools.",
      bullets: [
        "1 Konto mit DE-IBAN",
        "1 Metal Card + unlimitierte virtuelle Karten",
        "500 Transaktionen / Monat",
      ],
      cta: "Wählen",
      ctaNote: "1 Monat kostenlos testen.",
    },
  ],
  team: [
    {
      name: "Essential",
      price: "Ab 49 €",
      priceNote: "/ Monat (exkl. MwSt.)",
      sub: "Vereinfachte Finanzverwaltung im Team, mit Ausgabenmanagement, Buchhaltungs- und Cashflow-Tools.",
      bullets: [
        "2 Konten mit DE-IBAN",
        "5 One Cards Mastercard enthalten",
        "500 Transaktionen / Monat",
      ],
      cta: "Wählen",
      ctaNote: "1 Monat kostenlos testen.",
    },
    {
      name: "Business",
      badge: "Bestseller",
      price: "Ab 99 €",
      priceNote: "/ Monat (exkl. MwSt.)",
      sub: "Die integrierte Finanzmanagement-Lösung passt sich Ihren Abläufen an, mit Premium-Kundenservice.",
      bullets: [
        "5 Konten mit DE-IBAN",
        "15 Plus Cards enthalten",
        "2.000 Transaktionen / Monat",
      ],
      cta: "Wählen",
      ctaNote: "1 Monat kostenlos testen.",
    },
    {
      name: "Enterprise",
      price: "Ab 199 €",
      priceNote: "/ Monat (exkl. MwSt.)",
      sub: "Die ultimative Finanzlösung für Teams, mit den höchsten Limits und Premium Kundenservice.",
      bullets: [
        "25 Konten mit DE-IBAN",
        "30 Metal Cards enthalten",
        "Unlimitierte Transaktionen",
      ],
      cta: "Wählen",
      ctaNote: "1 Monat kostenlos testen.",
    },
  ],
};

export function OaPricing() {
  const [seg, setSeg] = useState<SegmentKey>("solo");
  const plans = PLANS[seg];

  return (
    <section id="pricing" className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-center max-w-[22ch] mx-auto">
          Preise, die zu Ihrem Business passen
        </h2>

        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-full bg-[#F4F1EA]"
          >
            {SEGMENTS.map((s) => (
              <button
                key={s.key}
                role="tab"
                aria-selected={seg === s.key}
                onClick={() => setSeg(s.key)}
                className={[
                  "rounded-full px-4 md:px-5 py-2 text-[13px] md:text-[14px] font-medium transition",
                  seg === s.key
                    ? "bg-[#050505] text-white"
                    : "text-[#050505]/70 hover:text-[#050505]",
                ].join(" ")}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p) => {
            const highlight = p.badge === "Bestseller";
            return (
              <article
                key={p.name}
                className={[
                  "rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col border",
                  highlight
                    ? "bg-[#050505] text-white border-transparent"
                    : "bg-white text-[#050505] border-[#050505]/10",
                ].join(" ")}
              >
                <div className="flex items-center gap-2">
                  <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2]">
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span
                      className={[
                        "text-[11px] font-medium px-2 py-0.5 rounded-full",
                        highlight
                          ? "bg-white text-[#050505]"
                          : "bg-[#F4F1EA] text-[#050505]",
                      ].join(" ")}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-sans font-semibold text-[36px] md:text-[44px] leading-none">
                    {p.price}
                  </span>
                  {p.priceNote && (
                    <span
                      className={[
                        "text-[13px]",
                        highlight ? "text-white/70" : "text-[#050505]/70",
                      ].join(" ")}
                    >
                      {p.priceNote}
                    </span>
                  )}
                </div>
                <p
                  className={[
                    "mt-4 text-[14px] leading-[1.5]",
                    highlight ? "text-white/80" : "text-[#050505]/75",
                  ].join(" ")}
                >
                  {p.sub}
                </p>
                <ul className="mt-6 space-y-3">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[14px]">
                      <CheckIcon
                        className={[
                          "w-4 h-4 mt-0.5 shrink-0",
                          highlight ? "text-white" : "text-[#050505]",
                        ].join(" ")}
                      />
                      <span
                        className={
                          highlight ? "text-white/90" : "text-[#050505]/85"
                        }
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <a
                    href="#"
                    className={[
                      "inline-flex items-center rounded-full text-[14px] font-semibold px-5 py-3 w-full justify-center transition",
                      highlight
                        ? "bg-white text-[#050505] hover:bg-white/90"
                        : "bg-[#050505] text-white hover:bg-black/90",
                    ].join(" ")}
                  >
                    {p.cta}
                  </a>
                  {p.ctaNote && (
                    <p
                      className={[
                        "mt-3 text-[12px] text-center",
                        highlight ? "text-white/60" : "text-[#050505]/60",
                      ].join(" ")}
                    >
                      {p.ctaNote}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
