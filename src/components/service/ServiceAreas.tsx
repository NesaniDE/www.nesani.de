import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

type AreaGroup = { label: string; items: string[] };

type Area = {
  title: string;
  audience?: string;
  body: string;
  groups?: AreaGroup[];
  href?: string;
};

type Props = {
  eyebrow?: string;
  h2: string;
  intro?: string;
  /** "dark" bricht lange weisse Abschnittsfolgen auf — gleicher Ton wie ServicePackages. */
  tone?: "light" | "dark";
  items: Area[];
};

/**
 * Bündelt die Unterbereiche einer Hauptleistung. Karten mit `href` verlinken
 * auf die bestehende Detailseite — dadurch bleiben die Unterseiten intern
 * verlinkt, obwohl sie auf /leistungen keine eigene Kachel mehr haben.
 */
export function ServiceAreas({ eyebrow, h2, intro, tone = "light", items }: Props) {
  const dark = tone === "dark";
  const t = {
    section: dark ? "bg-[#050505] text-white" : "bg-white text-[#050505]",
    eyebrow: dark ? "text-white/50" : "text-[#050505]/50",
    intro: dark ? "text-white/70" : "text-[#050505]/75",
    card: dark
      ? "bg-white/[0.06] border border-white/10"
      : "bg-[#F5F2EB]",
    cardHover: dark ? "hover:bg-white/[0.1]" : "hover:bg-[#EFEBE1]",
    audience: dark ? "text-white/45" : "text-[#050505]/45",
    body: dark ? "text-white/70" : "text-[#050505]/75",
    groupLabel: dark ? "text-white/45" : "text-[#050505]/45",
    groupItem: dark ? "text-white/75" : "text-[#050505]/80",
    arrowBg: dark ? "bg-white/10" : "bg-white",
    arrow: dark ? "text-white" : "text-[#050505]",
  };

  return (
    <section className={t.section}>
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        {eyebrow ? (
          <span className={`inline-block text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.14em] ${t.eyebrow}`}>
            {eyebrow}
          </span>
        ) : null}

        <h2 className="mt-3 font-sans font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.08] tracking-[-0.02em] max-w-[22ch]">
          {h2}
        </h2>

        {intro ? (
          <p className={`mt-5 text-[16px] md:text-[18px] leading-[1.55] ${t.intro} max-w-[62ch]`}>
            {intro}
          </p>
        ) : null}

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((a) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-sans font-semibold text-[24px] md:text-[28px] leading-[1.15] tracking-[-0.01em]">
                    {a.title}
                  </h3>
                  {a.href ? (
                    <span className={`shrink-0 w-10 h-10 rounded-full ${t.arrowBg} flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1`}>
                      <ArrowUpRightIcon className={`w-5 h-5 ${t.arrow}`} />
                    </span>
                  ) : null}
                </div>
                {a.audience ? (
                  <p className={`mt-2 text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.1em] ${t.audience}`}>
                    {a.audience}
                  </p>
                ) : null}
                <p className={`mt-3 text-[15px] md:text-[16px] leading-[1.55] ${t.body} max-w-[46ch]`}>
                  {a.body}
                </p>
                {a.groups?.length ? (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                    {a.groups.map((gr) => (
                      <div key={gr.label}>
                        <p className={`text-[13px] font-semibold uppercase tracking-[0.1em] ${t.groupLabel}`}>
                          {gr.label}
                        </p>
                        <ul className="mt-2 space-y-1.5">
                          {gr.items.map((it) => (
                            <li
                              key={it}
                              className={`text-[14px] md:text-[15px] leading-[1.5] ${t.groupItem}`}
                            >
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </>
            );

            return a.href ? (
              <Link
                key={a.title}
                href={a.href}
                className={`group rounded-2xl md:rounded-3xl ${t.card} p-6 md:p-8 lg:p-10 transition-colors duration-200 ${t.cardHover}`}
              >
                {inner}
              </Link>
            ) : (
              <article
                key={a.title}
                className={`rounded-2xl md:rounded-3xl ${t.card} p-6 md:p-8 lg:p-10`}
              >
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
