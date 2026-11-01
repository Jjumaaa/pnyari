import Icon from "@/components/ui/Icon";
import { beliefs } from "@/data/beliefs";

export default function Beliefs() {
  return (
    <div className="mx-auto mt-16 max-w-3xl md:mt-24">
      <h3 className="mb-2 text-center text-3xl font-bold text-sanctuary-blue">
        What We Believe
      </h3>
      <p className="mb-8 text-center">
        As a Presbyterian church, we hold to the historic Christian faith.
      </p>

      <div className="space-y-3">
        {beliefs.map((belief) => (
          <details
            key={belief.title}
            className="group rounded-xl border border-brushed-gold/40 bg-white open:shadow-md"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-5 font-semibold text-sanctuary-blue [&::-webkit-details-marker]:hidden">
              {belief.title}
              <Icon
                name="chevronDown"
                className="h-5 w-5 shrink-0 text-gold-deep transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="px-5 pb-5 leading-relaxed">{belief.content}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
