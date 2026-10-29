import Reveal from "./Reveal";

export default function Card({
  children,
  className = "",
  interactive = false,
  delay = 0,
  ...props
}) {
  const hover = interactive
    ? "transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sanctuary-blue/10"
    : "";

  return (
    <Reveal delay={delay} className="h-full">
      <div
        {...props}
        className={`h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8 ${hover} ${className}`.trim()}
      >
        {children}
      </div>
    </Reveal>
  );
}
