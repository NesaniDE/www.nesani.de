import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

export function OaAllInOne() {
  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.03] tracking-[-0.02em] max-w-[16ch]">
          Das All-in-one-Firmenkonto für Ihren Start
        </h2>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6">
          <article className="lg:col-span-4 rounded-2xl md:rounded-3xl bg-[#111] border border-white/5 p-6 md:p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2]">
                Persönlicher Kundenservice
              </h3>
            </div>
            <div className="mt-6">
              <Image
                src="/images/oa-33279-a0d1dc7b5b.png"
                alt="24/7 Service"
                width={140}
                height={140}
                className="h-24 w-auto object-contain"
              />
            </div>
          </article>

          <article className="lg:col-span-5 rounded-2xl md:rounded-3xl bg-[#111] border border-white/5 p-6 md:p-8 flex flex-col justify-between min-h-[320px]">
            <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2]">
              Effiziente Workflows
            </h3>
            <div className="mt-6 relative aspect-[16/10]">
              <Image
                src="/images/oa-33347-b0163a91fd.avif"
                alt="Effiziente Workflows"
                fill
                sizes="(min-width:1024px) 480px, 100vw"
                className="object-contain object-bottom"
              />
            </div>
          </article>

          <article className="lg:col-span-3 rounded-2xl md:rounded-3xl bg-[#111] border border-white/5 p-6 md:p-8 flex flex-col justify-between min-h-[320px] overflow-hidden">
            <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2]">
              Alles an einem Ort
            </h3>
            <div className="relative -mx-6 -mb-6 md:-mx-8 md:-mb-8 aspect-[5/4]">
              <Image
                src="/images/oa-34667-2cb06cc635.avif"
                alt="Alles an einem Ort"
                fill
                sizes="(min-width:1024px) 300px, 100vw"
                className="object-cover"
              />
            </div>
          </article>

          <article className="lg:col-span-5 rounded-2xl md:rounded-3xl bg-[#111] border border-white/5 p-6 md:p-8 flex flex-col justify-between min-h-[220px]">
            <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2]">
              Echtzeit-Überblick
            </h3>
            <p className="mt-4 text-[14px] leading-[1.55] text-white/70">
              Behalten Sie alle Transaktionen, Kartenzahlungen und Ausgaben in
              Echtzeit im Blick.
            </p>
          </article>

          <article className="lg:col-span-7 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 min-h-[220px]"
            style={{ background: "linear-gradient(135deg,#1A3A1F 0%,#0E1F12 100%)" }}
          >
            <div>
              <p className="text-[13px] text-white/80 uppercase tracking-wider">
                Kostenloses Geschäftskonto
              </p>
              <h3 className="mt-3 font-sans font-semibold text-[28px] md:text-[36px] leading-[1.1]">
                Konto eröffnen
              </h3>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#050505] text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition"
            >
              Jetzt starten
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
