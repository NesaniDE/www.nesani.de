import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

type BentoCard = {
  title: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  className: string;
  bg?: string;
  imagePos?: "top" | "bottom" | "right" | "full";
};

const CARDS: BentoCard[] = [
  {
    title: "Persönlicher Kundenservice",
    body: "24/7",
    image: "/images/asset-33384-9e183c4e9f.avif",
    imageAlt: "24/7 Kundenservice",
    className: "md:col-span-4 lg:col-span-4 md:row-span-2",
    imagePos: "top",
  },
  {
    title: "Professionelles Geschäftskonto",
    body: "Eröffnen Sie Ihr Konto in wenigen Minuten einfach online.",
    image: "/images/asset-33381-4bacb4a640.avif",
    imageAlt: "Geschäftskonto ab 0 €",
    className: "md:col-span-4 lg:col-span-4 md:row-span-2",
    imagePos: "bottom",
  },
  {
    title: "Zahlungen",
    body: "SEPA-Echtzeit & international, Mastercard, Apple/Google Pay",
    image: "/images/asset-33382-9648825624.avif",
    imageAlt: "Zahlungen",
    className: "md:col-span-4 lg:col-span-4 md:row-span-2",
    imagePos: "bottom",
  },
  {
    title: "Finanzierung und Ratenzahlung",
    body: "In wenigen Klicks – einfach, schnell & digital.",
    image: "/images/asset-34667-2cb06cc635.avif",
    imageAlt: "Finanzierung",
    className: "md:col-span-4 lg:col-span-4 md:row-span-2",
    imagePos: "bottom",
  },
  {
    title: "Einnahmen",
    body: "Rechnungen mit Zahlungslinks, Tap to Pay & POS-Terminals",
    image: "/images/asset-33379-6ad140c5ee.avif",
    imageAlt: "Einnahmen",
    className: "md:col-span-4 lg:col-span-4 md:row-span-2",
    imagePos: "bottom",
  },
  {
    title: "Mastercard Debit- und Kreditkarten",
    body: "Mit De-IBAN & cashback",
    image: "/images/asset-33570-fd6109162e.avif",
    imageAlt: "Mastercard",
    className: "md:col-span-4 lg:col-span-4 md:row-span-2",
    imagePos: "bottom",
  },
];

export function FeaturesBento() {
  return (
    <section className="bg-[#050505] text-white pt-20 pb-24 md:pt-24 md:pb-32 px-5 lg:px-12">
      <div className="mx-auto max-w-[1344px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="font-sans font-semibold text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[900px]">
            Das Geschäftskonto<br />
            <span className="text-white/85">für Unternehmen in Europa</span>
          </h2>
          <a
            href="#"
            className="inline-flex items-center self-start lg:self-auto rounded-full border border-white/30 text-white text-[15px] font-semibold px-5 py-3 hover:bg-white/10 transition whitespace-nowrap"
          >
            Geschäftskonto entdecken
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className={[
                "group relative overflow-hidden rounded-3xl bg-[#0b0b0b] border border-white/5",
                "col-span-1",
                c.className,
                "min-h-[260px]",
              ].join(" ")}
            >
              {c.imagePos === "top" && c.image && (
                <div className="relative h-40 md:h-48 w-full">
                  <Image src={c.image} alt={c.imageAlt ?? ""} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
              )}
              <div className="p-6 md:p-7 flex flex-col gap-2">
                <h3 className="font-sans font-semibold text-[20px] md:text-[22px] leading-tight">
                  {c.title}
                </h3>
                {c.body && (
                  <p className="text-white/75 text-[15px] leading-relaxed">
                    {c.body}
                  </p>
                )}
              </div>
              {c.imagePos === "bottom" && c.image && (
                <div className="relative h-44 md:h-52 w-full mt-auto">
                  <Image src={c.image} alt={c.imageAlt ?? ""} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
