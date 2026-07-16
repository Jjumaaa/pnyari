export default function Section({
  children,
  background = "light",
}) {

  const backgrounds = {
    light: "bg-[var(--color-alabaster)]",
    white: "bg-white",
    dark: "bg-[var(--color-sanctuary-blue)]",
  };

  return (
    <section
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