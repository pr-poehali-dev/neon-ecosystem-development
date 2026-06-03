const items = [
  {
    icon: "🍞",
    title: "Продукты питания",
    description: "Собираем и передаём продуктовые наборы семьям погибших воинов, оказавшимся в трудной жизненной ситуации.",
  },
  {
    icon: "💊",
    title: "Медикаменты",
    description: "Помогаем с приобретением лекарств, средств реабилитации и медицинского оборудования для семей и раненых бойцов.",
  },
  {
    icon: "🧥",
    title: "Одежда и вещи",
    description: "Собираем тёплую одежду, обувь и предметы первой необходимости для нуждающихся семей.",
  },
  {
    icon: "🏠",
    title: "Помощь с жильём",
    description: "Содействуем в решении жилищных вопросов: ремонт, оплата коммунальных услуг, помощь с документами.",
  },
  {
    icon: "📚",
    title: "Дети героев",
    description: "Помогаем детям погибших воинов с учёбой, школьными принадлежностями, отдыхом и творческим развитием.",
  },
  {
    icon: "🤝",
    title: "Психологическая поддержка",
    description: "Организуем встречи мам, группы поддержки и доступ к консультациям психологов для преодоления горя.",
  },
];

export function Humanitarian() {
  return (
    <section id="help" className="relative py-24 px-4 bg-[#0d0d0d]">
      {/* Декоративная полоса сверху */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Помогаем вместе
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient text-white mb-4">
            Гуманитарная <i className="font-light">помощь</i>
          </h2>
          <p className="font-mono text-sm text-foreground/55 max-w-lg mx-auto">
            Фонд оказывает реальную помощь семьям погибших воинов —
            от продуктов до психологической поддержки
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {items.map((item) => (
            <div
              key={item.title}
              className="group border border-white/10 rounded-2xl p-7 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-5">{item.icon}</div>
              <h3 className="font-sentient text-xl text-white mb-3">{item.title}</h3>
              <p className="font-mono text-sm text-foreground/55 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Призыв к действию */}
        <div className="border border-white/10 rounded-2xl p-8 md:p-12 bg-white/[0.03] text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Нужна помощь?</p>
          <h3 className="font-sentient text-3xl md:text-4xl text-white mb-4">
            Мы рядом и готовы помочь
          </h3>
          <p className="font-mono text-sm text-foreground/55 max-w-md mx-auto mb-8">
            Если вы семья погибшего воина и нуждаетесь в поддержке —
            напишите нам. Никто не останется один.
          </p>
          <a
            href="#contact"
            className="inline-block font-mono text-sm uppercase tracking-widest border border-primary/60 hover:bg-primary/10 text-white px-10 py-4 rounded-full transition-all duration-300"
          >
            [ Обратиться за помощью ]
          </a>
        </div>
      </div>

      {/* Декоративная полоса снизу */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
