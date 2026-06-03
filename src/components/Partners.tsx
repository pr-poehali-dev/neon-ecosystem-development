const partners = [
  {
    name: "Министерство обороны РФ",
    description: "Официальное взаимодействие по вопросам увековечения памяти павших воинов",
    icon: "⭐",
  },
  {
    name: "Российское военно-историческое общество",
    description: "Совместная работа по созданию мемориалов и памятных мероприятий",
    icon: "🏛️",
  },
  {
    name: "Фонд «Защитники Отечества»",
    description: "Координация помощи семьям участников СВО и ветеранам боевых действий",
    icon: "🛡️",
  },
  {
    name: "Волонтёрские организации",
    description: "Сеть волонтёров по всей России помогает собирать и доставлять гуманитарные грузы",
    icon: "🤝",
  },
  {
    name: "Региональные администрации",
    description: "Поддержка на уровне городов и регионов в организации памятных мероприятий",
    icon: "🏢",
  },
  {
    name: "Православная церковь",
    description: "Духовная поддержка семей, панихиды и совместные траурные церемонии",
    icon: "✝️",
  },
];

export function Partners() {
  return (
    <section id="partners" className="relative py-24 px-4 bg-[#080808]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Вместе сильнее
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient text-white mb-4">
            Наши <i className="font-light">партнёры</i>
          </h2>
          <p className="font-mono text-sm text-foreground/55 max-w-lg mx-auto">
            Мы работаем в партнёрстве с организациями, которые разделяют
            наши ценности и помогают нам делать больше
          </p>
        </div>

        {/* Партнёры */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group border border-white/10 rounded-2xl p-7 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 flex gap-5"
            >
              <div className="text-3xl flex-shrink-0">{partner.icon}</div>
              <div>
                <h3 className="font-sentient text-lg text-white mb-2 leading-snug">{partner.name}</h3>
                <p className="font-mono text-sm text-foreground/50 leading-relaxed">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Предложение о партнёрстве */}
        <div className="border border-white/10 rounded-2xl p-8 md:p-12 bg-white/[0.02] text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Стать партнёром</p>
          <h3 className="font-sentient text-3xl md:text-4xl text-white mb-4">
            Хотите помочь фонду?
          </h3>
          <p className="font-mono text-sm text-foreground/55 max-w-md mx-auto mb-8">
            Если ваша организация готова поддержать фонд — напишите нам.
            Вместе мы сможем сделать больше для наших героев.
          </p>
          <a
            href="mailto:kemerovo@yandex.ru"
            className="inline-block font-mono text-sm uppercase tracking-widest border border-primary/60 hover:bg-primary/10 text-white px-10 py-4 rounded-full transition-all duration-300"
          >
            [ Написать нам ]
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
