import Image from "next/image";

const FEATURES = [
  {
    icon: "/images/fin-27326-57d34c54dd.svg",
    title: "Bis zu 50.000 €",
    body: "Ratenkredit mit wenigen Klicks freischalten und bei Bedarf nutzen.",
  },
  {
    icon: "/images/fin-33263-b199afab8b.svg",
    title: "3, 9 oder 12 Raten",
    body: "Flexible Rückzahlung mit der Möglichkeit zur vorzeitigen Tilgung.",
  },
  {
    icon: "/images/fin-25603-f87b244df0.svg",
    title: "Ab 0,62 %",
    body: "Dynamische Gebühren je nach Laufzeit und Risikoprofil.",
  },
];

export function FlexibleSolutions() {
  return (
    <section className="bg-white text-[#050505]">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <h2 className="font-sans font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.08] tracking-[-0.02em] max-w-[22ch]">
          Flexible Lösungen für Ihre Finanzen
        </h2>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl md:rounded-3xl bg-[#F5F2EB] p-6 md:p-8 lg:p-10"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <Image
                  src={f.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <h3 className="mt-8 md:mt-10 font-sans font-semibold text-[24px] md:text-[28px] leading-[1.15] tracking-[-0.01em]">
                {f.title}
              </h3>
              <p className="mt-3 text-[15px] md:text-[16px] leading-[1.55] text-[#050505]/75 max-w-[36ch]">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
