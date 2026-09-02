import Link from "next/link";
import { BOOKING_ENABLED, BOOKING_DURATION_MIN } from "@/lib/booking";

/**
 * Kontaktseite als Weiche: Wer reden will, bucht einen Termin. Wer lieber
 * schreibt, geht zum Formular darunter. Beide Wege stehen gleichrangig
 * nebeneinander — der eine ersetzt den anderen nicht.
 *
 * Ohne hinterlegten Terminplan faellt die linke Karte weg und die Seite
 * verhaelt sich wie vorher.
 */
export function KontaktHero() {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pt-36 md:pt-44 lg:pt-52 pb-20 md:pb-24 lg:pb-28">
        <div className="max-w-[900px]">
          <div className="text-[13px] uppercase tracking-[0.18em] text-white/70 font-semibold">
            Kontakt
          </div>
          <h1 className="mt-6 font-sans font-semibold text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] tracking-[-0.02em]">
            Projekt starten.
            <br />
            Klar, strukturiert, ohne Verkaufsdruck.
          </h1>
          <p className="mt-8 text-[17px] md:text-[19px] leading-[1.55] text-white/75 max-w-[58ch]">
            Zwei Wege, beide führen zu mir persönlich: Sie buchen ein
            Gespräch oder Sie schreiben mir. Suchen Sie sich aus, was Ihnen
            lieber ist.
          </p>
        </div>

        <div className="mt-10 grid max-w-[900px] grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
          {BOOKING_ENABLED ? (
            <Link
              href="/termin"
              className="group flex flex-col rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition hover:border-white/40 hover:bg-white/[0.07] md:p-7"
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/45">
                Sofort
              </span>
              <span className="mt-3 font-sans text-[21px] font-semibold leading-[1.25] md:text-[23px]">
                Termin buchen
              </span>
              <span className="mt-3 text-[15px] leading-[1.55] text-white/65">
                Freien Slot auswählen, {BOOKING_DURATION_MIN} Minuten, per
                Google Meet. Sie bekommen die Einschätzung direkt im Gespräch.
              </span>
              <span className="mt-5 text-[15px] font-medium text-white underline underline-offset-4 group-hover:no-underline">
                Freie Termine ansehen
              </span>
            </Link>
          ) : null}

          <a
            href="#formular"
            className="group flex flex-col rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition hover:border-white/40 hover:bg-white/[0.07] md:p-7"
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/45">
              Schriftlich
            </span>
            <span className="mt-3 font-sans text-[21px] font-semibold leading-[1.25] md:text-[23px]">
              Formular ausfüllen
            </span>
            <span className="mt-3 text-[15px] leading-[1.55] text-white/65">
              Vorhaben in Ruhe schildern — Ziel, Stand und Rahmen. Antwort in
              der Regel innerhalb von 24 Stunden.
            </span>
            <span className="mt-5 text-[15px] font-medium text-white underline underline-offset-4 group-hover:no-underline">
              Zum Formular
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
