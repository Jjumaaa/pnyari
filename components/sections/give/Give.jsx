import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { givingMethods } from "@/data/giving";
import { church, whatsappLink } from "@/data/church";

export default function Give() {
  return (
    <Section background="white" id="give" labelledBy="give-title">
      <SectionHeading
        id="give-title"
        eyebrow="Giving"
        title="Give With a Cheerful Heart"
        description="Your generosity supports worship, ministry programs, outreach, and care for our community."
      />

      <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
        <Reveal className="h-full">
          <figure className="flex h-full flex-col justify-center rounded-3xl bg-sanctuary-blue p-8 text-white sm:p-10">
            <Icon name="gift" className="h-10 w-10 text-brushed-gold" />
            <blockquote className="mt-6 font-[family-name:var(--font-heading)] text-2xl italic leading-relaxed sm:text-3xl">
              “Every man according as he purposeth in his heart, so let him give;
              not grudgingly, or of necessity: for God loveth a cheerful giver.”
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-brushed-gold">
              2 Corinthians 9:7 (KJV)
            </figcaption>
          </figure>
        </Reveal>

        {givingMethods.length > 0 ? (
          <div className="grid gap-6">
            {givingMethods.map((method) => (
              <Card key={method.title}>
                <h3 className="flex items-center gap-3 text-2xl font-bold text-sanctuary-blue">
                  <Icon name={method.icon ?? "gift"} className="h-6 w-6 text-ember-crimson" />
                  {method.title}
                </h3>
                <dl className="mt-4 space-y-2">
                  {method.details.map((d) => (
                    <div key={d.label} className="flex flex-wrap justify-between gap-2 rounded-xl bg-alabaster px-4 py-3">
                      <dt className="font-medium">{d.label}</dt>
                      <dd className="font-mono text-lg font-bold text-sanctuary-blue">{d.value}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-sanctuary-blue">How to Give</h3>
            <p className="mt-3 leading-relaxed">
              Official online giving details will be published on this page once
              confirmed by the church. Until then, please contact the church office
              and we will share the correct way to give.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={whatsappLink("Hello PCEA Nyari Church, I would like to give. Please share the official giving details.")}
                external
                variant="whatsapp"
                icon="whatsapp"
                size="sm"
              >
                Ask on WhatsApp
              </Button>
              <Button href={church.phone.href} variant="outline" icon="phone" size="sm">
                Call {church.phone.display}
              </Button>
            </div>

            <p className="mt-6 flex gap-3 rounded-2xl bg-ember-crimson/5 p-4 text-sm leading-relaxed">
              <Icon name="shield" className="h-5 w-5 shrink-0 text-ember-crimson" />
              <span>
                <strong className="text-ember-crimson">Stay safe:</strong> only use
                payment details listed on this page or given to you directly by the
                church office. Be cautious of payment requests from unknown numbers.
              </span>
            </p>
          </Card>
        )}
      </div>
    </Section>
  );
}
