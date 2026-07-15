import { beliefs } from "@/data/beliefs";

export default function Beliefs() {
  return (
    <div className="mt-20">

      <h3 className="mb-8 text-3xl font-bold text-[var(--color-sanctuary-blue)]">
        Our Core Beliefs
      </h3>


      <div className="space-y-4">

        {beliefs.map((belief) => (
          <details
            key={belief.title}
            className="rounded-lg border border-[var(--color-brushed-gold)] bg-white p-5"
          >

            <summary className="cursor-pointer font-semibold text-[var(--color-sanctuary-blue)]">
              {belief.title}
            </summary>


            <p className="mt-4 text-[var(--color-charcoal-slate)]">
              {belief.content}
            </p>

          </details>
        ))}

      </div>

    </div>
  );
}