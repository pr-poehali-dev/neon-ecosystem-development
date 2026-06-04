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

      <img
        src="https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/3613ce3a-63be-4b21-8552-5a4ef505d6ff.png"
        alt="Фонд погибших сыновей"
        className="absolute left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2 w-36 md:w-48 opacity-45 mix-blend-screen pointer-events-none"
      />

      <div className="pb-16 mt-auto text-center relative">
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