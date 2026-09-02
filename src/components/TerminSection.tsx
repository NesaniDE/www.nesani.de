import { BOOKING_URL, BOOKING_EMBED_URL, BOOKING_ENABLED, BOOKING_DURATION_MIN } from "@/lib/booking";

/**
 * Buchungskalender direkt am Seitenende — auf Start-, Leistungs-, Landing-
 * und Kontaktseite. Damit niemand erst zu /termin navigieren muss.
 *
 * Wichtig: `loading="lazy"`. Der iframe wird erst geladen, wenn der Besucher
 * bis hierher scrollt. Wer die Seite nur oben liest, baut keine Verbindung
 * zu Google auf — das haelt die Ladezeit unten und die Datenuebertragung
 * auf das Noetige begrenzt.
 *
 * Eingebettet wird die lange Terminplan-URL mit `?gv=true`. Der kurze
 * Teilen-Link (calendar.app.google/...) setzt X-Frame-Options: SAMEORIGIN
 * und wuerde eine leere Flaeche ergeben — er gehoert nur in den Textlink.
 *
 * Der Ladehinweis liegt hinter dem iframe: solange nichts gezeichnet ist,
 * ist der iframe transparent und der Hinweis scheint durch.
 */
export function TerminSection() {
  if (!BOOKING_ENABLED) return null;

  return (
    <section
      id="termin-buchen"
      className="scroll-mt-20 bg-[#F4F1EA] text-[#050505]"
    >
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <p className="text-[13px] font-medium uppercase tracking-widest text-[#050505]/55">
          Erstgespräch
        </p>
        <h2 className="mt-4 max-w-[20ch] font-sans text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] md:text-[44px] lg:text-[52px]">
          Suchen Sie sich direkt einen Termin aus.
        </h2>
        <p className="mt-5 max-w-[58ch] text-[16px] leading-[1.55] text-[#050505]/70 md:text-[17px]">
          {BOOKING_DURATION_MIN} Minuten per Google Meet, ohne Verkaufsdruck.
          Sie schildern Ihr Vorhaben, Sie bekommen eine ehrliche Einschätzung.
        </p>

        <div className="relative mt-8 h-[700px] overflow-hidden rounded-2xl border border-[#050505]/10 bg-white shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)] md:mt-10 md:h-[760px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-3 px-6 text-center"
          >
            <span className="h-6 w-6 animate-spin rounded-full border-2 border-[#050505]/15 border-t-[#050505]/60" />
            <span className="text-[14px] text-[#050505]/50">
              Freie Termine werden geladen …
            </span>
          </div>

          <iframe
            src={BOOKING_EMBED_URL}
            title="Freien Termin auswählen"
            className="absolute inset-0 z-10 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="mt-4 text-[13px] leading-[1.6] text-[#050505]/50">
          Kalender bleibt leer oder lädt nicht?{" "}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#050505]/75 underline underline-offset-4 hover:no-underline"
          >
            Buchungsseite in neuem Tab öffnen
          </a>
        </p>
      </div>
    </section>
  );
}
