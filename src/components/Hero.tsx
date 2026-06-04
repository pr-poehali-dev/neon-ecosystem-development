import { SoldierScene } from "./SoldierScene";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";

export function Hero() {
  const [hovering, setHovering] = useState(false); // used for button hover effects

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <SoldierScene />
      <Header />

      <div className="pb-16 mt-auto text-center relative">
        <img
          src="https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/38120509-4798-4475-9698-aeb7488a62f4.PNG"
          alt="Фонд погибших сыновей"
          className="w-28 h-28 mx-auto mb-6 opacity-30 mix-blend-screen"
        />
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          В память о тех, <br />
          кто не <i className="font-light">вернулся</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
          Фонд создан мамами, потерявшими сыновей. Мы помогаем семьям и
          сохраняем память о наших героях.
        </p>

        <a className="contents max-sm:hidden" href="#contact">
          <Button
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Вступить в фонд]
          </Button>
        </a>
        <a className="contents sm:hidden" href="#contact">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Вступить в фонд]
          </Button>
        </a>
      </div>
    </div>
  );
}