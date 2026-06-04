const partners = [
  {
    short: "МО РФ",
    name: "Министерство обороны Российской Федерации",
    desc: "Официальное взаимодействие по вопросам увековечения памяти",
  },
  {
    short: "РВИО",
    name: "Российское военно-историческое общество",
    desc: "Совместная работа по созданию мемориалов и памятных мероприятий",
  },
  {
    short: "ФЗО",
    name: "Фонд «Защитники Отечества»",
    desc: "Координация помощи семьям участников СВО и ветеранам",
  },
  {
    short: "РПЦ",
    name: "Русская Православная Церковь",
    desc: "Духовная поддержка семей, панихиды и траурные церемонии",
  },
];

export function Partners() {
  return (
    <section id="partners" className="relative py-24 px-4 bg-[#060606]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Официальное сотрудничество
            </p>
            <h2 className="text-4xl md:text-5xl font-sentient text-white">
              Наши <i className="font-light">партнёры</i>
            </h2>
          </div>
          <p className="font-mono text-sm text-foreground/40 max-w-sm md:text-right leading-relaxed">
            Фонд осуществляет деятельность в партнёрстве с государственными
            и общественными организациями
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden">
          {partners.map((p) => (
            <div
              key={p.short}
              className="bg-[#060606] p-8 hover:bg-white/[0.02] transition-colors duration-300 flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary/80 text-center leading-tight px-1">{p.short}</span>
              </div>
              <div>
                <h3 className="font-mono text-sm text-white/90 mb-1 leading-snug">{p.name}</h3>
                <p className="font-mono text-xs text-foreground/40 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/[0.06] rounded-xl px-8 py-5">
          <p className="font-mono text-xs text-foreground/35 uppercase tracking-widest">
            Заинтересованы в сотрудничестве?
          </p>
          <a
            href="mailto:kemerovo@yandex.ru"
            className="font-mono text-xs uppercase tracking-widest text-primary/70 hover:text-primary border border-primary/20 hover:border-primary/50 px-6 py-2.5 rounded-full transition-all duration-300"
          >
            Направить запрос
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
