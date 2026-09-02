/**
 * Google-Terminbuchung (Workspace-Terminplan).
 *
 * Es braucht ZWEI URLs, weil Google sie unterschiedlich ausliefert:
 *
 * - BOOKING_URL ist der kurze Teilen-Link (calendar.app.google/...). Er ist
 *   zum Weitergeben gedacht, liefert aber `X-Frame-Options: SAMEORIGIN` und
 *   laesst sich deshalb NICHT einbetten — im iframe bliebe die Flaeche leer.
 *   Wir nutzen ihn nur fuer Links, die in einem neuen Tab oeffnen.
 *
 * - BOOKING_EMBED_URL ist die lange Terminplan-URL mit `?gv=true`. Sie setzt
 *   kein X-Frame-Options und ist die von Google vorgesehene Einbettung.
 *   In Google Kalender zu finden unter Terminplan → "Teilen" → "Einbetten".
 *
 * BOOKING_URL leer lassen deaktiviert die Terminbuchung vollstaendig:
 * /termin leitet auf /kontakt, faellt aus der Sitemap, geht auf noindex und
 * der Chatbot bietet keine Termine an.
 */
export const BOOKING_URL = "https://calendar.app.google/WHsSRtaa5tLuexor6";

export const BOOKING_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ336tnqgkjPjSjmv5LhinFzCe5RrMdvSbp3T1VoSYJ91zhE8mK0byPCQ6gBH44V_2g92T6iYpzQ?gv=true";

export const BOOKING_ENABLED = BOOKING_URL.length > 0;

/** Dauer des Erstgesprächs in Minuten — nur für die Anzeige. */
export const BOOKING_DURATION_MIN = 30;
