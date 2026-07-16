import VisitSteps from "./VisitSteps";
import FAQ from "./FAQ";
import NextSteps from "./NextSteps";


export default function NewHere() {
  return (
    <section background="light"
      id="new-here"
      className="bg-[var(--color-alabaster)] py-20"
    >

      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-12 text-center">

          <h2 className="text-4xl font-bold text-[var(--color-sanctuary-blue)]">
            New Here?
          </h2>

          <p className="mt-4 text-[var(--color-charcoal-slate)]">
            We're glad you're considering visiting PCEA Nyari Church.
          </p>

        </div>


        <VisitSteps />

        <FAQ />

        <NextSteps />


      </div>

    </section>
  );
}