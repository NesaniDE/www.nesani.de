const STEPS = [
  {
    num: "Schritt 1",
    title: "Kontoeröffnung online starten",
    copy: "Geben Sie die alle nötigen Informationen zu Ihnen und Ihrem Unternehmen an.",
  },
  {
    num: "Schritt 2",
    title: "Wir überprüfen Ihre Identität",
    copy: "Reichen Sie einen Identitätsnachweis ein und verifizieren Sie sich per Videocall.",
  },
  {
    num: "Schritt 3",
    title: "Geschäftskonto ist eröffnet",
    copy: "Wählen Sie eine Firmenkarte und erhalten Sie eine IBAN für Ihr Geschäftskonto.",
  },
];

export function OaSteps() {
  return (
    <section className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <h2 className="font-sans font-semibold text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-[-0.02em] max-w-[16ch]">
          Geschäftskonto in nur 3 Schritten eröffnen
        </h2>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((s, i) => (
            <div key={s.num} className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-sans font-semibold text-[56px] md:text-[72px] leading-none text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-[13px] font-semibold uppercase tracking-wider text-white/60 mb-3">
                {s.num}
              </p>
              <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2]">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-white/70 max-w-[40ch]">
                {s.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
