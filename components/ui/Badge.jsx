export default function Badge({ children }) {
  return (
    <span
      className="
        inline-block
        rounded-full
        bg-[var(--color-brushed-gold)]/15
        px-4
        py-1
        text-sm
        font-semibold
        tracking-wide
        text-[var(--color-sanctuary-blue)]
      "
    >
      {children}
    </span>
  );
}