const BG = "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/files/22bec0e8-88ea-45eb-a0c9-50311598a2e8.jpg";

const heroes = [
  {
    name: "Пронин Сергей Дмитриевич",
    years: "25.12.2001 — 02.12.2023",
    rank: "Разведчик-оператор глубинной разведки, рядовой",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/2608941b-e0d3-40e1-bc1b-96a2ddf86025.PNG",
  },
  {
    name: "Стогниенко Сергей Александрович",
    years: "28.02.1976 — 11.05.2024",
    rank: "Старший лейтенант, командир взвода штурмовой роты",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/c8fb5624-edcf-4eba-979b-d66d99fd4e4e.PNG",
  },
  {
    name: "Коноплев Александр Игоревич",
    years: "17.10.1986 — 12.05.2025",
    rank: "Младший сержант",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/a8ea11e0-1664-4326-a445-0a5912da46b2.PNG",
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
    name: "Смоляник Алексей Андреевич",
    years: "13.08.1996 — 17.07.2024",
    rank: "Младший сержант",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/07aac6ae-5caa-426a-bdff-faeb8e1b9ab8.PNG",
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
    name: "Дягтяренко Сергей Николаевич",
    years: "14.04.1973 — 08.03.2025",
    rank: "Младший сержант",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/3839d9f4-b32e-4cf5-9c68-8cb72ae25b85.PNG",
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
    name: "Киселев Юрий Николаевич",
    years: "15.12.1988 — 21.10.2024",
    rank: "Сержант",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/2217ae56-3a61-43b4-a0be-bf9a392e8c94.PNG",
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
    name: "Корнилов Андрей Владимирович",
    years: "06.12.1994 — 04.02.2025",
    rank: "Гвардии ефрейтор",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/e8f7cc03-2593-471b-9733-c3722735c021.PNG",
  },
  {
    name: "Котов Леонид Владимирович",
    years: "02.09.2000 — 20.03.2023",
    rank: "Лейтенант",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/fb8a74c6-bc19-4a64-8fde-5c6d86682899.PNG",
  },
  {
    name: "Масуфранов Георгий Максимович",
    years: "23.08.1996 — 17.04.2023",
    rank: "Рядовой",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/1e444834-ded5-427f-9215-7887e0a288ae.PNG",
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
    name: "Артемьев Сергей Витальевич",
    years: "16.06.1990 — 16.05.2023",
    rank: "Рядовой",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/36e0e141-7727-4037-84b2-06701d77f153.PNG",
  },
  {
    name: "Терсков Константин Александрович",
    years: "01.05.1982 — 05.08.2025",
    rank: "Инженер БПЛА",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/cbe18dd1-4a4e-45bc-b556-83dcc33762d2.PNG",
  },
  {
    name: "Бодров Алексей Максимович",
    years: "29.10.2003 — 16.03.2024",
    rank: "Гвардии рядовой",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/084fe638-1997-42da-aa7b-fc51f3d08295.PNG",
  },
  {
    name: "Бромат Денис Игоревич",
    years: "06.08.1988 — 02.01.2025",
    rank: "Младший сержант, командир отделения",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/56a57d5d-052a-4692-8921-7a0194ffeb72.PNG",
  },
  {
    name: "Русскин Антон Алексеевич",
    years: "11.05.2000 — 02.09.2025",
    rank: "Младший сержант",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/270237f0-43f4-415c-b898-e9f0ecd79398.PNG",
  },
  {
    name: "Бодров Владислав Денисович",
    years: "19.08.1999 — 19.11.2024",
    rank: "Рядовой",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/68859464-5b36-4eb8-a92e-c6d7cc9006ee.PNG",
  },
  {
    name: "Кудрин Андрей Юрьевич",
    years: "23.07.1992 — 22.02.2024",
    rank: "Гвардии рядовой",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/3602e444-97e2-45c0-a262-b7f138e1c9f8.PNG",
  },
  {
    name: "Безгузиков Алексей Леонидович",
    years: "06.07.1978 — 03.05.2023",
    rank: "Старший лейтенант, командир взвода",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/731782e7-e742-4be5-83e2-4623c66c6663.PNG",
  },
  {
    name: "Кравченко Игорь Михайлович",
    years: "01.12.1981 — 13.01.2025",
    rank: "Рядовой",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/0412c713-12fc-4f3b-957c-b89f621ed73b.PNG",
  },
  {
    name: "Пимонов Василий Юрьевич",
    years: "31.12.1988 — 20.09.2025",
    rank: "Гвардии старшина, механик-водитель второго расчёта",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/c1297efe-7422-46f6-a44f-52024ef7bc2a.PNG",
  },
  {
    name: "Гурдыган Александр Сергеевич",
    years: "21.02.1987 — 03.09.2025",
    rank: "Рядовой, командир отделения",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/755bf00b-2b8d-4b3b-aad9-da92c5af5541.PNG",
  },
  {
    name: "Шапран Алексей Александрович",
    years: "27.05.1980 — 17.11.2024",
    rank: "Младший сержант",
    region: "",
    description: "",
    photo: "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/cf75b8d2-1c2b-48f1-96ae-fc0f03d9f598.PNG",
  },
];

export function Heroes() {
  return (
    <section
      id="heroes"
      className="relative pt-28 pb-24 px-4"
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
                <div className="w-full">
                  <img
                    src={hero.photo}
                    alt={hero.name}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-white/5 flex items-center justify-center border-b border-white/10">
                  <span className="text-4xl text-white/20">✦</span>
                </div>
              )}

              <div className="p-6">
                <h3 className="font-sentient text-2xl text-white mb-2">{hero.name}</h3>
                {hero.rank && <p className="font-mono text-sm text-white/60 uppercase tracking-wider mb-2">{hero.rank}</p>}
                <p className="font-mono text-base text-primary mb-2">{hero.years}</p>
                {hero.region && <p className="font-mono text-sm text-foreground/50 uppercase tracking-wider mb-3">{hero.region}</p>}
                {hero.description && <p className="font-mono text-base text-foreground/70 leading-relaxed">{hero.description}</p>}
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