import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Clapperboard, Play } from "lucide-react";
import { TerminSection } from "@/components/TerminSection";
import { SocialMediaFaq } from "./SocialMediaFaq";
import styles from "./SocialMediaLanding.module.css";

type PortfolioItem = {
  number: string;
  category: string;
  format: string;
  color: string;
  accent: string;
  video?: string;
  poster?: string;
  orientation?: "landscape";
};

const portfolio: PortfolioItem[] = [
  {
    number: "01",
    category: "Athlet",
    format: "Talking Head mit Untertiteln",
    color: "bg-[#17372B]",
    accent: "bg-[#4FE8B3]",
    video: "/videos/videoproduktion/social-media-videoproduktion-athlet-interview-schwaebisch-gmuend.mp4",
    poster: "/images/lp/videoproduktion/social-media-videoproduktion-athlet-interview-schwaebisch-gmuend.jpg",
  },
  {
    number: "02",
    category: "Gastronomie",
    format: "Produkt & Atmosphäre",
    color: "bg-[#26211D]",
    accent: "bg-[#F4A6C0]",
    video: "/videos/videoproduktion/social-media-videoproduktion-gastronomie-produkt-schwaebisch-gmuend.mp4",
    poster: "/images/lp/videoproduktion/social-media-videoproduktion-gastronomie-produkt-schwaebisch-gmuend.jpg",
  },
  {
    number: "03",
    category: "Behind the Scenes",
    format: "Interview-Setup vor Ort",
    color: "bg-[#E8B94C]",
    accent: "bg-[#FFF1C7]",
    video: "/videos/videoproduktion/social-media-videoproduktion-behind-the-scenes-schwaebisch-gmuend.mp4",
    poster: "/images/lp/videoproduktion/social-media-videoproduktion-behind-the-scenes-schwaebisch-gmuend.jpg",
  },
  {
    number: "04",
    category: "Gastronomie",
    format: "Persönlichkeit & Einblick",
    color: "bg-[#E8B94C]",
    accent: "bg-[#FFF1C7]",
    video: "/videos/videoproduktion/social-media-videoproduktion-gastronomie-einblick-schwaebisch-gmuend.mp4",
    poster: "/images/lp/videoproduktion/social-media-videoproduktion-gastronomie-einblick-schwaebisch-gmuend.jpg",
  },
  {
    number: "05",
    category: "Training",
    format: "Athlet in Bewegung",
    color: "bg-[#254332]",
    accent: "bg-[#4FE8B3]",
    video: "/videos/videoproduktion/social-media-videoproduktion-sport-training-schwaebisch-gmuend.mp4",
    poster: "/images/lp/videoproduktion/social-media-videoproduktion-sport-training-schwaebisch-gmuend.jpg",
  },
  {
    number: "06",
    category: "Kampfsport",
    format: "Trainerstory & Motivation",
    color: "bg-[#F76D2B]",
    accent: "bg-[#FFD6C2]",
    video: "/videos/videoproduktion/social-media-videoproduktion-kampfsport-trainer-schwaebisch-gmuend.mp4",
    poster: "/images/lp/videoproduktion/social-media-videoproduktion-kampfsport-trainer-schwaebisch-gmuend.jpg",
  },
  {
    number: "07",
    category: "Behind the Scenes",
    format: "Setup & Dreh",
    color: "bg-[#2D65F2]",
    accent: "bg-[#C9D8FF]",
    video: "/videos/videoproduktion/social-media-videoproduktion-dreh-setup-schwaebisch-gmuend.mp4",
    poster: "/images/lp/videoproduktion/social-media-videoproduktion-dreh-setup-schwaebisch-gmuend.jpg",
  },
  {
    number: "08",
    category: "Kampfsport",
    format: "Athletin im Interview",
    color: "bg-[#17372B]",
    accent: "bg-[#4FE8B3]",
    video: "/videos/videoproduktion/social-media-videoproduktion-kampfsport-athletin-schwaebisch-gmuend.mp4",
    poster: "/images/lp/videoproduktion/social-media-videoproduktion-kampfsport-athletin-schwaebisch-gmuend.jpg",
  },
  {
    number: "09",
    category: "Kampfsport",
    format: "Cinematic Story-Cut",
    color: "bg-[#26211D]",
    accent: "bg-[#F76D2B]",
    video: "/videos/videoproduktion/social-media-videoproduktion-kampfsport-cinematic-schwaebisch-gmuend.mp4",
    poster: "/images/lp/videoproduktion/social-media-videoproduktion-kampfsport-cinematic-schwaebisch-gmuend.jpg",
    orientation: "landscape",
  },
];

