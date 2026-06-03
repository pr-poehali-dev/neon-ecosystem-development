const items = [
  {
    icon: "🍞",
    title: "Продукты питания",
    description: "Собираем и отправляем продуктовые наборы бойцам на передовую — тушёнку, крупы, сухпайки и другое необходимое.",
  },
  {
    icon: "💊",
    title: "Медикаменты и аптечки",
    description: "Закупаем и отправляем тактические аптечки, перевязочные материалы, обезболивающие и медикаменты первой помощи.",
  },
  {
    icon: "🧥",
    title: "Одежда и снаряжение",
    description: "Собираем тёплые вещи, термобельё, носки, перчатки и предметы экипировки для участников СВО.",
  },
  {
    icon: "🔦",
    title: "Оборудование и техника",
    description: "Приобретаем и передаём фонари, рации, тепловизоры, зарядные устройства и другое тактическое оборудование.",
  },
  {
    icon: "🚗",
    title: "Транспортировка грузов",
    description: "Организуем сборы и доставку гуманитарных грузов непосредственно до подразделений на линии фронта.",
  },
  {
    icon: "🤝",
    title: "Моральная поддержка",
    description: "Пишем письма, собираем посылки с личными вещами и подарками — чтобы бойцы знали: о них помнят и ждут.",
  },
];

export function Humanitarian() {
  return (
    <section id="help" className="relative py-24 px-4" style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/d9a87fc3-e648-4d13-9643-9885aecc3e1d.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-black/88" />
      {/* Декоративная полоса сверху */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Помогаем вместе
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient text-white mb-4">
            Гуманитарная <i className="font-light">помощь</i>
          </h2>
          <p className="font-mono text-sm text-foreground/55 max-w-lg mx-auto">
            Фонд собирает и отправляет всё необходимое участникам СВО —
            от продуктов и медикаментов до снаряжения и техники
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
            Хотите помочь собрать гуманитарный груз или знаете бойца,
            которому нужна помощь — напишите нам.
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