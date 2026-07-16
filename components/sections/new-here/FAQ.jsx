import { faqs } from "@/data/newHere";

export default function FAQ() {
  return (
    <div className="mt-16">

      <h3 className="mb-8 text-3xl font-bold text-[var(--color-sanctuary-blue)]">
        Frequently Asked Questions
      </h3>


      <div className="space-y-4">

        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-lg border border-[var(--color-brushed-gold)] bg-white p-5"
          >

            <summary className="cursor-pointer font-semibold text-[var(--color-sanctuary-blue)]">
              {faq.question}
            </summary>


            <p className="mt-4 text-[var(--color-charcoal-slate)]">
              {faq.answer}
            </p>

          </details>
        ))}

      </div>

    </div>
  );
}