import Reveal from "./Reveal";

export default function Card({
  children,
  className = "",
}) {
  return (
    <Reveal>
      <div
        className={`
          rounded-2xl
          bg-white
          p-8
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
          ${className}
        `}
      >
        {children}
      </div>
    </Reveal>
  );
}