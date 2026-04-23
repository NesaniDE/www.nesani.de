"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "Welche Unterlagen und Dokumente benötige ich für die Eröffnung eines Geschäftskontos?",
    a: "Die Dokumente, die Sie für die Kontoeröffnung bei Qonto benötigen, hängen von der Rechtsform Ihres Unternehmens ab. Typisch sind: Identitätsnachweis (Personalausweis oder Reisepass), Nachweis über die Geschäftstätigkeit (Handelsregisterauszug, Gewerbeschein, Brief vom Finanzamt oder GbR-Vertrag), Vollmacht der Geschäftsführung, Nachweis der Geschäftsadresse sowie Steueridentifikationsnummer. Für Unternehmen in Gründung werden die notariell beglaubigten Gründungsunterlagen benötigt.",
  },
  {
    q: "Wann braucht man ein Geschäftskonto?",
    a: "Ein Geschäftskonto ist erforderlich oder zu empfehlen, sobald Sie eine gewerbliche Tätigkeit aufnehmen, um private und betriebliche Finanzen klar zu trennen. Dies vereinfacht die Buchhaltung, erleichtert Steuererklärungen und schafft Transparenz für Geschäftspartner.",
  },
  {
    q: "Wie hoch sind Kosten und Gebühren des Firmenkontos?",
    a: "Bei Qonto starten die Pläne ab 0 € mit dem Starter-Tarif. Weitere Pläne sind ab 9 €, 19 € oder 39 € pro Monat verfügbar. Für Teams gibt es passende Tarife ab 49 €, 99 € und 199 € pro Monat. Alle Preise verstehen sich zzgl. MwSt.",
  },
  {
    q: "Welche Voraussetzungen gelten für die Geschäftskontoeröffnung?",
    a: "Für die Eröffnung eines Qonto Geschäftskontos benötigen Sie einen Wohnsitz in Deutschland, einen gültigen Identitätsnachweis sowie die passenden Nachweise zu Ihrer Geschäftstätigkeit. Die Identifikation erfolgt online per Video-Call.",
  },
  {
    q: "Wie schnell kann ich ein Geschäftskonto eröffnen?",
    a: "Sie können ein Qonto Geschäftskonto in nur 10 Minuten online eröffnen. Nach erfolgreicher Identifikation erhalten Sie Ihre deutsche IBAN direkt zur Nutzung.",
  },
  {
    q: "Welche Bank ist gut für ein Geschäftskonto?",
    a: "Qonto ist ein reguliertes Finanzinstitut und bietet ein 100 % digitales Geschäftskonto mit deutscher IBAN, virtuellen und physischen Karten, Buchhaltungstools und Cashflow-Management – ideal für KMU, Selbstständige und Freiberufler:innen.",
  },
  {
    q: "Ist ein Geschäftskonto auch ein Girokonto?",
    a: "Ein Geschäftskonto erfüllt die Funktionen eines Girokontos (Zahlungen tätigen und empfangen), ist aber auf die Anforderungen von Unternehmen zugeschnitten und bietet meist umfangreichere Funktionen als ein privates Girokonto.",
  },
];

export function OaFaqTop() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1120px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[20ch]">
          Ein Geschäftskonto eröffnen: Unterlagen, Voraussetzungen, Kosten
        </h2>
        <p className="mt-4 text-[16px] md:text-[18px] leading-[1.5] text-[#050505]/70 max-w-[54ch]">
          Die wichtigsten Informationen zu Firmen- und Geschäftskonten auf einen
          Blick.
        </p>

        <div className="mt-10 divide-y divide-[#050505]/10 border-y border-[#050505]/10">
          {ITEMS.map((it, i) => {
            const isOpen = i === open;
            return (
              <div key={it.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left"
                >
                  <span className="font-sans font-semibold text-[18px] md:text-[20px] leading-[1.35]">
                    {it.q}
                  </span>
                  <ChevronDownIcon
                    className={[
                      "w-4 h-4 shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>
                <div
                  className={[
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="text-[15px] leading-[1.65] text-[#050505]/80 max-w-[72ch]">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
