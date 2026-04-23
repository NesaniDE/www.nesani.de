"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "Was ist ein Geschäftskonto?",
    a: "Ein Firmen- oder Geschäftskonto ist ein Konto, das speziell für Unternehmen und Selbstständige gedacht ist. Über ein Geschäftskonto werden ausschließlich betriebliche Einnahmen und Ausgaben transferiert. Es entspricht einem Konto für Privatleute, enthält allerdings meist umfangreichere Funktionen. Somit sind geschäftliche und private Finanzen des Unternehmers klar voneinander getrennt.",
  },
  {
    q: "Was kostet ein Firmenkonto?",
    a: "Jedes Unternehmen ist anders und die Anforderungen an ein Geschäftskonto hängen stark von der Anzahl der Mitarbeitenden und dem Transaktionsvolumen ab. Qonto bietet daher skalierbare Pläne ab 0 € pro Monat für Einzelunternehmen bis hin zu Enterprise-Tarifen für größere Teams.",
  },
  {
    q: "Welche Vorteile bietet ein Qonto Geschäftskonto?",
    a: "Qonto überzeugt mit schnellem und einfachem Online Banking und innovativen Finanztools für Unternehmer:innen, Gründer:innen, Selbstständige und Freiberufler:innen. Zu den Leistungen zählen Zahlungskarten, SEPA-Echtzeitüberweisungen, Auslandszahlungen, Apple Pay, Google Pay, digitale Spesenverwaltung, Budgetierungssoftware und Finanzreporting.",
  },
  {
    q: "Kann ich mit Qonto mein bisheriges Geschäftskonto wechseln?",
    a: "Ja. Qonto bietet einen kostenlosen Kontowechselservice: Dauerauftragsdaten und wiederkehrende Zahlungen übertragen Sie unkompliziert zu Ihrem neuen Qonto Geschäftskonto.",
  },
  {
    q: "Ist das Qonto Geschäftskonto sicher?",
    a: "Ja. Qonto ist ein reguliertes Finanzinstitut, Kundengelder sind gesetzlich abgesichert und es gelten Top-Standards für IT-Sicherheit und Datenschutz.",
  },
];

export function OaFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1120px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
          Häufig gestellte Fragen zum Geschäftskonto
        </h2>

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
