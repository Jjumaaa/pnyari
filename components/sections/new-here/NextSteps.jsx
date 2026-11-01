import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { nextSteps } from "@/data/newHere";

export default function NextSteps() {
  return (
    <div className="mt-16">
      <h3 className="mb-8 text-center text-3xl font-bold text-sanctuary-blue">
        Ready for a Next Step?
      </h3>

      <div className="grid gap-6 md:grid-cols-3">
        {nextSteps.map((step, i) => (
          <Card key={step.title} delay={i * 0.08} interactive className="relative text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brushed-gold/15 text-sanctuary-blue">
              <Icon name={step.icon} className="h-7 w-7" />
            </span>
            <h4 className="mt-4 text-xl font-bold text-sanctuary-blue">{step.title}</h4>
            <p className="mt-2 leading-relaxed">{step.text}</p>
            {/* The stretched link makes the whole card clickable. */}
            <a
              href={step.href}
              className="mt-5 inline-flex items-center gap-1 font-semibold text-ember-crimson after:absolute after:inset-0 after:rounded-2xl"
            >
              {step.cta}
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
