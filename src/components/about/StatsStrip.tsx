import type { ComponentType, SVGProps } from "react";
import { HiShieldCheck } from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa6";
import { TbInfinity } from "react-icons/tb";
import { FiMinusCircle } from "react-icons/fi";

type Stat = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  number: string;
  label: string;
};

const STATS: Stat[] = [
  { Icon: HiShieldCheck, number: "100%", label: "Eigenentwicklung" },
  { Icon: FaHandshake, number: "1:1", label: "Direkter Kontakt" },
  { Icon: TbInfinity, number: "∞", label: "Wartbarkeit" },
  { Icon: FiMinusCircle, number: "0", label: "Zwischenagenturen" },
];

export function StatsStrip() {
  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {STATS.map(({ Icon, number, label }) => (
            <div key={label} className="flex flex-col items-start gap-4">
              <span className="inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/15 text-white">
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div>
                <div className="font-sans font-semibold text-[28px] md:text-[36px] lg:text-[44px] leading-[1.05] tracking-[-0.02em]">
                  {number}
                </div>
                <div className="mt-1 text-[16px] md:text-[18px] text-white/80">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
