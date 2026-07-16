import { nextSteps } from "@/data/newHere";

export default function NextSteps() {
  return (
    <div className="mt-16">

      <h3 className="mb-8 text-center text-3xl font-bold text-[var(--color-sanctuary-blue)]">
        Ready to Take the Next Step?
      </h3>


      <div className="grid gap-6 md:grid-cols-3">

        {nextSteps.map((step) => (
          <div
            key={step.title}
            className="rounded-lg bg-white p-8 text-center shadow-sm"
          >

            <div className="text-4xl">
              {step.icon}
            </div>


            <h4 className="mt-4 font-bold text-[var(--color-sanctuary-blue)]">
              {step.title}
            </h4>


            <p className="mt-3 text-[var(--color-charcoal-slate)]">
              {step.text}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}