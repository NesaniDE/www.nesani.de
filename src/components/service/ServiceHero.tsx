import Image from "next/image";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type Card = { title: string; sub: string; icon: IconComponent };

type Props = {
  h1: string;
  subline: string;
  card1: Card;
  card2: Card;
  image: { src: string; alt: string };
};

export function ServiceHero({ h1, subline, card1, card2, image }: Props) {
  return (
    <section className="relative bg-white text-[#050505] pt-24 md:pt-28 lg:pt-32 pb-10 md:pb-14 lg:pb-16 overflow-hidden">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <h1 className="font-sans font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.03] tracking-[-0.02em] max-w-[15ch]">
              {h1}
            </h1>
            <p className="mt-6 md:mt-8 text-[17px] md:text-[19px] leading-[1.5] text-[#050505]/80 max-w-[54ch]">
              {subline}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[card1, card2].map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.title}
                    href="#process"
                    className="group rounded-2xl border border-black/10 bg-white p-5 flex items-center gap-4 hover:border-black/40 transition"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#F5F2EB] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#050505]" />
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-[15px]">
                        {c.title}
                      </div>
                      <div className="text-[13px] text-[#050505]/70 mt-0.5">
                        {c.sub}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] lg:aspect-[5/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width:1024px) 640px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
