import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <div className="fixed z-[100] top-0 left-0 w-full">
      <header className="flex items-center justify-between container py-4">
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/38120509-4798-4475-9698-aeb7488a62f4.PNG"
            alt="Фонд погибших сыновей"
            className="w-10 md:w-12 rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-200"
          />
          <img
            src="https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/38120509-4798-4475-9698-aeb7488a62f4.PNG"
            alt="Фонд погибших сыновей"
            className="h-7 w-auto hidden sm:block opacity-30 group-hover:opacity-60 transition-opacity duration-200"
          />
        </a>

        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center gap-x-8">
          {[
            { label: "Наши герои", href: "#heroes" },
            { label: "Гуманитарная помощь", href: "#help" },
            { label: "Мероприятия", href: "#events" },
            { label: "Партнёры", href: "#partners" },
          ].map((item) => (
            <a
              className="uppercase font-mono text-[11px] text-foreground/50 hover:text-foreground/90 duration-200 transition-colors tracking-widest"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="uppercase max-lg:hidden font-mono text-[11px] tracking-widest border border-primary/40 hover:border-primary text-primary hover:bg-primary/10 px-5 py-2 rounded-full transition-all duration-200"
          href="#contact"
        >
          Вступить
        </a>

        <MobileMenu />
      </header>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
  );
};