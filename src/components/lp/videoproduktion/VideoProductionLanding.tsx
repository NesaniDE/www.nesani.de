import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Captions,
  CircleCheck,
  Clapperboard,
  Lightbulb,
  MessageCircle,
  Play,
  Scissors,
  Send,
  TrendingUp,
  Video,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";

import styles from "./VideoProductionLanding.module.css";

type PortfolioItem = {
  number: string;
  category: string;
  format: string;
  color: string;
  accent: string;
  video?: string;
  poster?: string;
};

const portfolio: PortfolioItem[] = [
  {
    number: "01",
    category: "Apotheke",
    format: "Aufklärung & Gesundheit",
    color: "bg-[#2D65F2]",
    accent: "bg-[#C9D8FF]",
    video: "/videos/videoproduktion/apotheke-aufklaerung.mp4",
    poster: "/images/lp/videoproduktion/apotheke-aufklaerung.jpg",
  },
  {
    number: "02",
    category: "Gastronomie",
    format: "Persönlichkeit & Einblick",
    color: "bg-[#E8B94C]",
    accent: "bg-[#FFF1C7]",
    video: "/videos/videoproduktion/gastronomie-einblick.mp4",
    poster: "/images/lp/videoproduktion/gastronomie-einblick.jpg",
  },
  {
    number: "03",
    category: "Gastronomie",
    format: "Produkt & Atmosphäre",
    color: "bg-[#26211D]",
    accent: "bg-[#F4A6C0]",
    video: "/videos/videoproduktion/gastronomie-seven.mp4",
    poster: "/images/lp/videoproduktion/gastronomie-seven.jpg",
  },
  {
    number: "04",
    category: "Kampfsport",
    format: "Trainerstory & Motivation",
    color: "bg-[#F76D2B]",
    accent: "bg-[#FFD6C2]",
    video: "/videos/videoproduktion/kampfsport-trainer.mp4",
    poster: "/images/lp/videoproduktion/kampfsport-trainer.jpg",
  },
  {
    number: "05",
    category: "Kampfsport",
    format: "Athletenportrait & Persönlichkeit",
    color: "bg-[#17372B]",
    accent: "bg-[#4FE8B3]",
    video: "/videos/videoproduktion/kampfsport-athlet.mp4",
    poster: "/images/lp/videoproduktion/kampfsport-athlet.jpg",
  },
];

const services = [
  {
    icon: Lightbulb,
    title: "Konzept & Skripte",
    body: "Wir übersetzen Ziele, Angebote und Persönlichkeit in Videoideen, die zur Marke passen und sich natürlich anfühlen.",
  },
  {
    icon: Video,
    title: "Kompakte Produktion",
    body: "Der Dreh wird vorbereitet, gebündelt und effizient umgesetzt. Ihr Team bleibt im Tagesgeschäft handlungsfähig.",
  },
  {
    icon: Scissors,
    title: "Schnitt & Veredelung",
    body: "Dynamischer Schnitt, Untertitel, Sounddesign und eine Bildsprache, die auf mobilen Feeds funktioniert.",
  },
  {
    icon: Send,
    title: "Bereit zur Ausspielung",
    body: "Sie erhalten plattformfertige Inhalte für Instagram, TikTok, YouTube Shorts und weitere relevante Kanäle.",
  },
] as const;

const process = [
  {
    step: "Kennenlernen",
    copy: "Wir klären Ziel, Zielgruppe, Angebot und welche Wirkung der Content entfalten soll.",
  },
  {
    step: "Vorbereitung",
    copy: "Wir entwickeln Themen, Hooks, Skripte und einen realistischen Ablauf für den Produktionstag.",
  },
  {
    step: "Produktion",
    copy: "Wir kommen zu Ihnen und setzen die geplanten Formate konzentriert und markengerecht um.",
  },
  {
    step: "Postproduktion",
    copy: "Aus dem Material entstehen fertige Kurzvideos mit Rhythmus, Untertiteln und sauberer Übergabe.",
  },
] as const;

