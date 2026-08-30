import Link from "next/link";
import { CheckIcon } from "@/components/icons";

type Package = {
  name: string;
  volume: string;
  body: string;
  items: string[];
  highlighted?: boolean;
};

type Props = {
  eyebrow?: string;
  h2: string;
  intro?: string;
  note?: string;
  items: Package[];
};

/**
 * Drei vergleichbare Pakete nebeneinander. Bewusst ohne Preise — die stehen
 * noch nicht fest und werden im Erstgespräch geklärt.
 */
export function ServicePackages({ eyebrow, h2, intro, note, items }: Props) {
  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        {eyebrow ? (
          <span className="inline-block text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.14em] text-white/50">
            {eyebrow}
          </span>
        ) : null}

        <h2 className="mt-3 font-sans font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.08] tracking-[-0.02em] max-w-[22ch]">
          {h2}
        </h2>

        {intro ? (
          <p className="mt-5 text-[16px] md:text-[18px] leading-[1.55] text-white/70 max-w-[62ch]">
            {intro}
          </p>
        ) : null}

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((p) => (
            <article
              key={p.name}
              className={
                p.highlighted
                  ? "flex flex-col rounded-2xl md:rounded-3xl bg-white text-[#050505] p-6 md:p-8"
                  : "flex flex-col rounded-2xl md:rounded-3xl bg-white/[0.06] border border-white/10 p-6 md:p-8"
              }
            >
              <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.01em]">
                {p.name}
              </h3>
              <p
                className={
                  p.highlighted
                    ? "mt-2 text-[15px] font-semibold text-[#050505]/60"
                    : "mt-2 text-[15px] font-semibold text-white/60"
                }
              >
                {p.volume}
              </p>
              <p
                className={
                  p.highlighted
                    ? "mt-4 text-[15px] leading-[1.55] text-[#050505]/75"
                    : "mt-4 text-[15px] leading-[1.55] text-white/70"
                }
              >
                {p.body}
              </p>

              <ul className="mt-6 space-y-2.5">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5">
                    <CheckIcon
                      className={
                        p.highlighted
                          ? "w-4 h-4 mt-1 shrink-0 text-[#050505]"
                          : "w-4 h-4 mt-1 shrink-0 text-white"
                      }
                    />
                    <span
                      className={
                        p.highlighted
                          ? "text-[14px] md:text-[15px] leading-[1.5] text-[#050505]/80"
                          : "text-[14px] md:text-[15px] leading-[1.5] text-white/75"
                      }
                    >
                      {it}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/kontakt"
                className={
                  p.highlighted
                    ? "mt-8 inline-flex items-center justify-center rounded-full bg-[#050505] text-white text-[15px] font-semibold px-5 py-3 transition hover:bg-black/90"
                    : "mt-8 inline-flex items-center justify-center rounded-full bg-white text-[#050505] text-[15px] font-semibold px-5 py-3 transition hover:bg-white/90"
                }
              >
                Paket anfragen
              </Link>
            </article>
          ))}
        </div>

        {note ? (
          <p className="mt-8 text-[14px] leading-[1.55] text-white/50 max-w-[62ch]">
            {note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
