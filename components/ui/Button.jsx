import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-[var(--color-brushed-gold)] text-[var(--color-sanctuary-blue)] hover:opacity-90",

    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-[var(--color-sanctuary-blue)]",

    crimson:
      "bg-[var(--color-ember-crimson)] text-white hover:opacity-90",
  };

  return (
    <Link
      href={href}
      className={`rounded-md px-8 py-4 font-semibold transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}