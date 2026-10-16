import Divider from "@/components/ui/Divider";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:mb-16">
      {eyebrow && (
        <p className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-ember-crimson)] sm:text-sm">
          <span aria-hidden="true" className="h-px w-6 bg-[var(--color-brushed-gold)]" />
          {eyebrow}
          <span aria-hidden="true" className="h-px w-6 bg-[var(--color-brushed-gold)]" />
        </p>
      )}

      <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--color-sanctuary-blue)] sm:text-4xl md:text-5xl">
        {title}
      </h2>

      <div className="mx-auto my-5 max-w-28 sm:my-6">
        <Divider />
      </div>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-charcoal-slate)]/85 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
