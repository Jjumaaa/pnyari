import Image from "next/image";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";

export default function MinistryCard({ ministry, delay }) {
  return (
    <Card interactive delay={delay} className="group flex flex-col overflow-hidden p-0!">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sanctuary-blue">
        {ministry.image ? (
          <Image
            src={ministry.image}
            alt={`${ministry.title} at PCEA Nyari Church`}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <MinistryArt icon={ministry.icon} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {ministry.subtitle}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-sanctuary-blue">{ministry.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed">{ministry.description}</p>

        <dl className="mt-6 space-y-2 border-t border-black/5 pt-5 text-sm">
          <div className="flex gap-2">
            <Icon name="calendar" className="h-4 w-4 shrink-0 translate-y-0.5 text-ember-crimson" />
            <dt className="sr-only">Meets</dt>
            <dd>{ministry.meetingTime ?? "Ask the church office for meeting times"}</dd>
          </div>
          {ministry.leader && (
            <div className="flex gap-2">
              <Icon name="users" className="h-4 w-4 shrink-0 translate-y-0.5 text-ember-crimson" />
              <dt className="sr-only">Led by</dt>
              <dd>{ministry.leader}</dd>
            </div>
          )}
        </dl>
      </div>
    </Card>
  );
}

// Branded illustration used until real ministry photos are supplied.
function MinistryArt({ icon }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(197,160,89,0.35),transparent_55%),linear-gradient(135deg,#1A365D,#10233F)]"
    >
      <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
      <span className="absolute h-40 w-40 rounded-full border border-brushed-gold/25 transition-transform duration-500 group-hover:scale-110" />
      <span className="absolute h-56 w-56 rounded-full border border-brushed-gold/10" />
      <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-brushed-gold/15 text-brushed-gold ring-1 ring-brushed-gold/40">
        <Icon name={icon} className="h-10 w-10" />
      </span>
    </div>
  );
}
