export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Звезда-память */}
      <path
        d="M20 4L22.5 14H33L24.5 20L27.5 30L20 24L12.5 30L15.5 20L7 14H17.5L20 4Z"
        fill="white"
      />
      {/* Текст: ФОНД ПАМЯТИ */}
      <text
        x="42"
        y="27"
        fontFamily="monospace"
        fontSize="14"
        fontWeight="600"
        letterSpacing="2"
        fill="white"
      >
        ФОНД ПАМЯТИ
      </text>
    </svg>
  );
};
