import Link from "next/link";
import { BOOKING_ENABLED, BOOKING_DURATION_MIN } from "@/lib/booking";

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
            Schildern Sie kurz Ihr Vorhaben — Ziel, Stand und Rahmen. Sie
            bekommen in der Regel innerhalb von 24 Stunden eine ehrliche
            Einschätzung, ob und wie wir helfen können.
          </p>
          {BOOKING_ENABLED ? (
            <p className="mt-6 text-[16px] md:text-[17px] leading-[1.55] text-white/60">
              Lieber direkt sprechen?{" "}
              <Link
                href="/termin"
                className="font-medium text-white underline underline-offset-4 hover:no-underline"
              >
                {BOOKING_DURATION_MIN}-minütiges Erstgespräch buchen
              </Link>{" "}
              — freien Termin auswählen, fertig.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
