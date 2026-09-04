import { isAiGenerated } from "@/lib/ai-images";

type Props = {
  /** Bildpfad. Ist das Bild keine KI-Grafik, rendert die Komponente nichts. */
  src: string;
  /**
   * "sm" fuer Kacheln und Vorschaubilder: nur das Kuerzel, Volltext im
   * title-Attribut. "md" fuer grosse Bilder: ausgeschriebener Hinweis.
   */
  size?: "sm" | "md";
  className?: string;
};

/**
 * Kennzeichnet KI-generierte Bilder.
 *
 * Der Hinweis liegt als Overlay im Bild, damit er beim Teilen und beim
 * Scrollen zusammen mit dem Bild sichtbar bleibt. Bewusst zurueckhaltend:
 * er soll erkennbar sein, ohne die Gestaltung zu dominieren.
 *
 * Muss in einem Container mit `position: relative` stehen.
 */
export function AiBadge({ src, size = "sm", className = "" }: Props) {
  if (!isAiGenerated(src)) return null;

  const base =
    "pointer-events-none absolute z-10 inline-flex items-center gap-1 rounded-full bg-black/55 font-medium text-white backdrop-blur-sm";
  const look =
    size === "md"
      ? "bottom-3 right-3 px-2.5 py-1 text-[11px] md:bottom-4 md:right-4 md:text-[12px]"
      : "bottom-2 right-2 px-2 py-0.5 text-[10px]";

  return (
    <span
      className={`${base} ${look} ${className}`.trim()}
      title="Dieses Bild wurde mit KI erstellt."
    >
      <span aria-hidden="true">✦</span>
      {size === "md" ? "KI-generiert" : "KI"}
      <span className="sr-only">Dieses Bild wurde mit KI erstellt.</span>
    </span>
  );
}
