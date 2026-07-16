export default function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">

      {eyebrow && (
        <p
          className="
          mb-4
          text-sm
          font-semibold
          uppercase
          tracking-[0.3em]
          text-[var(--color-brushed-gold)]
          "
        >
          {eyebrow}
        </p>
      )}


      <h2
        className="
        text-4xl
        font-bold
        text-[var(--color-sanctuary-blue)]
        md:text-5xl
        "
      >
        {title}
      </h2>


      {description && (
        <p
          className="
          mt-5
          text-lg
          leading-relaxed
          text-[var(--color-charcoal-slate)]
          "
        >
          {description}
        </p>
      )}

    </div>
  );
}