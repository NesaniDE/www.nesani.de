"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const FAQS = [
  {
    q: "Wie viel Zeit muss ich pro Woche investieren?",
    a: "In der Regel unter zwei Stunden pro Woche. Wir übernehmen Konzept, Schnitt, Planung und Reporting. Sie liefern Rohaufnahmen — beim Training, im Wettkampf oder an einem Production-Tag mit uns vor Ort.",
  },
  {
    q: "Was kostet das?",
    a: "Wir arbeiten in Monatspaketen, abgestimmt auf Karriere-Phase und Umfang. Genaue Preise besprechen wir, sobald wir Ihren Status und Ihre Ziele kennen — ohne Verkaufsdruck.",
  },
  {
    q: "Was, wenn ich nicht in der Region trainiere?",
    a: "Wir arbeiten deutschlandweit. Production-Tage planen wir vor Ort, der laufende Betrieb läuft komplett remote — Material wird hochgeladen, alles andere übernehmen wir.",
  },
  {
    q: "Kümmern Sie sich auch um Sponsoren?",
    a: "Wir bauen die Marke und die Unterlagen, die Sie für Sponsoren brauchen — Mediakit, Pressemappe, Plattform-Statistiken. Verhandlungen führen Sie oder Ihr Management.",
  },
  {
    q: "Gibt es Mindestlaufzeiten?",
    a: "Wir starten mit drei Monaten, damit der Aufbau Wirkung zeigt. Danach läuft alles monatlich kündbar.",
  },
  {
    q: "Was, wenn ich schon einen Manager oder eine Agentur habe?",
    a: "Wir arbeiten gerne zu — als Content- und Brand-Team neben dem bestehenden Setup. Schnittstellen stimmen wir vorher ab.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-black/10 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-5 md:py-6 text-left"
      >
        <span className="font-sans font-semibold text-[16px] md:text-[18px] leading-[1.3] text-[#050505]">
          {q}
        </span>
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 text-[#050505]">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div className="pb-5 md:pb-6 -mt-1 text-[15px] leading-[1.6] text-[#050505]/75">
          {a}
        </div>
      )}
    </li>
  );
}

export function PBFaq() {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[760px] px-5 md:px-8 py-16 md:py-24 lg:py-28">
        <div className="text-center">
          <div className="text-[12px] uppercase tracking-[0.32em] text-[#050505]/60 font-semibold">
            Häufige Fragen
          </div>
          <h2 className="mt-3 font-sans font-semibold text-[30px] md:text-[40px] leading-[1.08] tracking-[-0.02em]">
            Antworten, bevor Sie fragen.
          </h2>
        </div>

        <ul className="mt-10 md:mt-12 border-t border-black/10">
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </ul>
      </div>
    </section>
  );
}
