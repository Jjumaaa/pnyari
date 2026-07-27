import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
}) {

  const styles = {
    primary:
      "bg-[var(--color-brushed-gold)] text-[var(--color-sanctuary-blue)] hover:opacity-90",

    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-[var(--color-sanctuary-blue)]",

    crimson:
      "bg-[var(--color-ember-crimson)] text-white hover:opacity-90",
  };


  const className = `
    rounded-md
    px-8
    py-4
    font-semibold
    transition
    ${styles[variant]}
  `;


  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }


  return (
    <Link
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
}