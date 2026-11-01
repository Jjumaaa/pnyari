import Divider from "@/components/ui/Divider";

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
}) {
  const dark = tone === "dark";
  const centered = align === "center";

  return (
    <div className={`mb-12 max-w-3xl md:mb-16 ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.25em] ${
            dark ? "text-brushed-gold" : "text-gold-deep"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        id={id}
        className={`text-3xl font-bold sm:text-4xl md:text-5xl ${
          dark ? "text-white" : "text-sanctuary-blue"
        }`}
      >
        {title}
      </h2>

      <div className="my-6">
        <Divider centered={centered} />
      </div>

      {description && (
        <p
          className={`text-lg leading-relaxed ${
            dark ? "text-white/80" : "text-charcoal-slate"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
