"use client";

import { useState } from "react";
import { BOOKING_URL } from "@/lib/booking";

/**
 * Zwei-Klick-Einbettung der Google-Buchungsseite.
 *
 * Der Kalender wird erst nach ausdrücklichem Klick geladen. Vorher geht
 * keine Anfrage an Google, es werden also keine Daten ohne Einwilligung
 * übertragen. Wer nicht einbetten will, nutzt den direkten Link darunter.
 */
export function TerminEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mt-10 md:mt-12">
      {loaded ? (
        <div className="overflow-hidden rounded-2xl border border-[#050505]/10 bg-white">
          <iframe
            src={BOOKING_URL}
            title="Terminbuchung"
            className="h-[680px] w-full md:h-[760px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#050505]/20 bg-white/60 px-6 py-12 text-center md:px-10 md:py-16">
          <p className="mx-auto max-w-[52ch] text-[15px] leading-[1.6] text-[#050505]/70">
            Der Buchungskalender wird von Google bereitgestellt. Wenn Sie ihn
            laden, stellt Ihr Browser eine Verbindung zu Google her und es
            werden Daten wie Ihre IP-Adresse übertragen. Details stehen in
            unserer{" "}
            <a
              href="/datenschutz"
              className="font-medium text-[#050505] underline underline-offset-4 hover:no-underline"
            >
              Datenschutzerklärung
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="btn-primary mt-7 inline-flex"
          >
            Kalender laden und Termin wählen
          </button>
          <p className="mt-4 text-[13px] text-[#050505]/50">
            Lieber ohne Einbettung?{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline"
            >
              Buchungsseite direkt bei Google öffnen
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