const faqs = [
  {
    question: "Für welche Unternehmen passt die Betreuung?",
    answer: "Für lokale Betriebe, die ihr Angebot, ihr Team und ihre Arbeit regelmäßig sichtbar machen möchten. Ob Handwerk, Gastronomie, Handel oder Dienstleistung: Im Erstgespräch klären wir, welche Inhalte und Kanäle zu Ihrem Unternehmen passen.",
  },
  {
    question: "Was kostet die laufende Zusammenarbeit?",
    answer: "Die Betreuung startet ab 1.000 € pro Monat zuzüglich Umsatzsteuer. Der konkrete Umfang richtet sich nach Produktion, Anzahl der Inhalte und Kanälen. Vor Beginn erhalten Sie ein Angebot mit definierten Leistungen und Vertragsbedingungen.",
  },
  {
    question: "Wie viel Zeit muss unser Team investieren?",
    answer: "Wir bereiten Themen, Skripte und den Drehablauf vor und produzieren gebündelt bei Ihnen. Gemeinsam legen wir fest, wer vor der Kamera steht, wie lange der Dreh dauert und wer die Inhalte freigibt.",
  },
  {
    question: "Sind Veröffentlichung und Werbeanzeigen enthalten?",
    answer: "Veröffentlichung und laufende Betreuung vereinbaren wir passend zu Ihrem Paket. Anzeigenmanagement und Werbebudget werden separat ausgewiesen, wenn Sie diese Leistungen benötigen.",
  },
  {
    question: "Was passiert im Erstgespräch?",
    answer: "In 30 Minuten besprechen wir Ihre Ziele, die bisherige Social-Media-Präsenz und Ihren Budgetrahmen. Sie erhalten eine Einschätzung, ob und in welchem Umfang NESANI helfen kann. Das Gespräch ist unverbindlich.",
  },
] as const;


const featured = [portfolio[2], portfolio[1], portfolio[3], portfolio[0]];
const cinematic = portfolio[8];
const moreProjects = portfolio.filter((project) => !featured.includes(project) && project !== cinematic);
const deliverables = [
  ["Ein Plan statt spontaner Posts.", "Themen und Formate, die Ihr Angebot verständlich machen und zu Ihrem Unternehmen passen."],
  ["Ein vorbereiteter Dreh bei Ihnen.", "Wir organisieren die Produktion vor Ort. Ihr Team weiß vorher, was gebraucht wird."],
  ["Content, der bereit für den Feed ist.", "Kurzvideos mit Schnitt, Untertiteln und Sound. Veröffentlichung und Betreuung passend zum vereinbarten Paket."],
];

