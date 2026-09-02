import Link from "next/link";
import {
  ArrowRight,
  Play,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";

// Erste Reihe der Social-Media-Landingpage, damit Leistungsseite und
// Landingpage dieselben Arbeitsproben zeigen.
const videoProjects = [
  {
    title: "Talking Head mit Untertiteln",
    category: "Athlet",
    video: "/videos/videoproduktion/clip-03.mp4",
    poster: "/images/lp/videoproduktion/clip-03.jpg",
    tone: "bg-[#4FE8B3]",
  },
  {
    title: "Produkt & Atmosphäre",
    category: "Gastronomie",
    video: "/videos/videoproduktion/gastronomie-seven.mp4",
    poster: "/images/lp/videoproduktion/gastronomie-seven.jpg",
    tone: "bg-[#F4A6C0]",
  },
  {
    title: "Interview-Setup vor Ort",
    category: "Behind the Scenes",
    video: "/videos/videoproduktion/clip-02.mp4",
    poster: "/images/lp/videoproduktion/clip-02.jpg",
    tone: "bg-[#FFF1C7]",
  },
  {
    title: "Persönlichkeit & Einblick",
    category: "Gastronomie",
    video: "/videos/videoproduktion/gastronomie-einblick.mp4",
    poster: "/images/lp/videoproduktion/gastronomie-einblick.jpg",
    tone: "bg-[#FFD6C2]",
  },
] as const;

// Querformat-Produktion, auf der Landingpage die letzte Arbeitsprobe.
const landscapeProject = {
  title: "Cinematic Story-Cut",
  category: "Kampfsport",
  video: "/videos/videoproduktion/clip-quer.mp4",
  poster: "/images/lp/videoproduktion/clip-quer.jpg",
} as const;



export function SocialMediaShowcase() {
  return (
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

          <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:gap-5 lg:grid-cols-4">
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

          <Reveal delay={140}>
            <article className="group mt-5 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(260px,0.8fr)]">
              <div className="relative aspect-video overflow-hidden bg-black">
                <video
                  controls
                  controlsList="nodownload"
                  playsInline
                  preload="none"
                  poster={landscapeProject.poster}
                  aria-label={`${landscapeProject.category}: ${landscapeProject.title}`}
                  className="absolute inset-0 h-full w-full object-contain"
                >
                  <source src={landscapeProject.video} type="video/mp4" />
                </video>
                <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#050505] md:left-4 md:top-4">
                  Querformat
                </span>
              </div>
              <div className="flex flex-col justify-end p-5 md:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  {landscapeProject.category}
                </p>
                <h3 className="mt-3 text-[22px] font-semibold leading-[1.1] tracking-[-0.025em] md:text-[30px]">
                  {landscapeProject.title}
                </h3>
                <p className="mt-4 max-w-[360px] text-[13px] leading-[1.6] text-white/58 md:text-[14px]">
                  Ruhige Bildsprache, klare Aussagen und ein Format, das
                  Expertise mit Persönlichkeit verbindet.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
              <p className="text-[13px] text-white/48">
                Weitere Formate und Produktionsdetails auf unserer Social-Media-Landingpage.
              </p>
              <Link
                href="/lp/social-media"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-white transition hover:text-[#F76D2B]"
              >
                Alle Arbeitsproben ansehen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
  );
}
