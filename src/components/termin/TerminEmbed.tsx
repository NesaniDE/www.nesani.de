import { BOOKING_URL, BOOKING_EMBED_URL } from "@/lib/booking";

/**
 * Buchungskalender direkt auf der Seite.
 *
 * Eingebettet wird die lange Terminplan-URL mit `?gv=true` — die von Google
 * fuer Einbettungen vorgesehene Variante ohne X-Frame-Options. Der kurze
 * Teilen-Link (calendar.app.google/...) setzt SAMEORIGIN und darf hier
 * NICHT verwendet werden, sonst bleibt die Flaeche leer.
 *
 * Der Kalender laedt sofort, weil er der Zweck dieser Seite ist: wer /termin
 * aufruft, will buchen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
 * (vorvertragliche Massnahme); die Datenverarbeitung ist in der
 * Datenschutzerklaerung beschrieben.
 *
 * Darunter steht immer ein Direktlink — als Ausweg, falls ein Browser die
 * Einbettung doch blockiert.
 */
export function TerminEmbed() {
  return (
    <div className="mt-8 md:mt-10">
      <div className="overflow-hidden rounded-2xl border border-[#050505]/10 bg-white shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)]">
        <iframe
          src={BOOKING_EMBED_URL}
          title="Freien Termin auswählen"
          className="h-[720px] w-full border-0 md:h-[780px]"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="mt-4 text-center text-[13px] leading-[1.6] text-[#050505]/50">
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
  );
}