const team = [
  {
    name: "Nedim Hasani",
    role: "Creative Direction & Produktion",
    copy: "Übersetzt Unternehmensziele in klare Formate und führt durch Konzept und Dreh.",
    image: "/images/nedim-portrait-2026.webp",
    initials: "NH",
    tone: "bg-[#F76D2B]",
  },
  {
    name: "Jan Klein",
    role: "Postproduktion & Schnitt",
    copy: "Formt Rohmaterial zu schnellen, klaren Geschichten für den mobilen Feed.",
    image: null,
    initials: "JK",
    tone: "bg-[#4FE8B3]",
  },
  {
    name: "Andrej Gerdt",
    role: "Vertrieb & Erstkontakt",
    copy: "Koordiniert den ersten Austausch und bringt Anforderungen strukturiert ins Team.",
    image: null,
    initials: "AG",
    tone: "bg-[#F4A6C0]",
  },
] as const;

function VideoProductionHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] h-20 border-b border-white/10 bg-[#050505]/80 text-white backdrop-blur-md">
      <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
        <Link
          href="#top"
          aria-label="Nesani Videoproduktion"
          className="flex items-center gap-2.5"
        >
          <Image
            src="/images/shm-logo-white.png"
            alt="Nesani"
            width={56}
            height={56}
            priority
            className="h-12 w-12 object-contain md:h-14 md:w-14"
          />
          <span className="text-[18px] font-semibold tracking-[0.08em]">
            NESANI
          </span>
        </Link>

        <Link
          href="/kontakt?anfrage=videoproduktion"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 py-2.5 text-[13px] font-semibold text-[#050505] transition hover:bg-[#F76D2B] hover:text-white sm:px-5 sm:text-[14px]"
        >
          Projekt anfragen
        </Link>
      </nav>
    </header>
  );
}

function VideoProductionFooter() {
  return (
    <footer className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 py-12 md:px-8 md:py-14 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="#top"
            aria-label="Zurück zum Anfang"
            className="flex items-center gap-3"
          >
            <Image
              src="/images/shm-logo-white.png"
              alt="Nesani"
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="text-[16px] font-semibold tracking-[0.08em]">
                NESANI
              </p>
              <p className="mt-0.5 text-[12px] text-white/45">
                Videoproduktion für Social Media
              </p>
            </div>
          </Link>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <p className="text-[13px] text-white/50">
              Strategie · Dreh vor Ort · Plattformfertiger Schnitt
            </p>
            <Link
              href="/kontakt?anfrage=videoproduktion"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#050505] transition hover:bg-[#F76D2B] hover:text-white"
            >
              Videoprojekt anfragen
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <Link href="/impressum" className="transition hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition hover:text-white">
              Datenschutz
            </Link>
          </div>
          <span>© {new Date().getFullYear()} Nesani. Alle Rechte vorbehalten.</span>
        </div>
      </div>
    </footer>
  );
}

function PhoneFrame({
  className,
  label,
  color,
}: {
  className: string;
  label: string;
  color: string;
}) {
  return (
    <div
      className={`${className} relative aspect-[9/16] w-[132px] sm:w-[165px] lg:w-[190px] overflow-hidden rounded-[28px] border-[5px] border-[#171717] bg-[#171717] shadow-[0_28px_80px_rgba(0,0,0,0.32)]`}
    >
      <div className={`absolute inset-0 ${color}`} />
      <div className="absolute inset-x-4 top-4 h-5 rounded-full bg-black/80" />
      <div className="absolute inset-x-4 bottom-4 top-12 overflow-hidden rounded-[18px] border border-white/20 bg-black/15">
        <div className="absolute -right-7 top-1/4 h-28 w-28 rounded-full border-[18px] border-white/20" />
        <div className="absolute -left-10 bottom-12 h-32 w-32 rotate-12 rounded-[30px] bg-black/15" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#050505] shadow-lg">
            <span
              className={`${styles.pulse} absolute inset-0 rounded-full border border-white`}
            />
            <Play className="ml-1 h-5 w-5 fill-current" aria-hidden />
          </div>
        </div>
        <div className="absolute inset-x-4 bottom-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
            {label}
          </span>
          <div className="mt-2 h-1.5 w-3/4 rounded-full bg-white" />
          <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/55" />
        </div>
      </div>
    </div>
  );
}

