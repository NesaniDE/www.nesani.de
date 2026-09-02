"use client";

import { useState } from "react";
import { BOOKING_URL, BOOKING_EMBED_URL } from "@/lib/booking";

/**
 * Terminbuchung mit zwei Wegen.
 *
 * Primaer ist der Link, der Googles Buchungsseite in einem neuen Tab
 * oeffnet. Der funktioniert in jedem Browser.
 *
 * Die Einbettung darunter ist bewusst nur ein Zusatz: Googles Buchungsseite
 * braucht im iframe einen Drittanbieter-Kontext, den Safari standardmaessig
 * und Chrome zunehmend blockiert. Dann bleibt die Flaeche leer. Deshalb darf
 * die Einbettung nie der einzige Weg zur Buchung sein.
 *
 * Geladen wird sie erst nach ausdruecklichem Klick — vorher geht keine
 * Anfrage an Google und es werden keine Daten ohne Einwilligung uebertragen.
 */
export function TerminEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mt-10 md:mt-12">
      <div className="rounded-2xl bg-[#050505] px-6 py-10 text-center text-white md:px-12 md:py-14">
        <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-white/50">
          Freien Termin wählen
        </p>
        <h2 className="mx-auto mt-4 max-w-[20ch] font-sans text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] md:text-[34px]">
          Suchen Sie sich einen Slot aus.
        </h2>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#050505] transition hover:bg-white/90 md:text-[16px]"
        >
          Terminkalender öffnen
        </a>
        <p className="mt-5 text-[13px] text-white/45">
          Öffnet die Buchungsseite in Google Kalender in einem neuen Tab.
        </p>
      </div>

      {loaded ? (
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#050505]/10 bg-white">
          <iframe
            src={BOOKING_EMBED_URL}
            title="Terminbuchung"
            className="h-[680px] w-full md:h-[760px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="border-t border-[#050505]/10 px-5 py-4 text-center text-[13px] text-[#050505]/55">
            Bleibt der Kalender leer? Dann blockiert Ihr Browser die
            Einbettung —{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#050505] underline underline-offset-4 hover:no-underline"
            >
              hier geht es direkt zur Buchungsseite
            </a>
            .
          </p>
        </div>
      ) : (
        <p className="mt-6 text-center text-[14px] leading-[1.6] text-[#050505]/55">
          Lieber ohne Seitenwechsel?{" "}
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="font-medium text-[#050505] underline underline-offset-4 hover:no-underline"
          >
            Kalender hier einbetten
          </button>{" "}
          — dabei wird eine Verbindung zu Google hergestellt und Daten wie Ihre
          IP-Adresse werden übertragen. Mehr dazu in der{" "}
          <a
            href="/datenschutz"
            className="underline underline-offset-4 hover:no-underline"
          >
            Datenschutzerklärung
          </a>
          .
        </p>
      )}
    </div>
  );
}
