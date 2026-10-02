import { Reveal } from "@/components/Reveal";
import { HeroVideo } from "@/components/HeroVideo";

export function Hero() {
  return (
    <section className="relative w-full min-h-[78svh] md:min-h-[100svh] overflow-hidden bg-[#050505] text-white">
      <HeroVideo
        desktop="/videos/nesani-digitalagentur-schwaebisch-gmuend-hero.mp4"
        mobile="/videos/nesani-digitalagentur-schwaebisch-gmuend-hero-mobile.mp4"
        poster="/images/nesani-digitalagentur-schwaebisch-gmuend-hero.jpg"
        className="absolute inset-0 z-10 w-full h-full object-cover [object-position:85%_center] md:[object-position:center]"
      />
      {/* Bottom scrim gradient (z-30) */}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(rgba(5,5,5,0) 78.6%, rgb(5,5,5) 100%), linear-gradient(0deg, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0.15) 100%)",
        }}
      />

      {/* Content grid */}
      <div className="relative z-40 flex h-full min-h-[78svh] md:min-h-[100svh] flex-col justify-end pb-12 pt-28 px-5 lg:px-12">
        <div className="flex-1" />

        {/* Headline + CTA */}
        <div className="flex flex-col gap-y-4 sm:gap-y-6 lg:max-w-[870px]">
          <Reveal
            as="h1"
            direction="up"
            distance={18}
            className="font-sans font-bold text-[38px] sm:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.02em]"
          >
            Sichtbarer.<br />
            Effizienter.<br />
            Autonomer.
            <span className="mt-2 sm:mt-3 block font-sans font-medium text-[14px] sm:text-[19px] lg:text-[22px] leading-[1.4] tracking-normal text-white/65">
              Digitalagentur für Social Media, Websites &amp; KI-Automatisierung
              aus Schwäbisch Gmünd.
            </span>
          </Reveal>

          {/* Auf Mobile bewusst weggelassen: sagt dasselbe wie die Zeile
              in der H1, nur länger — auf kleinen Screens stapelte sich der
              Text zu dicht. Ab sm wieder da, dort ist Platz für beides. */}
          <Reveal
            delay={120}
            className="hidden sm:block mt-5 lg:mt-7 text-[16px] lg:text-[18px] leading-[1.55] text-white/75 max-w-[52ch]"
          >
            NESANI unterstützt Unternehmen in drei Bereichen: Social Media,
            Websites sowie KI &amp; Automatisierung — von der Strategie über die
            Umsetzung bis zur laufenden Betreuung.
          </Reveal>

          <Reveal delay={200} className="mt-4 sm:mt-6 lg:mt-10">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-white text-black text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition"
            >
              Projekt anfragen
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
