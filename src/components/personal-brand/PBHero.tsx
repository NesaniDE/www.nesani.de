import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function PBHero() {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]">
        <div className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-[#6943ff] blur-[140px]" />
        <div className="absolute top-1/3 -right-32 h-[360px] w-[360px] rounded-full bg-[#f76d2b] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[12px] uppercase tracking-[0.18em] text-white/75 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4fe8b3]" />
              Personal Brand · Athleten
            </div>

            <h1 className="mt-6 md:mt-8 font-sans font-semibold text-[40px] md:text-[60px] lg:text-[78px] leading-[1.02] tracking-[-0.025em] max-w-[18ch]">
              Aus Leistung wird eine Marke.
            </h1>

            <p className="mt-6 md:mt-8 text-[17px] md:text-[19px] leading-[1.55] text-white/75 max-w-[58ch]">
              Wir bauen die digitale Präsenz von Athletinnen und Athleten —
              strategisch, konsistent und unverwechselbar. Damit Ihre Story
              dort ankommt, wo Fans, Sponsoren und Vereine sie sehen.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#050505] px-7 py-3.5 text-[15px] font-semibold hover:bg-white/90 transition-colors"
              >
                Erstgespräch buchen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#prozess"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-white/5 transition-colors"
              >
                So arbeiten wir
              </Link>
            </div>

            <dl className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-6 max-w-[520px]">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-semibold">
                  Sportarten
                </dt>
                <dd className="mt-1 font-sans text-[28px] md:text-[32px] font-semibold leading-none">
                  Alle
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-semibold">
                  Ansprech&shy;partner
                </dt>
                <dd className="mt-1 font-sans text-[28px] md:text-[32px] font-semibold leading-none">
                  1
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-semibold">
                  Setup
                </dt>
                <dd className="mt-1 font-sans text-[28px] md:text-[32px] font-semibold leading-none">
                  2 Wo.
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
              <Image
                src="/images/projects/christian-jungwirth.webp"
                alt="Christian Jungwirth — Personal Brand Referenz"
                fill
                priority
                sizes="(min-width:1024px) 480px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 md:p-6">
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/70 font-semibold">
                  Referenz
                </div>
                <div className="mt-1 font-sans font-semibold text-[18px] md:text-[20px] leading-tight">
                  Christian Jungwirth
                </div>
                <div className="text-[12px] text-white/65 mt-0.5">
                  Strongman · Online-Präsenz seit 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
