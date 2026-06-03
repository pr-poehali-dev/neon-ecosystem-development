import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-white/10 py-3">
      <header className="flex items-center justify-between container">
        <a href="/">
          <img
            src="https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/38120509-4798-4475-9698-aeb7488a62f4.PNG"
            alt="Фонд погибших сыновей"
            className="w-[52px] md:w-[60px] rounded-full drop-shadow-lg"
          />
        </a>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {[
            { label: "О фонде", href: "#about" },
            { label: "Наши герои", href: "#heroes" },
            { label: "Помощь семьям", href: "#help" },
            { label: "Вступить в фонд", href: "#contact" },
          ].map((item) => (
            <a
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80"
          href="#contact"
        >
          Помочь
        </a>
        <MobileMenu />
      </header>
    </div>
  );
};