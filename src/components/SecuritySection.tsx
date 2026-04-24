import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

const BADGES: { src: string; w: number; h: number; caption: string }[] = [
  {
    src: "/images/oa-hero-nesani.png",
    w: 80,
    h: 80,
    caption: "Gesetzlich abgesicherte Kundengelder",
  },
  {
    src: "/images/oa-hero-nesani.png",
    w: 80,
    h: 80,
    caption: "Reguliertes Finanzinstitut",
  },
  {
    src: "/images/oa-hero-nesani.png",
    w: 140,
    h: 80,
    caption: "Top-Standards IT‑Sicherheit & Datenschutz",
  },
];

export function SecuritySection() {
  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="font-sans font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-[-0.02em]">
            Ihr Unternehmen verdient erstklassigen Schutz.
          </h2>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-white hover:text-white/80 transition"
          >
            Mehr erfahren
            <ArrowUpRightIcon className="w-4 h-4" />
          </a>
        </div>

        <div
          className="lg:col-span-7 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mt-6 lg:mt-0"
          style={{
            background: "#1A1A1A",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex flex-col md:flex-row justify-center lg:justify-end gap-10 lg:gap-14">
            {BADGES.map((b) => (
              <div
                key={b.caption}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="h-20 flex items-center">
                  <Image
                    src={b.src}
                    alt={b.caption}
                    width={b.w}
                    height={b.h}
                    className="h-20 w-auto"
                  />
                </div>
                <p className="mt-5 text-[14px] leading-[1.35] text-white/90 max-w-[180px]">
                  {b.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
