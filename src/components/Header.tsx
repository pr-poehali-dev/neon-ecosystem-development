import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <div className="fixed z-[100] top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-white/10">
      {/* Верхняя строка — почта */}
      <div className="border-b border-white/10 py-1.5 hidden lg:block">
        <div className="container flex justify-end">
          <a
            href="mailto:kemerovo@yandex.ru"
            className="font-mono text-xs text-foreground/50 hover:text-primary transition-colors duration-150"
          >
            kemerovo@yandex.ru
          </a>
        </div>
      </div>

      {/* Основная строка — логотип + меню */}
      <header className="flex items-center justify-between container py-2">
        <a href="/">
          <img
            src="https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/38120509-4798-4475-9698-aeb7488a62f4.PNG"
            alt="Фонд погибших сыновей"
            className="w-[48px] md:w-[56px] rounded-full drop-shadow-lg"
          />
        </a>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-8">
          {[
            { label: "Наши герои", href: "#heroes" },
            { label: "Гуманитарная помощь", href: "#help" },
            { label: "Мероприятия", href: "#events" },
            { label: "Вступить в фонд", href: "#contact" },
          ].map((item) => (
            <a
              className="uppercase inline-block font-mono text-xs text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out tracking-wider"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-xs text-primary hover:text-primary/80 tracking-wider"
          href="#contact"
        >
          Вступить
        </a>
        <MobileMenu />
      </header>
    </div>
  );
};