export function VideoProductionLanding() {
  return (
    <>
      <VideoProductionHeader />
      <main id="top" className="overflow-hidden bg-[#F4F1EA] text-[#050505]">
        <section className="relative min-h-[900px] overflow-hidden bg-[#050505] text-white lg:min-h-[880px]">
          <div className={`${styles.grain} absolute inset-0`} />
          <div className="absolute -left-36 top-32 h-[420px] w-[420px] rounded-full bg-[#F76D2B]/20 blur-[110px]" />
          <div className="absolute -right-44 bottom-10 h-[480px] w-[480px] rounded-full bg-[#4FE8B3]/15 blur-[130px]" />

          <div className="relative mx-auto grid max-w-[1344px] grid-cols-1 items-center gap-14 px-5 pb-20 pt-32 md:px-8 md:pt-40 lg:min-h-[880px] lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pb-24 lg:pt-32">
            <div className="lg:col-span-7 lg:pr-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75 backdrop-blur">
                  <Clapperboard className="h-3.5 w-3.5" aria-hidden />
                  Videoproduktion für Social Media
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-7 max-w-[780px] text-[48px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-[64px] md:text-[80px] lg:text-[88px] xl:text-[98px]">
                  Content, der
                  <br />
                  <span className="text-[#F76D2B]">hängen bleibt.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 max-w-[590px] text-[17px] leading-[1.55] text-white/67 md:text-[19px]">
                  Wir entwickeln und produzieren Kurzvideos, die Unternehmen
                  sichtbar, verständlich und nahbar machen. Von der ersten Idee
                  bis zum fertigen Feed.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/kontakt?anfrage=videoproduktion"
                    className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-[#050505] transition hover:bg-[#F76D2B] hover:text-white"
                  >
                    Erstgespräch anfragen
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="#portfolio"
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[15px] font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
                  >
                    Projekte ansehen
                    <Play className="h-3.5 w-3.5 fill-current" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[12px] font-medium text-white/55 md:text-[13px]">
                  {["Strategie inklusive", "Dreh vor Ort", "Plattformfertiger Schnitt"].map(
                    (item) => (
                      <span key={item} className="inline-flex items-center gap-2">
                        <CircleCheck className="h-4 w-4 text-[#4FE8B3]" />
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </Reveal>
            </div>

            <div className="relative flex min-h-[410px] items-center justify-center lg:col-span-5 lg:min-h-[650px]">
              <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[500px] sm:w-[500px]" />
              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15 sm:h-[390px] sm:w-[390px]" />
              <div className="relative flex items-center justify-center gap-0 sm:gap-1">
                <PhoneFrame
                  className={`${styles.phoneLeft} translate-x-6 scale-[0.84] sm:translate-x-8 sm:scale-90`}
                  color="bg-[#F76D2B]"
                  label="Story"
                />
                <PhoneFrame
                  className={`${styles.phoneCenter} relative z-10`}
                  color="bg-[#3159D8]"
                  label="Social Reel"
                />
                <PhoneFrame
                  className={`${styles.phoneRight} -translate-x-6 scale-[0.84] sm:-translate-x-8 sm:scale-90`}
                  color="bg-[#2DA75B]"
                  label="Brand"
                />
              </div>
              <div className="absolute right-0 top-[12%] rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl sm:right-[4%] lg:right-0">
                <div className="flex items-center gap-2 text-[12px] font-semibold">
                  <TrendingUp className="h-4 w-4 text-[#4FE8B3]" />
                  Mehr echte Aufmerksamkeit
                </div>
              </div>
              <div className="absolute bottom-[9%] left-0 rounded-2xl bg-[#F4F1EA] px-4 py-3 text-[#050505] shadow-xl sm:left-[5%] lg:left-0">
                <div className="flex items-center gap-2 text-[12px] font-semibold">
                  <Captions className="h-4 w-4" />
                  Mobile first gedacht
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="scroll-mt-20 bg-[#F4F1EA] py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <Reveal className="lg:col-span-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#050505]/55">
                  Portfolio
                </p>
                <h2 className="mt-5 max-w-[850px] text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] md:text-[62px] lg:text-[74px]">
                  Formate, die im Feed funktionieren.
                </h2>
              </Reveal>
              <Reveal delay={100} className="lg:col-span-4 lg:pb-2">
                <p className="max-w-[440px] text-[15px] leading-[1.6] text-[#050505]/65 md:text-[17px]">
                  Fünf ausgewählte Produktionen aus Sport, Gastronomie und
                  Gesundheit.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-3 md:gap-5">
              {portfolio.map((project, index) => (
                <Reveal key={project.number} delay={(index % 3) * 80}>
                  <article className="group overflow-hidden rounded-[18px] bg-white shadow-[0_18px_50px_-30px_rgba(0,0,0,0.5)] md:rounded-[24px]">
                    <div className="relative aspect-[9/16] overflow-hidden bg-[#111]">
                      {project.video ? (
                        <video
                          controls
                          playsInline
                          preload="none"
                          poster={project.poster}
                          aria-label={`${project.category}: ${project.format}`}
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <source src={project.video} type="video/mp4" />
                          Ihr Browser unterstützt dieses Video nicht.
                        </video>
                      ) : (
                        <>
                          <div className={`absolute inset-0 ${project.color}`} />
                          <div className="absolute -right-10 top-[18%] h-32 w-32 rounded-full border-[22px] border-white/15 transition-transform duration-700 group-hover:scale-125" />
                          <div className={`absolute -bottom-10 -left-8 h-36 w-36 rotate-12 rounded-[34px] ${project.accent} opacity-70 transition-transform duration-700 group-hover:-rotate-3`} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="rounded-full border border-white/35 bg-black/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                              Coming soon
                            </span>
                          </div>
                        </>
                      )}
                      <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.12em] text-white drop-shadow md:inset-x-4 md:top-4">
                        <span>{project.video ? "Projekt" : "Platzhalter"}</span>
                        <span>{project.number}</span>
                      </div>
                    </div>
                    <div className="p-3.5 md:p-5">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#050505]/45 md:text-[10px]">
                        {project.category}
                      </p>
                      <h3 className="mt-1.5 text-[12px] font-semibold leading-[1.25] md:text-[16px]">
                        {project.format}
                      </h3>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
            <Reveal>
              <div className="max-w-[840px]">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#050505]/50">
                  Unser Rahmen
                </p>
                <h2 className="mt-5 text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] md:text-[62px] lg:text-[74px]">
                  Alles, was guter Content braucht.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={index * 70} className="h-full">
                    <article className="flex h-full min-h-[320px] flex-col rounded-[24px] border border-[#050505]/8 bg-[#F4F1EA] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#050505]/20 md:p-7">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#050505] text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <div className="mt-auto pt-16">
                        <span className="text-[11px] font-semibold text-[#050505]/35">
                          0{index + 1}
                        </span>
                        <h3 className="mt-3 text-[22px] font-semibold leading-[1.15] tracking-[-0.02em]">
                          {service.title}
                        </h3>
                        <p className="mt-4 text-[14px] leading-[1.6] text-[#050505]/62">
                          {service.body}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#17372B] py-20 text-white md:py-28 lg:py-36">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#4FE8B3]">
                    So arbeiten wir
                  </p>
                  <h2 className="mt-5 text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] md:text-[60px]">
                    Wenig Aufwand für Sie. Volle Klarheit im Prozess.
                  </h2>
                  <p className="mt-6 max-w-[500px] text-[16px] leading-[1.6] text-white/65">
                    Wir bereiten vor, führen durch und liefern aus. Sie geben die
                    Richtung frei und stehen vor der Kamera, wenn es wirklich
                    zählt.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                {process.map((item, index) => (
                  <Reveal key={item.step} delay={index * 70}>
                    <article className="grid grid-cols-[52px_1fr] gap-4 border-t border-white/15 py-7 last:border-b md:grid-cols-[76px_190px_1fr] md:items-start md:gap-6">
                      <span className="text-[12px] font-semibold text-[#4FE8B3]">
                        0{index + 1}
                      </span>
                      <h3 className="text-[19px] font-semibold md:text-[21px]">
                        {item.step}
                      </h3>
                      <p className="col-start-2 text-[14px] leading-[1.6] text-white/60 md:col-start-auto md:text-[15px]">
                        {item.copy}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F4F1EA] py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <Reveal className="lg:col-span-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#050505]/50">
                  Das Produktionsteam
                </p>
                <h2 className="mt-5 text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] md:text-[62px] lg:text-[74px]">
                  Direkt. Eingespielt. Ohne Agentur-Umwege.
                </h2>
              </Reveal>
              <Reveal delay={100} className="lg:col-span-4 lg:pb-2">
                <p className="text-[15px] leading-[1.6] text-[#050505]/65 md:text-[17px]">
                  Drei klare Rollen, ein gemeinsames Ziel: Inhalte, die Ihr
                  Unternehmen glaubwürdig zeigen.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
              {team.map((member, index) => (
                <Reveal key={member.name} delay={index * 90}>
                  <article className="overflow-hidden rounded-[24px] bg-white">
                    <div className={`relative aspect-[4/3] overflow-hidden ${member.tone}`}>
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover object-top grayscale transition duration-500 hover:grayscale-0"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[72px] font-semibold tracking-[-0.06em] text-[#050505]/80 md:text-[88px]">
                            {member.initials}
                          </span>
                          <div className="absolute inset-6 rounded-full border border-[#050505]/15" />
                          <div className="absolute h-32 w-32 rounded-full border border-dashed border-[#050505]/25" />
                        </div>
                      )}
                    </div>
                    <div className="p-6 md:p-7">
                      <h3 className="text-[22px] font-semibold tracking-[-0.02em]">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#050505]/45">
                        {member.role}
                      </p>
                      <p className="mt-5 text-[14px] leading-[1.6] text-[#050505]/62">
                        {member.copy}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-10 md:px-8 md:py-16 lg:px-12">
          <Reveal>
            <div className="relative mx-auto max-w-[1248px] overflow-hidden rounded-[28px] bg-[#F76D2B] px-6 py-16 text-[#050505] md:px-12 md:py-20 lg:px-20 lg:py-24">
              <div className={`${styles.grain} absolute inset-0 opacity-10`} />
              <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[42px] border-[#050505]/10" />
              <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#050505]/60">
                    Bereit für den ersten Dreh?
                  </p>
                  <h2 className="mt-5 max-w-[850px] text-[42px] font-semibold leading-[1] tracking-[-0.04em] md:text-[64px] lg:text-[76px]">
                    Lassen Sie uns über Ihre Story sprechen.
                  </h2>
                </div>
                <div className="lg:col-span-4 lg:flex lg:justify-end">
                  <Link
                    href="/kontakt?anfrage=videoproduktion"
                    className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#050505] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white hover:text-[#050505]"
                  >
                    Beratung anfragen
                    <MessageCircle className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <VideoProductionFooter />
    </>
  );
}
