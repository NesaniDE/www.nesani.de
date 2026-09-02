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
 * (vorvertragliche Massnahme).
 *
 * Google braucht mehrere Sekunden bis zum ersten Frame. Solange saehe der
 * Besucher einen leeren weissen Kasten und hielte die Seite fuer kaputt.
 * Deshalb liegt ein Ladehinweis HINTER dem iframe: der iframe hat keinen
 * eigenen Hintergrund und ist transparent, solange nichts gezeichnet ist,
 * sodass der Hinweis durchscheint. Sobald Googles Seite ihren weissen
 * Hintergrund malt, verdeckt sie ihn.
 *
 * Bewusst ohne load-Ereignis geloest: das feuert bei diesem Cross-Origin-
 * Frame nicht zuverlaessig.
 */
export function TerminEmbed() {
  return (
    <div className="mt-8 md:mt-10">
      <div className="relative h-[720px] overflow-hidden rounded-2xl border border-[#050505]/10 bg-white shadow-[0_12px_40px_-24px_rgba(0,0,0,0.35)] md:h-[780px]">
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
