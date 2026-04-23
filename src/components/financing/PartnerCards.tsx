import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

type Partner = {
  name: string;
  logo: string;
  intro: string;
  amount: string;
  tail: string;
};

const PARTNERS: Partner[] = [
  {
    name: "Iwoca",
    logo: "/images/fin-33271-x.avif",
    intro: "Schneller Firmenkredit für KMU:",
    amount: "Bis 500.000 €",
    tail:
      "mit Laufzeiten bis zu 60 Monaten – sofortige Kreditentscheidung und Option zur vorzeitigen Rückzahlung.",
  },
  {
    name: "Banxware",
    logo: "/images/fin-33268-x.avif",
    intro: "Kredite für KMU aller Branchen:",
    amount: "Bis 250.000 €",
    tail:
      "mit Laufzeiten bis zu 12 Monaten – speziell für Online- und Kartenumsätze, zu festen Konditionen.",
  },
  {
    name: "Defacto",
    logo: "/images/fin-33265-x.png",
    intro: "Dynamische Kredite für KMU:",
    amount: "Bis 1.000.000 €",
    tail:
      "mit Laufzeiten bis maximal 4 Monate – kurzfristig, 100 % flexibel und mit täglichem Zinssatz.",
  },
  {
    name: "YouLend",
    logo: "/images/fin-33266-x.png",
    intro: "Flexible Finanzierung:",
    amount: "Bis 250.000 €",
    tail:
      "mit Laufzeiten bis zu 18 Monaten – feste Gebühr, keine Zinsen und automatische Rückzahlung per Kartenumsatz.",
  },
  {
    name: "Fleet",
    logo: "/images/fin-33267-x.png",
    intro: "Leasing für IT-Ausstattung:",
    amount: "Bis 1.000.000 €",
    tail:
      "für IT‑Equipment und Büromöbel mit Laufzeiten bis zu 36 Monaten – Zusage innerhalb von 48 Stunden.",
  },
];

export function PartnerCards() {
  return (
    <section id="partners" className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pb-16 md:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PARTNERS.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl md:rounded-3xl bg-[#0F0F0F] border border-white/5 p-6 md:p-8 flex flex-col gap-5"
            >
              <div className="h-10 flex items-center">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={140}
                  height={36}
                  className="h-8 md:h-10 w-auto max-w-[160px] object-contain"
                />
              </div>
              <h3 className="font-sans font-semibold text-[20px] md:text-[22px] leading-[1.25]">
                {p.name}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[1.55] text-white/80">
                {p.intro}{" "}
                <span className="font-semibold text-white">{p.amount}</span>{" "}
                {p.tail}
              </p>
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-medium text-white hover:opacity-80 transition"
              >
                Mehr erfahren
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
