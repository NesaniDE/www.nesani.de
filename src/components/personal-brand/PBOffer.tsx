import {
  Compass,
  Camera,
  TrendingUp,
  Handshake,
} from "lucide-react";

const VALUE_CARDS = [
  {
    icon: Compass,
    title: "Klare Markenstrategie",
    body:
      "Wer Sie sind, wofür Sie stehen, was Sie unverwechselbar macht. Vor jedem Post steht eine Positionierung, die hält.",
  },
  {
    icon: Camera,
    title: "Content, der bleibt",
    body:
      "Reels, Stories und Posts, die nicht zufällig viral gehen — sondern weil Hook, Story und Cut sitzen. Produziert oder gemeinsam vor Ort.",
  },
  {
    icon: TrendingUp,
    title: "Wachstum mit System",
    body:
      "Frequenz, Themen und Trends datenbasiert geplant. Kein Tagesgeschäft mehr im Bauchgefühl — sondern messbar, jeden Monat.",
  },
  {
    icon: Handshake,
    title: "Sponsoren-bereit",
    body:
      "Pressemappe, Mediakit, Sprachregelung. Wenn der Anruf kommt, sind Sie und Ihr Profil verkaufsfertig.",
  },
] as const;

const STEPS = [
  {
    num: "01",
    title: "Analyse",
    body:
      "Wir hören zu: Karriere-Stand, Sportkalender, Persönlichkeit, bisherige Inhalte und Reichweite. Daraus entsteht ein scharfes Profil.",
    bullets: ["Karriere & Kalender", "Kanal-Audit", "Stärken & Themen"],
  },
  {
    num: "02",
    title: "Strategie",
    body:
      "Positionierung, Tonalität und Content-Säulen werden festgelegt. Jede Story-Idee lässt sich danach in unter 60 Sekunden bewerten.",
    bullets: ["Positionierung", "Visuelles System", "Content-Säulen"],
  },
  {
    num: "03",
    title: "Content-Engine",
    body:
      "Production-Tage am Trainingsort oder remote. Wir kümmern uns um Konzept, Filmen, Schnitt, Untertitel, Cover — Sie um Training.",
    bullets: ["Reels & Stories", "Foto & Pressekit", "Schnitt & Sound"],
  },
  {
    num: "04",
    title: "Posten & Wachsen",
    body:
      "Stories täglich, Reels nach Plan, Reporting monatlich. Wir reagieren auf Wettkämpfe, Trends und Plattform-Algorithmen.",
    bullets: ["Redaktionsplan", "Community-Management", "Monatliches Reporting"],
  },
] as const;

const SPORTS = [
  "Kampfsport",
  "Fußball",
  "Basketball",
  "Tennis",
  "Skifahren",
  "Snowboard",
  "Reitsport",
  "Motorsport",
  "Leichtathletik",
  "Schwimmen",
  "Volleyball",
  "Handball",
  "Eishockey",
  "Golf",
  "Klettern",
  "Triathlon",
  "Bodybuilding",
  "Strongman",
  "Padel",
  "E-Sports",
];

export function PBOffer() {
  return (
    <>
      {/* Value props */}
      <section className="bg-white text-[#050505]">
        <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
          <div className="max-w-[760px]">
            <div className="text-[12px] uppercase tracking-[0.32em] text-[#050505]/60 font-semibold">
              Was Sie bekommen
            </div>
            <h2 className="mt-4 font-sans font-semibold text-[34px] md:text-[48px] lg:text-[60px] leading-[1.05] tracking-[-0.02em]">
              Eine Marke, die für sich arbeitet.
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/70 max-w-[60ch]">
              Sie trainieren. Wir bauen die Präsenz drumherum. Vier Bausteine,
              die zusammen aus einer Athletin oder einem Athleten eine Marke
              machen — keine reine Reichweite, sondern Substanz.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {VALUE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-2xl md:rounded-3xl border border-black/8 bg-[#FAF9F6] p-6 md:p-8 flex flex-col gap-5"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#050505] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-sans font-semibold text-[22px] md:text-[24px] leading-[1.2]">
                    {card.title}
                  </h3>
                  <p className="text-[15px] md:text-[16px] leading-[1.55] text-[#050505]/72">
                    {card.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="prozess" className="bg-[#050505] text-white">
        <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
          <div className="max-w-[760px]">
            <div className="text-[12px] uppercase tracking-[0.32em] text-white/55 font-semibold">
              So arbeiten wir
            </div>
            <h2 className="mt-4 font-sans font-semibold text-[34px] md:text-[48px] lg:text-[60px] leading-[1.05] tracking-[-0.02em]">
              Vier Schritte. Keine Verträge mit fünf Jahren.
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-white/70 max-w-[60ch]">
              Ein klarer Ablauf vom Erstgespräch bis zum laufenden Betrieb.
              Wir starten mit einem 30-Minuten-Call und entscheiden gemeinsam,
              ob es passt — ohne Vorleistung, ohne Verkaufsdruck.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {STEPS.map((s) => (
              <article
                key={s.num}
                className="rounded-2xl md:rounded-3xl bg-[#0F0F0F] border border-white/8 p-6 md:p-8 lg:p-10 flex flex-col gap-5"
              >
                <div className="flex items-center gap-4">
                  <span className="font-sans font-semibold text-[44px] md:text-[56px] leading-none text-white/20 tabular-nums">
                    {s.num}
                  </span>
                  <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2]">
                    {s.title}
                  </h3>
                </div>
                <p className="text-[14px] md:text-[15px] leading-[1.55] text-white/75">
                  {s.body}
                </p>
                <ul className="mt-auto space-y-2 text-[13px] md:text-[14px] text-white/70">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-white/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sports list */}
      <section className="bg-[#F5F2EB] text-[#050505]">
        <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-[12px] uppercase tracking-[0.32em] text-[#050505]/60 font-semibold">
                Für wen
              </div>
              <h2 className="mt-4 font-sans font-semibold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em]">
                Jede Sportart. Vom Aufsteiger bis zum Profi.
              </h2>
              <p className="mt-5 text-[15px] md:text-[17px] leading-[1.55] text-[#050505]/75 max-w-[48ch]">
                Wenn Sie Ihre Karriere ernst nehmen, nehmen wir Ihre Marke
                ernst. Wir arbeiten mit Einzelsportlern und Teams in allen
                Disziplinen — die Mechanik bleibt gleich, die Story ist immer
                anders.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ul className="flex flex-wrap gap-2 md:gap-2.5">
                {SPORTS.map((s) => (
                  <li
                    key={s}
                    className="inline-flex items-center rounded-full border border-black/12 bg-white px-4 py-2 text-[13px] md:text-[14px] font-medium text-[#050505]"
                  >
                    {s}
                  </li>
                ))}
                <li className="inline-flex items-center rounded-full bg-[#050505] text-white px-4 py-2 text-[13px] md:text-[14px] font-medium">
                  und mehr
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
