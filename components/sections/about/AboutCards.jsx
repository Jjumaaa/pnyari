import { aboutCards } from "@/data/about";

export default function AboutCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">

      {aboutCards.map((card) => (
        <div
          key={card.title}
          className="rounded-lg bg-white p-8 text-center shadow-sm"
        >

          <div className="mb-4 text-4xl">
            {card.icon}
          </div>

          <h3 className="mb-3 text-xl font-bold text-[var(--color-sanctuary-blue)]">
            {card.title}
          </h3>

          <p className="text-[var(--color-charcoal-slate)]">
            {card.text}
          </p>

        </div>
      ))}

    </div>
  );
}