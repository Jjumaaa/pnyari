const backgrounds = {
  white: "bg-white",
  light: "bg-alabaster",
  dark: "bg-sanctuary-blue text-white",
};

export default function Section({
  children,
  background = "white",
  id,
  className = "",
  labelledBy,
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${backgrounds[background]} py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
