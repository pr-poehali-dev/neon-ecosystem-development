import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <div className="fixed z-[100] top-0 left-0 w-full">
      <header className="flex items-center justify-between container py-4">
        <a href="/" className="w-8" />

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