function BookingLink({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return <Link href="#termin-buchen" className={`${styles.cta} ${dark ? styles.ctaDark : styles.ctaLight} ${className}`}>
    Erstgespräch buchen <ArrowRight className="h-4 w-4" aria-hidden />
  </Link>;
}

function Project({ project }: { project: PortfolioItem }) {
  return <article className={`overflow-hidden rounded-[22px] bg-white ${project.orientation === "landscape" ? "lg:col-span-2" : ""}`}>
    <div className={`relative bg-[#111] ${project.orientation === "landscape" ? "aspect-video" : "aspect-[9/13]"}`}>
      <video controls playsInline preload="none" poster={project.poster} aria-label={`${project.category}: ${project.format}`} className={`absolute inset-0 h-full w-full ${project.orientation === "landscape" ? "object-contain" : "object-cover"}`}>
        <source src={project.video} type="video/mp4" />Ihr Browser unterstützt dieses Video nicht.
      </video>
    </div>
    <div className="p-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/55">{project.category}</p>
      <h3 className="mt-2 text-[18px] font-semibold leading-tight">{project.format}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-black/60">Konzept, Produktion & Schnitt von NESANI.</p>
    </div>
  </article>;
}

export function SocialMediaLanding() {
  return <>
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <nav aria-label="Landingpage" className="mx-auto flex h-[72px] max-w-[1344px] items-center justify-between px-5 md:h-24 md:px-8 lg:px-12">
        <Link href="#top" aria-label="NESANI – zum Anfang" className="flex items-center gap-2">
          <Image src="/images/shm-logo-white.png" alt="" width={44} height={44} className="h-9 w-9 md:h-11 md:w-11" />
          <span className="text-[16px] font-semibold tracking-[0.09em]">NESANI</span>
        </Link>
        <Link href="#termin-buchen" className="inline-flex min-h-11 items-center gap-2 text-[12px] font-semibold md:text-sm">Lernen wir uns kennen <ArrowRight className="h-4 w-4 text-[#F76D2B]" aria-hidden /></Link>
      </nav>
    </header>
    <main id="top" className="overflow-hidden bg-[#F4F1EA] text-[#050505]">
      <section className={`${styles.hero} relative bg-[#050505] text-white`}>
        <div className={`${styles.grain} absolute inset-0`} />
        <div className={`${styles.heroGrid} relative mx-auto grid max-w-[1344px] items-center gap-8 px-5 pb-10 pt-24 md:px-8 md:pb-20 md:pt-36 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-12`}>
          <div>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/65 md:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-[#F76D2B]" />Social Media · Schwäbisch Gmünd & Umgebung</p>
            <h1 className={`${styles.heroTitle} mt-5 max-w-[650px] text-[44px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-[60px]`}>Gute Arbeit.<br />Zeit, dass man<br /><span className="text-[#F76D2B]">sie sieht.</span></h1>
            <p className="mt-5 max-w-[490px] text-[15px] leading-[1.6] text-white/70 md:mt-7 md:text-lg">Social-Media-Content für Ihren Betrieb. Wir planen, drehen bei Ihnen vor Ort und schneiden. Sie bleiben bei Ihrem Geschäft.</p>
            <div className="mt-6 flex flex-col gap-3 sm:items-start md:mt-8">
              <BookingLink className="w-full sm:w-auto" />
              <p className="text-[11px] text-white/65">30 Minuten mit Nedim · unverbindlich</p>
            </div>
            <p className="mt-5 text-[12px] text-white/75"><span className="font-semibold text-white">Betreuung ab 1.000 € / Monat</span> <span className="text-white/50">· zzgl. USt.</span></p>
          </div>
          <a href="#portfolio" aria-label="Unsere Arbeitsproben ansehen" className={`${styles.heroVisual} group relative block`}>
            <div className="grid h-full grid-cols-[1fr_1.1fr_0.8fr] gap-2 overflow-hidden rounded-[22px] md:gap-3 md:rounded-[32px]">
              {[portfolio[1], portfolio[0], portfolio[2]].map((project, index) => <div key={project.number} className={`relative h-full overflow-hidden ${index === 1 ? "" : "mt-5"}`}>
                <Image src={project.poster!} alt={`${project.category} – Produktion von NESANI`} fill preload={index === 0} sizes="(max-width: 1023px) 33vw, 200px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>)}
            </div>
            <div className="absolute inset-0 rounded-[22px] bg-gradient-to-t from-black/85 via-transparent to-transparent md:rounded-[32px]" />
            <div className="absolute inset-x-4 bottom-4 flex items-end justify-between md:inset-x-6 md:bottom-6">
              <div><p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70">Echte Arbeit. Echte Einblicke.</p><p className="mt-1 text-[16px] font-semibold md:text-xl">So sieht NESANI-Content aus.</p></div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black md:h-12 md:w-12"><Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden /></span>
            </div>
          </a>
        </div>
        <div className="relative mx-auto flex max-w-[1344px] flex-wrap justify-between gap-4 border-t border-white/15 px-5 py-5 text-[11px] text-white/75 md:px-8 md:text-sm lg:px-12">
          {["Dreh bei Ihnen vor Ort", "Ein persönlicher Ansprechpartner", "Konzept bis fertiger Content"].map(text => <span key={text} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#F76D2B]" aria-hidden />{text}</span>)}
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-6 px-5 py-14 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1248px]">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className={styles.eyebrow}>Unsere Produktionen</p><h2 className={`${styles.heading} mt-4 max-w-[650px]`}>Nicht nur darüber reden.<br />Zeigen, was Sie können.</h2></div>
            <p className="max-w-[340px] text-[15px] leading-relaxed text-black/65">Gastronomie, Sport und Persönlichkeit: echte Arbeitsproben statt leerer Versprechen.</p>
          </div>
          <p className="mt-6 text-[11px] text-black/55 sm:hidden">Vier Arbeitsproben · wischen Sie für mehr →</p>
          <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:mt-8 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 md:mt-12 [&>article]:w-[82%] [&>article]:shrink-0 [&>article]:snap-start sm:[&>article]:w-auto">{featured.map(project => <Project key={project.number} project={project} />)}</div>
          <div className="mt-6"><Project project={cinematic} /></div>
          <details className="group mt-7 border-t border-black/15 pt-5">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold"><span className="group-open:hidden">Weitere vier Produktionen ansehen</span><span className="hidden group-open:inline">Weniger Produktionen anzeigen</span> <ArrowDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden /></summary>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{moreProjects.map(project => <Project key={project.number} project={project} />)}</div>
          </details>
        </div>
      </section>

      <section id="betreuung" className="bg-white px-5 py-14 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1248px] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div><p className={styles.eyebrow}>Wir übernehmen den Content</p><h2 className={`${styles.heading} mt-4`}>Ihr Tagesgeschäft<br />hat genug To-dos.</h2><p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-black/65">Sie müssen nicht jede Woche mit einer neuen Idee anfangen. Wir schaffen einen regelmäßigen Ablauf für Ihren Auftritt.</p>
            <div className="mt-8">{deliverables.map(([title, body], index) => <div key={title} className="grid grid-cols-[28px_1fr] gap-4 border-t border-black/15 py-5"><span className="pt-1 text-xs font-semibold text-[#BD470C]">0{index + 1}</span><div><h3 className="text-lg font-semibold tracking-tight">{title}</h3><p className="mt-2 text-sm leading-relaxed text-black/65">{body}</p></div></div>)}</div>
          </div>
          <aside className="self-start rounded-[28px] lg:sticky lg:top-8 bg-[#17372B] p-7 text-white md:p-10">
            <Clapperboard className="h-8 w-8 text-[#4FE8B3]" strokeWidth={1.5} aria-hidden />
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">Laufende Social-Media-Betreuung</p><p className="mt-3 text-[46px] font-semibold leading-none tracking-[-0.04em]">Ab 1.000 €</p><p className="mt-2 text-sm text-white/65">pro Monat · zzgl. Umsatzsteuer</p>
            <ul className="my-7 space-y-4 text-sm">{["Themen & Formate für Ihren Betrieb", "Vorbereitete Produktion vor Ort", "Schnitt & plattformfertige Inhalte"].map(text => <li key={text} className="flex gap-3"><Check className="h-4 w-4 shrink-0 text-[#4FE8B3]" aria-hidden />{text}</li>)}</ul>
            <BookingLink className="w-full" />
            <p className="mt-5 text-[12px] leading-relaxed text-white/65">Anzahl der Inhalte, Drehumfang, Kanäle und Betreuung legen wir vor Beginn im Angebot fest. Anzeigenmanagement und Werbebudget werden gesondert vereinbart.</p>
          </aside>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-14 text-white md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1248px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] md:aspect-[5/4]">
            <Image src="/images/nedim-portrait-2026.webp" alt="Nedim Hasani, Gründer von NESANI" fill sizes="(max-width: 1023px) 100vw, 560px" className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" /><div className="absolute bottom-6 left-6"><p className="text-2xl font-semibold">Nedim Hasani</p><p className="mt-1 text-xs text-white/70">Gründer · Strategie & Umsetzung</p></div>
          </div>
          <div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F76D2B]">Direkt. Persönlich. Vor Ort.</p><h2 className={`${styles.heading} mt-4`}>Sie kennen den Kopf<br />hinter Ihrem Content.</h2><p className="mt-5 text-[15px] leading-relaxed text-white/70">Ich bin Ihr Ansprechpartner für Strategie, Dreh und Umsetzung. Gemeinsam finden wir heraus, wie Ihr Unternehmen sichtbar werden soll — und was sich im Alltag umsetzen lässt.</p>
            <ol className="mt-7 space-y-5">{[["Wir lernen Ihren Betrieb kennen.","Im Erstgespräch klären wir Ziele, Angebot und Budget."],["Sie bekommen einen konkreten Plan.","Wir vereinbaren Leistungen und bereiten Themen und Dreh vor."],["Wir produzieren. Sie geben frei.","Aus dem Material werden fertige Inhalte für Ihre Kanäle."]].map(([title,body],index)=><li key={title} className="flex gap-4 border-t border-white/15 pt-5"><span className="text-xs text-[#F76D2B]">0{index+1}</span><div><h3 className="text-[15px] font-semibold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-white/65">{body}</p></div></li>)}</ol>
          </div>
        </div>
      </section>
      <section id="fragen" className="bg-white px-5 py-14 md:px-8 md:py-24 lg:px-12"><div className="mx-auto grid max-w-[1248px] lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 [&>div]:lg:mt-0"><div><p className={styles.eyebrow}>Gut zu wissen</p><h2 className={`${styles.heading} mt-4`}>Noch Fragen?</h2><p className="mt-5 hidden max-w-[280px] text-sm leading-relaxed text-black/65 lg:block">Die wichtigsten Antworten vor unserer Zusammenarbeit.</p></div><SocialMediaFaq items={faqs} /></div></section>
      <section className="bg-[#F76D2B] px-5 py-12 md:px-8 md:py-20 lg:px-12"><div className="mx-auto flex max-w-[1248px] flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><p className="text-[11px] font-semibold uppercase tracking-[0.16em]">Der erste Schritt ist ein Gespräch.</p><h2 className={`${styles.heading} mt-4 max-w-[750px]`}>Machen wir Ihren<br />Betrieb sichtbar.</h2><p className="mt-4 max-w-[600px] text-[15px] leading-relaxed">30 Minuten. Ihre Ziele, unsere Einschätzung und ein möglicher nächster Schritt. Unverbindlich, direkt mit Nedim.</p></div><BookingLink dark className="w-full sm:w-auto" /></div></section>
      <TerminSection />
    </main>
    <footer className="bg-[#050505] px-5 py-10 text-white md:px-8 lg:px-12"><div className="mx-auto flex max-w-[1248px] flex-col justify-between gap-6 sm:flex-row"><p className="text-sm font-semibold tracking-widest">NESANI</p><div className="flex flex-wrap gap-5 text-xs text-white/70"><Link href="/kontakt?anfrage=social-media#formular" className="underline underline-offset-4">Lieber schriftlich anfragen</Link><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link><span>© {new Date().getFullYear()} NESANI</span></div></div></footer>
  </>;
}
