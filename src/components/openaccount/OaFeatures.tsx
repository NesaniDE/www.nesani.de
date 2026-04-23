import Image from "next/image";

type Feature = {
  title: string;
  copy: string;
  img: string;
  span: string;
};

const FEATURES: Feature[] = [
  {
    title: "Rechnungsverwaltung",
    copy: "Automatisiert sammeln und auslesen, GoBD-konform speichern: Verwalten Sie Ihre Rechnungen digital, direkt in Ihrem Qonto Geschäftskonto!",
    img: "/images/oa-33319-03e993664a.avif",
    span: "lg:col-span-7",
  },
  {
    title: "Cashflow Management",
    copy: "Analysefähige Diagramme, Echtzeit-Warnungen und automatisch kategorisierte Transaktionen.",
    img: "/images/oa-33315-400d5133a8.avif",
    span: "lg:col-span-5",
  },
  {
    title: "Finanzierung",
    copy: "Geschäftskredite bis zu 1 Mio. € online beantragen und flexible Pay-Later-Optionen nutzen.",
    img: "/images/oa-33317-272cbaceb8.avif",
    span: "lg:col-span-5",
  },
  {
    title: "Ausgabenmanagement",
    copy: "Teambudgets, Genehmigungen und Zahlungslimits für Firmenkarten.",
    img: "/images/oa-33314-0773e7fc1a.avif",
    span: "lg:col-span-7",
  },
];

export function OaFeatures() {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
          Umfassende Funktionen im Qonto Firmenkonto
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className={[
                "rounded-2xl md:rounded-3xl bg-[#F4F1EA] p-6 md:p-10 flex flex-col",
                f.span,
              ].join(" ")}
            >
              <h3 className="font-sans font-semibold text-[22px] md:text-[28px] leading-[1.2]">
                {f.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.55] text-[#050505]/80 max-w-[44ch]">
                {f.copy}
              </p>
              <div className="mt-8 relative aspect-[16/10] rounded-xl overflow-hidden">
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  sizes="(min-width:1024px) 640px, 100vw"
                  className="object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
