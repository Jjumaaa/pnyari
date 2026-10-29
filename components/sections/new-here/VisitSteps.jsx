import Card from "@/components/ui/Card";
import { visitSteps } from "@/data/newHere";

export default function VisitSteps() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {visitSteps.map((step, i) => (
        <li key={step.number}>
          <Card delay={i * 0.08} className="relative overflow-hidden">
            <span
              aria-hidden="true"
              className="absolute -right-2 -top-6 font-[family-name:var(--font-heading)] text-8xl font-bold text-sanctuary-blue/5"
            >
              {step.number}
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sanctuary-blue font-bold text-brushed-gold">
              <span className="sr-only">Step </span>
              {step.number}
            </span>
            <h3 className="mt-5 text-xl font-bold text-sanctuary-blue">{step.title}</h3>
            <p className="mt-2 leading-relaxed">{step.text}</p>
          </Card>
        </li>
      ))}
    </ol>
  );
}
