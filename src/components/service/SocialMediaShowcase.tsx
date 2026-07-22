import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Clapperboard,
  Images,
  Mic2,
  Play,
  Radio,
  Sparkles,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";

const videoProjects = [
  {
    title: "Persönlichkeit & Einblick",
    category: "Gastronomie",
    video: "/videos/videoproduktion/gastronomie-einblick.mp4",
    poster: "/images/lp/videoproduktion/gastronomie-einblick.jpg",
    tone: "bg-[#FFF1C7]",
  },
  {
    title: "Produkt & Atmosphäre",
    category: "Gastronomie",
    video: "/videos/videoproduktion/gastronomie-seven.mp4",
    poster: "/images/lp/videoproduktion/gastronomie-seven.jpg",
    tone: "bg-[#F4A6C0]",
  },
  {
    title: "Trainerstory & Motivation",
    category: "Kampfsport",
    video: "/videos/videoproduktion/kampfsport-trainer.mp4",
    poster: "/images/lp/videoproduktion/kampfsport-trainer.jpg",
    tone: "bg-[#FFD6C2]",
  },
] as const;

const eventServices = [
  { icon: Radio, label: "Stories & Reels vor Ort" },
  { icon: Camera, label: "Foto- und Videocontent" },
  { icon: Mic2, label: "Interviews & Statements" },
  { icon: Clapperboard, label: "Recap & Aftermovie" },
] as const;

const eventPhases = [
  {
    number: "01",
    title: "Vor dem Event",
    copy: "Ablauf, Motive, Ansprechpartner und Veröffentlichungsplan werden vorab abgestimmt.",
  },
  {
    number: "02",
    title: "Live vor Ort",
    copy: "Wir begleiten die relevanten Momente unaufdringlich mit Foto, Video und kurzen Statements.",
  },
  {
    number: "03",
    title: "Direkt danach",
    copy: "Aus dem Material entstehen schnelle Social Assets, Recaps und Content für die weitere Kommunikation.",
  },
] as const;

export function SocialMediaShowcase() {
  return (
    <>
      <section id="showcase" className="overflow-hidden bg-[#050505] text-white">
        <div className="mx-auto max-w-[1344px] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
                Content in Bewegung
              </div>
              <h2 className="mt-6 max-w-[900px] text-[42px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[62px] lg:text-[76px]">
                Strategie ist gut.
                <span className="block text-[#F76D2B]">Sichtbarer Content ist besser.</span>
              </h2>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-4 lg:pb-2">
              <p className="max-w-[450px] text-[15px] leading-[1.65] text-white/62 md:text-[17px]">
                Konzept, Drehtag, Schnitt und Ausspielung aus einer Hand. Für
                Social Media, Personal Brands, Produkte und echte Einblicke in
                Unternehmen.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3">
            {videoProjects.map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 90}
              >
                <article className="group overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04]">
                  <div className="relative aspect-[9/16] overflow-hidden bg-[#151515]">
                    <video
                      controls
                      controlsList="nodownload"
                      playsInline
                      preload="none"
                      poster={project.poster}
                      aria-label={`${project.category}: ${project.title}`}
                      className="h-full w-full object-cover"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                    <span
                      className={`pointer-events-none absolute left-3 top-3 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#050505] ${project.tone}`}
                    >
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-5">
                    <h3 className="text-[14px] font-semibold md:text-[16px]">
                      {project.title}
                    </h3>
                    <Play className="h-4 w-4 shrink-0 text-white/45" aria-hidden />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
              <p className="text-[13px] text-white/48">
                Weitere Formate und Produktionsdetails auf unserer Videoproduktions-Landingpage.
              </p>
              <Link
                href="/lp/videoproduktion"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-white transition hover:text-[#F76D2B]"
              >
                Videoproduktion ansehen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="eventbegleitung" className="overflow-hidden bg-[#F4F1EA] text-[#050505]">
        <div className="mx-auto max-w-[1344px] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
          <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
            <Reveal className="lg:col-span-4">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[28px] bg-[#050505]">
                <video
                  controls
                  controlsList="nodownload"
                  playsInline
                  preload="none"
                  poster="/images/lp/videoproduktion/gastronomie-seven.jpg"
                  aria-label="Gastronomie: Produkt und Atmosphäre"
                  className="h-full w-full object-cover"
                >
                  <source
                    src="/videos/videoproduktion/gastronomie-seven.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="pointer-events-none absolute left-4 top-4 rounded-2xl bg-[#F4A6C0] px-3 py-2 text-[#050505] shadow-sm">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#050505]/55">
                    Gastronomie
                  </p>
                  <p className="mt-0.5 text-[13px] font-semibold">
                    Produkt & Atmosphäre
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-8">
              <div className="relative h-full overflow-hidden rounded-[28px] bg-[#F76D2B] p-6 md:p-10 lg:p-12">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[38px] border-[#050505]/10" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#050505]/15 bg-white/15 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em]">
                    <Radio className="h-3.5 w-3.5" aria-hidden />
                    Eventbegleitung
                  </div>
                  <h2 className="mt-6 max-w-[760px] text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[58px] lg:text-[68px]">
                    Wir begleiten Events, statt nur einen Rückblick zu filmen.
                  </h2>
                  <p className="mt-6 max-w-[620px] text-[16px] leading-[1.6] text-[#050505]/68 md:text-[18px]">
                    Von der Eröffnung über Messen und Firmenevents bis zu Sport-
                    und Gastroformaten: Wir planen die relevanten Momente,
                    produzieren vor Ort und liefern Material für schnelle sowie
                    langfristige Kommunikation.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {eventServices.map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex min-h-24 flex-col justify-between rounded-2xl border border-[#050505]/10 bg-white/20 p-4 backdrop-blur-sm md:min-h-28 md:p-5"
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                        <span className="mt-4 text-[13px] font-semibold leading-[1.25] md:text-[15px]">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3 md:gap-5">
            {eventPhases.map((phase, index) => (
              <Reveal key={phase.number} delay={index * 90}>
                <article className="h-full rounded-[22px] bg-white p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-[#050505]/35">
                      {phase.number}
                    </span>
                    {index === 0 ? (
                      <CalendarDays className="h-5 w-5 text-[#050505]/35" aria-hidden />
                    ) : index === 1 ? (
                      <Camera className="h-5 w-5 text-[#050505]/35" aria-hidden />
                    ) : (
                      <Sparkles className="h-5 w-5 text-[#050505]/35" aria-hidden />
                    )}
                  </div>
                  <h3 className="mt-7 text-[21px] font-semibold tracking-[-0.02em] md:text-[24px]">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[#050505]/62 md:text-[15px]">
                    {phase.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-[22px] bg-[#050505] p-6 text-white md:flex-row md:items-center md:p-8">
              <div className="flex items-start gap-4">
                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 sm:flex">
                  <Images className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <p className="text-[18px] font-semibold md:text-[21px]">
                    Ein Event steht an?
                  </p>
                  <p className="mt-1 text-[13px] text-white/55 md:text-[14px]">
                    Wir stimmen Umfang, Team und gewünschte Ausspielung direkt mit Ihnen ab.
                  </p>
                </div>
              </div>
              <Link
                href="/kontakt?anfrage=eventbegleitung"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-[#050505] transition hover:bg-[#F76D2B]"
              >
                Event anfragen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
