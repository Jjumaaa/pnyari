export default function Divider({ width = "w-24", centered = true }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-2 ${centered ? "justify-center" : ""}`}
    >
      <span className={`h-px ${width} bg-brushed-gold`} />
      <span className="h-1.5 w-1.5 rotate-45 bg-brushed-gold" />
      <span className={`h-px ${width} bg-brushed-gold`} />
    </div>
  );
}
