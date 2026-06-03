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
  {
    name: "Пронин Сергей Дмитриевич",
    years: "25.12.2001 — 02.12.2023",
    rank: "Разведчик-оператор глубинной разведки, рядовой",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/2608941b-e0d3-40e1-bc1b-96a2ddf86025.PNG",
  },
  {
    name: "Бурнашев Тимур Владимирович",
    years: "10.12.1988 — 16.06.2024",
    rank: "Младший сержант",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/1da671ac-be8a-4b48-a2f8-ebde46df09aa.PNG",
  },
  {
    name: "Волков Константин Владимирович",
    years: "29.10.1984 — 13.03.2022",
    rank: "Гв. ст. сержант, зам. командира взвода, 1-го мотострелкового батальона",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/20abf230-ed16-4221-a889-ad81715a0e01.PNG",
  },
  {
    name: "Гаврилов Александр Сергеевич",
    years: "04.10.1995 — 17.04.2023",
    rank: "Рядовой, механик водитель",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/6661a143-f767-41a6-8871-a37b13de9105.PNG",
  },
  {
    name: "Гурин Денис Александрович",
    years: "12.09.2002 — 15.05.2025",
    rank: "Гвардии младший сержант",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/e159ddb6-60b9-4a91-90e9-0140e661c4e8.PNG",
  },
  {
    name: "Голубев Владимир Владимирович",
    years: "28.02.1985 — 26.12.2024",
    rank: "Младший сержант, командир орудия",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/16ba129b-1e11-4c11-ae36-d58a5d2b99ec.PNG",
  },
  {
    name: "Дягтяренко Сергей Николаевич",
    years: "14.04.1973 — 08.03.2025",
    rank: "Младший сержант",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/3839d9f4-b32e-4cf5-9c68-8cb72ae25b85.PNG",
  },
  {
    name: "Киклевич Роман Максимович",
    years: "12.02.1992 — 16.08.2024",
    rank: "Гвардии рядовой",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/392ae422-6dba-4255-becc-5a31806b9ee0.PNG",
  },
  {
    name: "Киселев Юрий Николаевич",
    years: "15.12.1988 — 21.10.2024",
    rank: "Сержант",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/2217ae56-3a61-43b4-a0be-bf9a392e8c94.PNG",
  },
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