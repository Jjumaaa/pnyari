export default function Section({
  children,
  background = "white",
  id,
}) {
  const backgrounds = {
    white: "bg-white",
    light: "bg-[var(--color-alabaster)]",
    dark: "bg-[var(--color-sanctuary-blue)]",
  };

  return (
    <section
      id={id}
      className={`
        ${backgrounds[background]}
        py-16
        md:py-24
      `}
    >
      <div className="mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}