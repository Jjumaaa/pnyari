export default function Divider({
  width = "w-24",
  centered = true,
}) {
  return (
    <div
      className={`
        h-px
        ${width}
        bg-[var(--color-brushed-gold)]
        ${centered ? "mx-auto" : ""}
      `}
    />
  );
}