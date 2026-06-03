import { useEffect, useRef } from "react";

export const SoldierScene = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // subtle parallax on mouse move
    const handleMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      el.style.transform = `translate(${dx * -8}px, ${dy * -4}px)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Stars background */}
      <div className="absolute inset-0">
        {Array.from({ length: 120 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 70 + "%",
              opacity: Math.random() * 0.7 + 0.1,
              animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 4 + "s",
            }}
          />
        ))}
      </div>

      {/* Horizon glow */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: "35%",
          background:
            "linear-gradient(to top, rgba(120,60,20,0.35) 0%, rgba(80,30,10,0.15) 40%, transparent 100%)",
        }}
      />

      {/* Ground */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: "18%",
          background:
            "linear-gradient(to top, #0a0a0a 0%, #111008 60%, transparent 100%)",
        }}
      />

      {/* Distant landscape silhouette */}
      <svg
        className="absolute bottom-[17%] left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,120 L0,80 Q60,40 120,70 Q200,100 280,50 Q360,10 440,60 Q520,90 600,45 Q680,10 760,55 Q840,85 920,40 Q1000,5 1080,50 Q1160,85 1240,35 Q1320,0 1380,60 L1440,70 L1440,120 Z"
          fill="#0d0d0d"
          opacity="0.9"
        />
        <path
          d="M0,120 L0,95 Q80,75 160,88 Q240,100 320,80 Q400,65 480,85 Q560,98 640,78 Q720,60 800,82 Q880,96 960,75 Q1040,58 1120,80 Q1200,95 1280,72 Q1360,55 1440,78 L1440,120 Z"
          fill="#111111"
        />
      </svg>

      {/* Figures — soldier + mother walking together */}
      <div
        ref={ref}
        className="absolute bottom-[17%] left-1/2 -translate-x-1/2"
        style={{ transition: "transform 0.3s ease-out" }}
      >
        <svg
          viewBox="0 0 260 200"
          width="260"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          {/* === SOLDIER (left) === */}
          <g
            style={{
              animation: "walkSoldier 1.4s ease-in-out infinite",
              transformOrigin: "80px 200px",
            }}
          >
            {/* Head with helmet */}
            <ellipse cx="80" cy="28" rx="12" ry="11" fill="#e8e0d0" />
            <path
              d="M67,25 Q68,14 80,12 Q92,14 93,25 Q92,22 80,21 Q68,22 67,25Z"
              fill="#3a3a2a"
            />
            {/* Neck */}
            <rect x="77" y="37" width="6" height="7" rx="2" fill="#d4c9b5" />
            {/* Torso with uniform */}
            <rect x="65" y="44" width="30" height="42" rx="6" fill="#3a3a2a" />
            {/* Uniform detail */}
            <rect x="72" y="50" width="16" height="2" rx="1" fill="#4a4a3a" />
            <rect x="72" y="56" width="16" height="2" rx="1" fill="#4a4a3a" />
            {/* Backpack */}
            <rect x="88" y="46" width="12" height="28" rx="4" fill="#2a2a1a" />
            <rect x="90" y="52" width="8" height="4" rx="1" fill="#333321" />
            <rect x="90" y="60" width="8" height="4" rx="1" fill="#333321" />
            {/* Left arm (away from mother) */}
            <g
              style={{
                animation: "armSwingLeft 1.4s ease-in-out infinite",
                transformOrigin: "65px 50px",
              }}
            >
              <rect x="52" y="46" width="14" height="8" rx="4" fill="#3a3a2a" />
              <rect x="48" y="52" width="8" height="20" rx="4" fill="#3a3a2a" />
              {/* Hand */}
              <ellipse cx="52" cy="73" rx="5" ry="4" fill="#d4c9b5" />
            </g>
            {/* Right arm (toward mother, linked) */}
            <g
              style={{
                animation: "armSwingRight 1.4s ease-in-out infinite",
                transformOrigin: "95px 50px",
              }}
            >
              <rect x="94" y="46" width="14" height="8" rx="4" fill="#3a3a2a" />
              <rect x="103" y="52" width="8" height="20" rx="4" fill="#3a3a2a" />
              <ellipse cx="107" cy="73" rx="5" ry="4" fill="#d4c9b5" />
            </g>
            {/* Waist / belt */}
            <rect x="65" y="83" width="30" height="5" rx="2" fill="#2a2a1a" />
            <rect x="77" y="83" width="6" height="5" rx="1" fill="#555540" />
            {/* Left leg */}
            <g
              style={{
                animation: "legLeft 1.4s ease-in-out infinite",
                transformOrigin: "75px 88px",
              }}
            >
              <rect x="66" y="88" width="16" height="46" rx="6" fill="#3a3a2a" />
              {/* Boot */}
              <rect x="64" y="128" width="20" height="12" rx="4" fill="#1a1a10" />
              <rect x="62" y="135" width="20" height="6" rx="3" fill="#111108" />
            </g>
            {/* Right leg */}
            <g
              style={{
                animation: "legRight 1.4s ease-in-out infinite",
                transformOrigin: "85px 88px",
              }}
            >
              <rect x="78" y="88" width="16" height="46" rx="6" fill="#3a3a2a" />
              <rect x="76" y="128" width="20" height="12" rx="4" fill="#1a1a10" />
              <rect x="74" y="135" width="20" height="6" rx="3" fill="#111108" />
            </g>
          </g>

          {/* === MOTHER (right, slightly shorter) === */}
          <g
            style={{
              animation: "walkMother 1.4s ease-in-out infinite",
              transformOrigin: "170px 200px",
            }}
          >
            {/* Head */}
            <ellipse cx="170" cy="40" rx="11" ry="12" fill="#f0e8d8" />
            {/* Headscarf */}
            <path
              d="M159,38 Q160,26 170,24 Q180,26 181,38 Q178,32 170,31 Q162,32 159,38Z"
              fill="#8b4a4a"
            />
            <path
              d="M159,38 Q157,42 160,46 L162,44 Q160,42 161,39Z"
              fill="#8b4a4a"
            />
            {/* Neck */}
            <rect x="167" y="50" width="6" height="6" rx="2" fill="#e8dcc8" />
            {/* Torso with dress/coat */}
            <path
              d="M155,56 Q155,50 162,56 L178,56 Q185,50 185,56 L187,94 Q187,98 183,98 L157,98 Q153,98 153,94 Z"
              fill="#6b5555"
            />
            {/* Coat lapels */}
            <path d="M170,56 L165,70 L170,66Z" fill="#5a4444" />
            <path d="M170,56 L175,70 L170,66Z" fill="#5a4444" />
            {/* Buttons */}
            <circle cx="170" cy="72" r="2" fill="#4a3333" />
            <circle cx="170" cy="80" r="2" fill="#4a3333" />
            <circle cx="170" cy="88" r="2" fill="#4a3333" />
            {/* Left arm (linked with soldier) */}
            <g
              style={{
                animation: "armSwingRight 1.4s ease-in-out infinite",
                transformOrigin: "155px 60px",
              }}
            >
              <rect x="142" y="58" width="14" height="7" rx="4" fill="#6b5555" />
              <rect x="140" y="63" width="8" height="18" rx="4" fill="#6b5555" />
              <ellipse cx="144" cy="82" rx="5" ry="4" fill="#e8dcc8" />
            </g>
            {/* Right arm */}
            <g
              style={{
                animation: "armSwingLeft 1.4s ease-in-out infinite",
                transformOrigin: "185px 60px",
              }}
            >
              <rect x="184" y="58" width="14" height="7" rx="4" fill="#6b5555" />
              <rect x="190" y="63" width="8" height="18" rx="4" fill="#6b5555" />
              <ellipse cx="194" cy="82" rx="5" ry="4" fill="#e8dcc8" />
            </g>
            {/* Skirt */}
            <path
              d="M153,94 Q150,110 148,150 L192,150 Q190,110 187,94Z"
              fill="#5a4444"
            />
            {/* Left leg */}
            <g
              style={{
                animation: "legRight 1.4s ease-in-out infinite",
                transformOrigin: "163px 150px",
              }}
            >
              <rect x="155" y="148" width="14" height="36" rx="5" fill="#3a2a2a" />
              {/* Shoe */}
              <ellipse cx="162" cy="186" rx="9" ry="5" fill="#1a0a0a" />
            </g>
            {/* Right leg */}
            <g
              style={{
                animation: "legLeft 1.4s ease-in-out infinite",
                transformOrigin: "177px 150px",
              }}
            >
              <rect x="170" y="148" width="14" height="36" rx="5" fill="#3a2a2a" />
              <ellipse cx="177" cy="186" rx="9" ry="5" fill="#1a0a0a" />
            </g>
          </g>

          {/* Linked arms connection (handhold) */}
          <path
            d="M107,73 Q127,78 144,82"
            stroke="#d4c9b5"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            style={{ animation: "armLink 1.4s ease-in-out infinite" }}
          />
        </svg>
      </div>

      {/* Soft ground shadow under figures */}
      <div
        className="absolute bottom-[15%] left-1/2 -translate-x-1/2"
        style={{
          width: "280px",
          height: "20px",
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.9; }
        }
        @keyframes walkSoldier {
          0%, 100% { transform: translateY(0px) rotate(-0.5deg); }
          50% { transform: translateY(-3px) rotate(0.5deg); }
        }
        @keyframes walkMother {
          0%, 100% { transform: translateY(0px) rotate(0.5deg); }
          50% { transform: translateY(-3px) rotate(-0.5deg); }
        }
        @keyframes legLeft {
          0%, 100% { transform: rotate(-12deg); }
          50% { transform: rotate(12deg); }
        }
        @keyframes legRight {
          0%, 100% { transform: rotate(12deg); }
          50% { transform: rotate(-12deg); }
        }
        @keyframes armSwingLeft {
          0%, 100% { transform: rotate(10deg); }
          50% { transform: rotate(-10deg); }
        }
        @keyframes armSwingRight {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        @keyframes armLink {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
