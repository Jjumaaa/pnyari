import { churchInfo } from "@/data/churchInfo";

const icons = {
  clock: "🕒",
  location: "📍",
  church: "⛪",
};

export default function QuickInfo() {
  return (
    <section className="bg-[var(--color-alabaster)] py-8">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">

        {churchInfo.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm"
          >

            <div className="text-3xl">
              {icons[item.icon]}
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-sanctuary-blue)]">
                {item.title}
              </h3>

              <p className="mt-1 text-[var(--color-charcoal-slate)]">
                {item.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}