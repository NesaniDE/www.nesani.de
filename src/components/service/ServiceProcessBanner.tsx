import { ArrowUpRightIcon } from "@/components/icons";

type Props = {
  h2: string;
  body: string;
};

export function ServiceProcessBanner({ h2, body }: Props) {
  return (
    <section id="process" className="bg-[#050505] text-white overflow-hidden">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-24 lg:py-28">
        <div className="max-w-[780px]">
          <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[18ch]">
            {h2}
          </h2>
          <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.55] text-white/80 max-w-[52ch]">
            {body}
          </p>
          <div className="mt-8">
            <a
              href="#process-cards"
              className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#050505] text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition"
            >
              Prozess im Detail
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
