import Image from "next/image";

export function CtaSection() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-[1344px] px-5 lg:px-12">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] min-h-[420px] md:min-h-[480px]">
          <Image
            src="/images/breit/cta-kompliziert.png"
            alt="Nesani"
            fill
            sizes="100vw"
            className="object-cover object-[75%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/60 md:from-black/30 via-black/20 md:via-black/10 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-6 md:px-16 md:py-0 lg:px-24 text-white max-w-2xl">
            <h2 className="font-sans font-semibold text-[28px] md:text-[56px] lg:text-[64px] leading-[1.05] md:leading-[1] tracking-[-0.02em]">
              Kompliziert?<br />Nicht mit uns.
            </h2>
            <div className="mt-5 md:mt-8">
              <a
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-white text-[#050505] text-[14px] md:text-[15px] font-semibold px-5 py-2.5 md:py-3 hover:bg-white/90 transition"
              >
                Projekt anfragen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
