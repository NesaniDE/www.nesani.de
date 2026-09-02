import { BOOKING_ENABLED } from "@/lib/booking";

type Props = {
  /** "solid" = weisser Button auf dunklem Grund, "outline" = nur Rahmen. */
  variant?: "solid" | "outline";
  className?: string;
};

/**
 * Terminbuchung als CTA. Steht ueberall neben dem Formular-CTA, nicht an
 * dessen Stelle — wer lieber schreibt, soll das weiter direkt koennen.
 *
 * Ohne hinterlegten Terminplan rendert die Komponente nichts, damit kein
 * Button ins Leere zeigt.
 */
export function TerminButton({ variant = "solid", className = "" }: Props) {
  if (!BOOKING_ENABLED) return null;

  const base =
    "inline-flex items-center rounded-full text-[14px] md:text-[15px] font-semibold px-5 py-2.5 md:py-3 transition";
  const look =
    variant === "solid"
      ? "bg-white text-[#050505] hover:bg-white/90"
      : "border border-white/60 text-white hover:bg-white/10";

  return (
    <a href="/termin" className={`${base} ${look} ${className}`.trim()}>
      Termin buchen
    </a>
  );
}
