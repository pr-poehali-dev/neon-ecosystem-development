import { useEffect, useRef } from "react";

const BG_IMAGE =
  "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/files/7fe9e19a-40b9-47dc-9969-b1281956ec89.jpg";

export const SoldierScene = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      el.style.transform = `scale(1.08) translate(${dx * -12}px, ${dy * -6}px)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Реалистичное фото-фон с параллаксом */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          transform: "scale(1.0)",
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Тёмный оверлей для читаемости текста */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.65) 100%)",
        }}
      />
    </div>
  );
};