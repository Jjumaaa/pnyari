import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-[var(--color-ember-crimson)] text-white hover:bg-red-900",

    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-[var(--color-sanctuary-blue)]",

    crimson:
      "bg-[var(--color-ember-crimson)] text-white hover:bg-red-900",
  };

  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-8
        py-4
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        ${styles[variant]}
      `}
    >
      {children}
    </Link>
  );
}