import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { sundayServices, church, mapsDirectionsUrl } from "@/data/church";
import { worshipElements, otherGatherings } from "@/data/services";

export default function ServiceCards() {
  const gatherings = otherGatherings.filter((g) => g.verified);

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <Reveal className="lg:col-span-2">
        <div className="relative h-full overflow-hidden rounded-3xl bg-sanctuary-blue p-8 text-white shadow-xl sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[28px] border-brushed-gold/10"
          />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brushed-gold">
            Every Sunday
          </p>

          <ul className="mt-6 space-y-5">
            {sundayServices.map((service) => (
              <li key={service.time} className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-5">
                <span className="text-lg text-white/85">{service.label}</span>
                <span className="font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
                  {service.time}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 flex items-start gap-2 text-white/85">
            <Icon name="mapPin" className="mt-0.5 h-5 w-5 shrink-0 text-brushed-gold" />
            {church.address.street}, {church.address.city}
          </p>

          {gatherings.length > 0 && (
            <div className="mt-6 rounded-2xl bg-white/5 p-4 text-sm text-white/85">
              {gatherings.map((g) => (
                <p key={g.title}>
                  <strong className="text-white">{g.title}:</strong>{" "}
                  {g.time ?? "contact the church office for the current day and time."}
                </p>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={mapsDirectionsUrl} external icon="navigation" size="sm">
              Get Directions
            </Button>
            <Button href="#new-here" variant="secondary" size="sm">
              Plan Your Visit
            </Button>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
        {worshipElements.map((item, i) => (
          <Card key={item.title} delay={i * 0.08} className="bg-alabaster">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ember-crimson shadow-sm">
              <Icon name={item.icon} />
            </span>
            <h3 className="mt-5 text-xl font-bold text-sanctuary-blue">{item.title}</h3>
            <p className="mt-2 leading-relaxed">{item.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
