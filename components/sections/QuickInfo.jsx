import Icon from "@/components/ui/Icon";
import { church, sundayServices, mapsDirectionsUrl } from "@/data/church";

export default function QuickInfo() {
  return (
    <section aria-label="Service times and location" className="relative z-10 -mt-24 px-4 sm:px-6 lg:px-8 md:-mt-28">
      <div className="mx-auto grid max-w-6xl gap-4 overflow-hidden rounded-3xl bg-white p-3 shadow-2xl shadow-sanctuary-deep/20 sm:p-4 md:grid-cols-3">
        <InfoItem icon="clock" title="Sunday Worship">
          {sundayServices.map((s) => (
            <span key={s.time} className="block">
              {s.label}: <strong className="text-sanctuary-blue">{s.time}</strong>
            </span>
          ))}
        </InfoItem>

        <InfoItem icon="mapPin" title="Location">
          <span className="block">
            {church.address.street}, {church.address.city}
          </span>
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 font-semibold text-ember-crimson underline-offset-4 hover:underline"
          >
            Get directions
            <Icon name="external" className="h-4 w-4" />
            <span className="sr-only">(opens Google Maps in a new tab)</span>
          </a>
        </InfoItem>

        <InfoItem icon="heart" title="First Time?">
          <span className="block">Come as you are — you&apos;re welcome here.</span>
          <a
            href="#new-here"
            className="mt-1 inline-flex items-center gap-1 font-semibold text-ember-crimson underline-offset-4 hover:underline"
          >
            What to expect
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </InfoItem>
      </div>
    </section>
  );
}

function InfoItem({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-alabaster p-5 sm:p-6">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sanctuary-blue text-brushed-gold">
        <Icon name={icon} />
      </span>
      <div className="min-w-0 text-sm leading-relaxed sm:text-base">
        <h2 className="mb-1 text-lg font-bold text-sanctuary-blue">{title}</h2>
        {children}
      </div>
    </div>
  );
}
