import Image from "next/image";

export function OaCta() {
  return (
    <section className="bg-[#F4F1EA] py-10 md:py-16">
      <div className="mx-auto max-w-[1344px] px-5 lg:px-12">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] min-h-[460px] md:min-h-[520px]">
          <Image
            src="/images/oa-hero-nesani.png"
            alt="Nesani — Projekt anfragen"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30 md:bg-gradient-to-t md:from-black/60 md:via-black/20 md:to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-center text-center px-5 md:px-16 lg:px-24 pb-8 md:pb-0 text-white">
            <h2 className="font-sans font-semibold text-[28px] md:text-[64px] lg:text-[84px] leading-[1.05] md:leading-[1] tracking-[-0.02em]">
              Bereit, sichtbarer und leistungsfähiger zu werden?
            </h2>
            <p className="mt-4 md:mt-6 text-[14px] md:text-[18px] leading-[1.5] max-w-[52ch] text-white/90">
              Ein unverbindliches Erstgespräch – wir schauen gemeinsam, wo Ihr
              Unternehmen digital steht und welche Stufe den größten Hebel bringt.
            </p>
            <div className="mt-5 md:mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-white text-[#050505] text-[14px] md:text-[15px] font-semibold px-5 py-2.5 md:py-3 hover:bg-white/90 transition"
              >
                Projekt anfragen
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center rounded-full border border-white/60 text-white text-[14px] md:text-[15px] font-semibold px-5 py-2.5 md:py-3 hover:bg-white/10 transition"
              >
                Leistungen ansehen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
