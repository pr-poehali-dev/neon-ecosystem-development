const events = [
  {
    date: "9 мая",
    title: "День Победы",
    description: "Возложение цветов к мемориалу, минута молчания и шествие в память о всех павших героях.",
    type: "Ежегодно",
  },
  {
    date: "22 июня",
    title: "День памяти и скорби",
    description: "Траурная церемония, зажжение свечей и чтение имён погибших сыновей на площадях городов.",
    type: "Ежегодно",
  },
  {
    date: "15 февраля",
    title: "День памяти воинов-интернационалистов",
    description: "Встреча семей, возложение венков, выставка фотографий и личных вещей наших героев.",
    type: "Ежегодно",
  },
  {
    date: "Сентябрь",
    title: "Открытие мемориальной доски",
    description: "Торжественное открытие памятных досок с именами погибших воинов на школах и учреждениях.",
    type: "Планируется",
  },
  {
    date: "Ноябрь",
    title: "Вечер памяти «Свеча»",
    description: "Тёплый вечер встречи мам, родственников и друзей. Живая музыка, воспоминания, слёзы и поддержка.",
    type: "Планируется",
  },
  {
    date: "Декабрь",
    title: "Выставка «Они были рядом»",
    description: "Фотовыставка с портретами и историями жизни погибших воинов — для города, для памяти, для потомков.",
    type: "Планируется",
  },
];

const typeColors: Record<string, string> = {
  "Ежегодно": "text-primary border-primary/40",
  "Планируется": "text-blue-400 border-blue-400/40",
};

export function Events() {
  return (
    <section id="events" className="relative py-24 px-4 bg-black">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Помним навсегда
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient text-white mb-4">
            Мероприятия <i className="font-light">памяти</i>
          </h2>
          <p className="font-mono text-sm text-foreground/55 max-w-lg mx-auto">
            Мы чтим память наших сыновей через живые встречи, церемонии
            и события, которые объединяют семьи
          </p>
        </div>

        {/* Список мероприятий */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {events.map((event) => (
            <div
              key={event.title}
              className="group flex gap-6 border border-white/10 rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
            >
              {/* Дата */}
              <div className="flex-shrink-0 text-center">
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/30 transition-colors duration-300">
                  <span className="font-sentient text-xs text-white/70 leading-tight text-center px-1">{event.date}</span>
                </div>
              </div>

              {/* Контент */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-sentient text-xl text-white">{event.title}</h3>
                  <span className={`font-mono text-xs border rounded-full px-3 py-1 flex-shrink-0 ${typeColors[event.type] || "text-white/50 border-white/20"}`}>
                    {event.type}
                  </span>
                </div>
                <p className="font-mono text-sm text-foreground/55 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Призыв */}
        <div className="border border-white/10 rounded-2xl p-8 md:p-12 bg-white/[0.03] text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Хотите участвовать?</p>
          <h3 className="font-sentient text-3xl md:text-4xl text-white mb-4">
            Организуем событие вместе
          </h3>
          <p className="font-mono text-sm text-foreground/55 max-w-md mx-auto mb-8">
            Если вы хотите организовать мероприятие памяти в вашем городе
            или присоединиться к существующим — свяжитесь с нами.
          </p>
          <a
            href="#contact"
            className="inline-block font-mono text-sm uppercase tracking-widest border border-primary/60 hover:bg-primary/10 text-white px-10 py-4 rounded-full transition-all duration-300"
          >
            [ Стать организатором ]
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
