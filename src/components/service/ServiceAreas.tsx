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
  items: Area[];
};

/**
 * Bündelt die Unterbereiche einer Hauptleistung. Karten mit `href` verlinken
 * auf die bestehende Detailseite — dadurch bleiben die Unterseiten intern
 * verlinkt, obwohl sie auf /leistungen keine eigene Kachel mehr haben.
 */
export function ServiceAreas({ eyebrow, h2, intro, items }: Props) {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        {eyebrow ? (
          <span className="inline-block text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#050505]/50">
            {eyebrow}
          </span>
        ) : null}

        <h2 className="mt-3 font-sans font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.08] tracking-[-0.02em] max-w-[22ch]">
          {h2}
        </h2>

        {intro ? (
          <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/75 max-w-[62ch]">
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
                    <span className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRightIcon className="w-5 h-5 text-[#050505]" />
                    </span>
                  ) : null}
                </div>
                {a.audience ? (
                  <p className="mt-2 text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.1em] text-[#050505]/45">
                    {a.audience}
                  </p>
                ) : null}
                <p className="mt-3 text-[15px] md:text-[16px] leading-[1.55] text-[#050505]/75 max-w-[46ch]">
                  {a.body}
                </p>
                {a.groups?.length ? (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                    {a.groups.map((gr) => (
                      <div key={gr.label}>
                        <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#050505]/45">
                          {gr.label}
                        </p>
                        <ul className="mt-2 space-y-1.5">
                          {gr.items.map((it) => (
                            <li
                              key={it}
                              className="text-[14px] md:text-[15px] leading-[1.5] text-[#050505]/80"
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
                className="group rounded-2xl md:rounded-3xl bg-[#F5F2EB] p-6 md:p-8 lg:p-10 transition-colors duration-200 hover:bg-[#EFEBE1]"
              >
                {inner}
              </Link>
            ) : (
              <article
                key={a.title}
                className="rounded-2xl md:rounded-3xl bg-[#F5F2EB] p-6 md:p-8 lg:p-10"
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
