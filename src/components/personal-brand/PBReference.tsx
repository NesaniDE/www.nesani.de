import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export function PBReference() {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="max-w-[760px]">
          <div className="text-[12px] uppercase tracking-[0.32em] text-[#050505]/60 font-semibold">
            Referenz
          </div>
          <h2 className="mt-4 font-sans font-semibold text-[34px] md:text-[48px] lg:text-[60px] leading-[1.05] tracking-[-0.02em]">
            Wir starten nicht bei null.
          </h2>
          <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/72 max-w-[60ch]">
            Christian Jungwirth ist unsere erste Athleten-Referenz. Aus einer
            losen Online-Präsenz wurde ein klares Profil mit Wiedererkennung,
            geplantem Content und einer Außendarstellung, die zur sportlichen
            Leistung passt.
          </p>
        </div>

        <article className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch rounded-3xl bg-[#FAF9F6] border border-black/8 overflow-hidden">
          <div className="lg:col-span-5 relative aspect-[4/5] lg:aspect-auto lg:min-h-[520px]">
            <Image
              src="/images/projects/christian-jungwirth.webp"
              alt="Christian Jungwirth"
              fill
              sizes="(min-width:1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-black/12 px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#050505]/75">
              Strongman · Athlet
            </div>

            <Quote className="h-8 w-8 text-[#050505]/35" aria-hidden />
            <p className="font-sans text-[20px] md:text-[24px] lg:text-[26px] leading-[1.35] tracking-[-0.01em] text-[#050505]">
              „Endlich habe ich eine Online-Präsenz, die zu meinem Sport
              passt. Ich kümmere mich um Training und Wettkämpfe — alles
              andere läuft im Hintergrund mit.“
            </p>
            <div className="text-[14px] text-[#050505]/70">
              Christian Jungwirth — Strongman-Athlet
            </div>

            <dl className="mt-2 grid grid-cols-3 gap-4 md:gap-6 border-t border-black/10 pt-6">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-[#050505]/55 font-semibold">
                  Setup
                </dt>
                <dd className="mt-1 font-sans text-[22px] md:text-[26px] font-semibold leading-none">
                  2 Wochen
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-[#050505]/55 font-semibold">
                  Plattformen
                </dt>
                <dd className="mt-1 font-sans text-[22px] md:text-[26px] font-semibold leading-none">
                  IG · TikTok
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-[#050505]/55 font-semibold">
                  Aufwand
                </dt>
                <dd className="mt-1 font-sans text-[22px] md:text-[26px] font-semibold leading-none">
                  &lt; 2 h/Wo.
                </dd>
              </div>
            </dl>

            <div className="mt-auto pt-2">
              <Link
                href="/projekte#christian-jungwirth"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#050505] hover:opacity-70 transition-opacity"
              >
                Projekt ansehen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
