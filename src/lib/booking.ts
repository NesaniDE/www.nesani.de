/**
 * Öffentliche Google-Terminbuchungsseite (Workspace-Terminplan).
 *
 * Anlegen: Google Kalender → "Erstellen" → "Terminplan" → Dauer, Zeitfenster
 * und Puffer setzen → "Speichern" → "Buchungsseite öffnen" → diese URL hier
 * eintragen. Format: https://calendar.app.google/XXXXXXXXXXXX
 *
 * Solange der Wert leer ist, bleibt /termin unveröffentlicht: die Seite
 * leitet auf /kontakt, taucht nicht in der Sitemap auf und der Chatbot
 * bietet keine Terminbuchung an. So kann der Code deployt werden, bevor
 * der Terminplan steht.
 */
export const BOOKING_URL = "https://calendar.app.google/WHsSRtaa5tLuexor6";

export const BOOKING_ENABLED = BOOKING_URL.length > 0;

/** Dauer des Erstgesprächs in Minuten — nur für die Anzeige. */
export const BOOKING_DURATION_MIN = 20;
