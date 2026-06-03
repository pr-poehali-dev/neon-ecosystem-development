const BG = "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/files/5f766bd6-5907-4a82-9dac-793e8fdf6fe1.jpg";

const heroes = [
  { name: "Александр Иванов", years: "1998 — 2023", region: "Москва", description: "Любил семью, мечтал стать инженером. Навсегда в наших сердцах." },
  { name: "Дмитрий Соколов", years: "1996 — 2022", region: "Краснодар", description: "Добрый, смелый, всегда первым приходил на помощь друзьям." },
  { name: "Михаил Петров", years: "2000 — 2023", region: "Екатеринбург", description: "Спортсмен и музыкант. Мама ждала его каждый день." },
  { name: "Сергей Волков", years: "1995 — 2022", region: "Новосибирск", description: "Заботливый сын и старший брат. Гордость всей семьи." },
  { name: "Андрей Морозов", years: "1999 — 2023", region: "Казань", description: "Мечтал открыть своё дело. Жизнерадостный и отзывчивый." },
  { name: "Николай Кузнецов", years: "1997 — 2022", region: "Ростов-на-Дону", description: "Любил рыбалку и природу. Самый родной человек для мамы." },
];

export function Heroes() {
  return (
    <section
      id="heroes"
      className="relative py-24 px-4"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="container mx-auto relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Помним каждого
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient text-white mb-4">
            Наши <i className="font-light">герои</i>
          </h2>
          <p className="font-mono text-sm text-foreground/55 max-w-md mx-auto">
            Они ушли, но остаются живыми в сердцах своих мам,
            семей и всех, кто их знал
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {heroes.map((hero) => (
            <div
              key={hero.name}
              className="group relative border border-white/10 rounded-2xl p-6 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:border-white/25"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors duration-300">
                <span className="text-2xl">✦</span>
              </div>
              <h3 className="font-sentient text-xl text-white mb-1">{hero.name}</h3>
              <p className="font-mono text-xs text-primary mb-1">{hero.years}</p>
              <p className="font-mono text-xs text-foreground/40 uppercase tracking-wider mb-4">{hero.region}</p>
              <p className="font-mono text-sm text-foreground/60 leading-relaxed">{hero.description}</p>
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Кнопка */}
        <div className="text-center mt-14">
          <p className="font-mono text-sm text-foreground/40 mb-6">
            Хотите увековечить память вашего сына?
          </p>
          <a
            href="#contact"
            className="inline-block font-mono text-sm uppercase tracking-widest border border-white/20 hover:border-primary/60 text-foreground/70 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
          >
            [ Добавить героя ]
          </a>
        </div>
      </div>
    </section>
  );
}