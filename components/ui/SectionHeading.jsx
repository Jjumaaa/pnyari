export default function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 uppercase tracking-[0.25em] text-sm font-semibold text-[var(--color-brushed-gold)]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold text-[var(--color-sanctuary-blue)]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}
