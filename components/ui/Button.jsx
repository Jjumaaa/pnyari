export default function Button({
  children,
  href,
  variant = "primary",
}) {

  const styles = {
    primary:
      "bg-[var(--color-ember-crimson)] text-white hover:bg-red-900",

    secondary:
      "border border-white text-white hover:bg-white hover:text-[var(--color-sanctuary-blue)]",
  };


  return (
    <a
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-8
        py-3
        font-semibold
        transition
        duration-300
        ${styles[variant]}
      `}
    >
      {children}
    </a>
  );
}