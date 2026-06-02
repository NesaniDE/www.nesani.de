"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";

const FAQS = [
  {
    q: "Wie viel Zeit muss ich pro Woche investieren?",
    a: "In der Regel unter zwei Stunden pro Woche. Wir übernehmen Konzept, Schnitt, Planung und Reporting. Sie liefern die Rohaufnahmen — beim Training, im Wettkampf oder an einem Production-Tag mit uns vor Ort.",
  },
  {
    q: "Was kostet das?",
    a: "Wir arbeiten in Monatspaketen, abgestimmt auf Karriere-Phase und Umfang. Genaue Preise besprechen wir im Erstgespräch, sobald wir Ihren Status und Ihre Ziele kennen — ohne Verkaufsdruck.",
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
    a: "Wir arbeiten gerne zu — als Content- und Brand-Team neben dem bestehenden Setup. Wir stimmen Schnittstellen vorher ab.",
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
        <span className="font-sans font-semibold text-[17px] md:text-[19px] leading-[1.3] text-[#050505]">
          {q}
        </span>
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 text-[#050505]">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div className="pb-5 md:pb-6 -mt-1 max-w-[68ch] text-[15px] md:text-[16px] leading-[1.6] text-[#050505]/75">
          {a}
        </div>
      )}
    </li>
  );
}

export function PBFaqCta() {
  return (
    <>
      <section className="bg-white text-[#050505]">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
          <div className="max-w-[760px]">
            <div className="text-[12px] uppercase tracking-[0.32em] text-[#050505]/60 font-semibold">
              Häufige Fragen
            </div>
            <h2 className="mt-4 font-sans font-semibold text-[34px] md:text-[48px] leading-[1.05] tracking-[-0.02em]">
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

      <section className="bg-[#050505] text-white">
        <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 md:p-14 lg:p-20 text-center">
            <div className="text-[12px] uppercase tracking-[0.32em] text-white/55 font-semibold">
              Erstgespräch
            </div>
            <h2 className="mt-4 mx-auto font-sans font-semibold text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.02em] max-w-[18ch]">
              30 Minuten. Ehrliche Einschätzung.
            </h2>
            <p className="mt-6 mx-auto text-[16px] md:text-[18px] leading-[1.55] text-white/70 max-w-[58ch]">
              Erzählen Sie, wo Sie stehen. Wir sagen offen, ob und wie wir
              helfen können — und was sinnvoll ist, bevor überhaupt Geld
              fließt.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#050505] px-7 py-3.5 text-[15px] font-semibold hover:bg-white/90 transition-colors"
              >
                Termin anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:info@nesani.de?subject=Personal%20Brand%20f%C3%BCr%20Athleten"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-white/5 transition-colors"
              >
                info@nesani.de
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
