const BG = "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/files/5f766bd6-5907-4a82-9dac-793e8fdf6fe1.jpg";

const heroes = [
  {
    name: "Артемьев Сергей Витальевич",
    years: "16.06.1990 — 16.05.2023",
    rank: "Рядовой",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/36e0e141-7727-4037-84b2-06701d77f153.PNG",
  },
  { name: "Александр Иванов", years: "1998 — 2023", rank: "", region: "Москва", description: "Любил семью, мечтал стать инженером. Навсегда в наших сердцах.", photo: "" },
  { name: "Дмитрий Соколов", years: "1996 — 2022", rank: "", region: "Краснодар", description: "Добрый, смелый, всегда первым приходил на помощь друзьям.", photo: "" },
  { name: "Михаил Петров", years: "2000 — 2023", rank: "", region: "Екатеринбург", description: "Спортсмен и музыкант. Мама ждала его каждый день.", photo: "" },
  { name: "Сергей Волков", years: "1995 — 2022", rank: "", region: "Новосибирск", description: "Заботливый сын и старший брат. Гордость всей семьи.", photo: "" },
  { name: "Андрей Морозов", years: "1999 — 2023", rank: "", region: "Казань", description: "Мечтал открыть своё дело. Жизнерадостный и отзывчивый.", photo: "" },
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
              className="group relative border border-white/10 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:border-white/25"
            >
              {/* Фото или заглушка */}
              {hero.photo ? (
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={hero.photo}
                    alt={hero.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-white/5 flex items-center justify-center border-b border-white/10">
                  <span className="text-4xl text-white/20">✦</span>
                </div>
              )}

              <div className="p-6">
                <h3 className="font-sentient text-xl text-white mb-1">{hero.name}</h3>
                {hero.rank && <p className="font-mono text-xs text-white/50 uppercase tracking-wider mb-1">{hero.rank}</p>}
                <p className="font-mono text-xs text-primary mb-1">{hero.years}</p>
                {hero.region && <p className="font-mono text-xs text-foreground/40 uppercase tracking-wider mb-3">{hero.region}</p>}
                {hero.description && <p className="font-mono text-sm text-foreground/60 leading-relaxed">{hero.description}</p>}
              </div>

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
