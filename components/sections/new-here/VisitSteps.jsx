import { visitSteps } from "@/data/newHere";

export default function VisitSteps() {
  return (
    <div className="grid gap-6 md:grid-cols-4">

      {visitSteps.map((step) => (
        <div
          key={step.number}
          className="rounded-lg bg-white p-6 text-center shadow-sm"
        >

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-sanctuary-blue)] text-white font-bold">
            {step.number}
          </div>


          <h3 className="mt-5 font-bold text-[var(--color-sanctuary-blue)]">
            {step.title}
          </h3>


          <p className="mt-3 text-sm text-[var(--color-charcoal-slate)]">
            {step.text}
          </p>

        </div>
      ))}

    </div>
  );
}