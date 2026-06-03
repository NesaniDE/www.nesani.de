import { ArrowDown } from "lucide-react";

export function PBHero() {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[#6943ff] blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[320px] w-[420px] rounded-full bg-[#f76d2b] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[760px] px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[12px] uppercase tracking-[0.18em] text-white/75 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4fe8b3]" />
          Personal Brand
        </div>

        <h1 className="mt-6 md:mt-8 font-sans font-semibold text-[40px] md:text-[60px] lg:text-[72px] leading-[1.02] tracking-[-0.025em]">
          Aus Leistung wird eine Marke.
        </h1>

        <p className="mt-5 md:mt-6 text-[16px] md:text-[18px] leading-[1.55] text-white/75 max-w-[52ch] mx-auto">
          Personal Branding für Athletinnen und Athleten — jede Sportart,
          jedes Level. Erzählen Sie uns kurz, wer Sie sind und wo Sie
          stehen. Wir melden uns innerhalb von 24&nbsp;Stunden.
        </p>

        <a
          href="#anfrage"
          className="mt-8 md:mt-10 inline-flex items-center gap-2 rounded-full bg-white text-[#050505] px-7 py-3.5 text-[15px] font-semibold hover:bg-white/90 transition-colors"
        >
          Anfrage starten
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
