import { churchInfo } from "@/data/churchInfo";

const icons = {
  clock: "◷",
  location: "⌖",
  church: "✦",
};

export default function QuickInfo() {
  return (
    <section
      id="quick-info"
      aria-label="Church information"
      className="relative z-10 bg-[var(--color-alabaster)] px-4 py-8 sm:px-6 sm:py-10"
    >
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {churchInfo.map((item) => (
          <article
            key={item.title}
            className="group flex min-w-0 items-start gap-4 rounded-xl border border-[var(--color-sanctuary-blue)]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-brushed-gold)]/70 hover:shadow-lg sm:p-6"
          >
            <span
              aria-hidden="true"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[var(--color-sanctuary-blue)] text-2xl text-[var(--color-brushed-gold)] transition-transform duration-300 group-hover:scale-105"
            >
              {icons[item.icon] ?? "•"}
            </span>
            <div className="min-w-0 pt-0.5">
              <h2 className="font-semibold text-[var(--color-sanctuary-blue)]">
                {item.title}
              </h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--color-charcoal-slate)] sm:text-base">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
