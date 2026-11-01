import Link from "next/link";
import Icon from "./Icon";

const styles = {
  primary:
    "bg-brushed-gold text-sanctuary-deep hover:bg-[#d4b273] shadow-lg shadow-black/10",
  secondary:
    "border-2 border-white/80 text-white hover:bg-white hover:text-sanctuary-blue",
  crimson:
    "bg-ember-crimson text-white hover:bg-[#b42222] shadow-lg shadow-ember-crimson/20",
  blue: "bg-sanctuary-blue text-white hover:bg-sanctuary-deep",
  outline:
    "border-2 border-sanctuary-blue text-sanctuary-blue hover:bg-sanctuary-blue hover:text-white",
  whatsapp: "bg-[#0E7A35] text-white hover:bg-[#0B652B] shadow-lg shadow-black/10",
};

const sizes = {
  md: "px-6 py-3 text-base",
  sm: "px-4 py-2 text-sm",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  icon,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 ${sizes[size]} ${styles[variant]} ${className}`;

  const content = (
    <>
      {icon && <Icon name={icon} className="h-5 w-5 shrink-0" />}
      <span>{children}</span>
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Plain anchors for in-page hashes, tel: and mailto: links.
  if (href.startsWith("#") || /^(tel|mailto):/.test(href)) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
