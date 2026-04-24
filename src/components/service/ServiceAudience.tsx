import { ArrowUpRightIcon } from "@/components/icons";

type Props = {
  eyebrow: string;
  h2: string;
  body: string;
  bullets: string[];
};

export function ServiceAudience({ eyebrow, h2, body, bullets }: Props) {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
        <div className="max-w-[820px]">
          <div className="text-[13px] font-semibold tracking-widest uppercase text-[#050505]/60">
            {eyebrow}
          </div>
          <h2 className="mt-4 font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]">
            {h2}
          </h2>
          <p className="mt-6 text-[16px] md:text-[18px] leading-[1.55] text-[#050505]/80 max-w-[58ch]">
            {body}
          </p>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-10 md:gap-y-5 text-[15px] md:text-[16px] leading-[1.5] text-[#050505]/85">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1.5 inline-block w-1.5 h-1.5 shrink-0 rounded-full bg-[#050505]" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="/kontakt"
              className="inline-flex items-center rounded-full bg-[#050505] text-white text-[15px] font-semibold px-5 py-3 hover:bg-black/90 transition"
            >
              Projekt anfragen
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#050505] hover:opacity-80 transition"
            >
              Prozess ansehen
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
