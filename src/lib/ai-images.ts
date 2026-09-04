/**
 * Herkunft der Bilder auf dieser Website.
 *
 * Hintergrund: Artikel 50 der EU-KI-Verordnung gilt seit dem 2. August 2026.
 * Eine Kennzeichnungspflicht besteht fuer unsere Illustrationen NICHT — sie
 * greift nur bei Deepfakes, also Inhalten, die existierende Personen, Orte
 * oder Ereignisse zeigen und faelschlich echt wirken. Wir kennzeichnen
 * trotzdem, weil es zur Positionierung passt und ehrlicher ist.
 *
 * Regel: Alles unter /images/ gilt als KI-generiert, AUSSER es steht in
 * HUMAN_MADE. Diese Richtung ist bewusst gewaehlt — ein neues Bild ist im
 * Zweifel eher KI, und ein vergessener Eintrag fuehrt dann zu einem
 * ueberfluessigen Hinweis statt zu einem fehlenden.
 */

/** Echte Aufnahmen: eigene Fotos, Kundenreferenzen, Screenshots, Logos. */
const HUMAN_MADE = new Set<string>([
  // Kundenreferenzen und eigene Projekte
  "/images/projects/christian-jungwirth.webp",
  "/images/projects/handwerk-urim.webp",
  "/images/projects/nesani.webp",
  "/images/projects/nesani-chatbot.webp",
  // Portraits realer Personen
  "/images/nedim-portrait-2026.webp",
  "/images/breit/portrait-christian.webp",
  "/images/breit/portrait-christian-about.webp",
  "/images/breit/portrait-urim.webp",
  // Screenshot eines realen Instagram-Profils
  "/images/lp/videoproduktion/reference-jungwirth.png",
])

/**
 * Praefixe, unter denen ausschliesslich echte Aufnahmen liegen.
 * Die Poster stammen aus eigenen Videoproduktionen.
 */
const HUMAN_MADE_PREFIXES = ["/images/lp/videoproduktion/clip-", "/images/lp/videoproduktion/gastronomie-", "/images/lp/videoproduktion/kampfsport-"]

/** Marken- und Systemgrafiken: weder Foto noch Illustration, nie kennzeichnen. */
const NEUTRAL_PREFIXES = ["/images/shm-logo", "/seo/", "/og-image", "/icon-", "/apple-"]

/**
 * true, wenn das Bild KI-generiert ist und einen Hinweis bekommen soll.
 * Query-Parameter und absolute URLs werden toleriert.
 */
export function isAiGenerated(src: string): boolean {
  if (!src) return false
  const path = src.replace(/^https?:\/\/[^/]+/, "").split("?")[0]
  if (!path.startsWith("/images/")) return false
  if (NEUTRAL_PREFIXES.some((p) => path.startsWith(p))) return false
  if (HUMAN_MADE.has(path)) return false
  if (HUMAN_MADE_PREFIXES.some((p) => path.startsWith(p))) return false
  return true
}
