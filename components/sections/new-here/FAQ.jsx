import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/data/newHere";
import { church, sundayServices, mapsDirectionsUrl, whatsappLink } from "@/data/church";

export default function FAQ() {
  return (
    <div className="mt-16 grid gap-10 lg:grid-cols-5 lg:gap-12">
      <div className="lg:col-span-3">
        <h3 className="mb-6 text-3xl font-bold text-sanctuary-blue">
          Questions Visitors Ask
        </h3>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-brushed-gold/40 bg-white open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-5 font-semibold text-sanctuary-blue [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Icon
                  name="chevronDown"
                  className="h-5 w-5 shrink-0 text-gold-deep transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="px-5 pb-5 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <Reveal className="lg:col-span-2">
        <aside
          aria-label="Visitor information"
          className="rounded-3xl border-t-4 border-ember-crimson bg-white p-6 shadow-lg sm:p-8"
        >
          <h3 className="text-2xl font-bold text-sanctuary-blue">Visitor Essentials</h3>

          <dl className="mt-6 space-y-5">
            <div className="flex gap-3">
              <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-ember-crimson" />
              <div>
                <dt className="font-semibold text-sanctuary-blue">Sunday services</dt>
                <dd>{sundayServices.map((s) => s.time).join(" & ")}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Icon name="mapPin" className="mt-0.5 h-5 w-5 shrink-0 text-ember-crimson" />
              <div>
                <dt className="font-semibold text-sanctuary-blue">Address</dt>
                <dd>
                  {church.address.street}, {church.address.city}, {church.address.country}
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-ember-crimson" />
              <div>
                <dt className="font-semibold text-sanctuary-blue">Call us</dt>
                <dd>
                  <a href={church.phone.href} className="underline-offset-4 hover:underline">
                    {church.phone.display}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3">
            <Button href={mapsDirectionsUrl} external variant="blue" icon="navigation">
              Get Directions
            </Button>
            <Button
              href={whatsappLink("Hello PCEA Nyari Church, I'm planning to visit this Sunday and have a question.")}
              external
              variant="whatsapp"
              icon="whatsapp"
            >
              Ask on WhatsApp
            </Button>
          </div>
        </aside>
      </Reveal>
    </div>
  );
}
