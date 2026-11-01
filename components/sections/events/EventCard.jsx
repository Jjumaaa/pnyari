import Image from "next/image";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { formatDate } from "@/lib/format";

export default function EventCard({ event, delay }) {
  const day = formatDate(event.date, { day: "numeric", month: undefined, year: undefined });
  const month = formatDate(event.date, { day: undefined, month: "short", year: undefined });

  return (
    <Card delay={delay} className="flex flex-col overflow-hidden p-0!">
      {event.image && (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start gap-4">
          <time
            dateTime={event.date}
            className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-sanctuary-blue text-white"
          >
            <span className="text-2xl font-bold leading-none">{day}</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-brushed-gold">
              {month}
            </span>
          </time>
          <div className="min-w-0">
            {event.ministry && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                {event.ministry}
              </p>
            )}
            <h3 className="mt-1 text-xl font-bold text-sanctuary-blue">{event.title}</h3>
          </div>
        </div>

        <dl className="mt-5 space-y-2 text-sm">
          {event.time && (
            <div className="flex gap-2">
              <dt className="sr-only">Time</dt>
              <Icon name="clock" className="h-4 w-4 shrink-0 translate-y-0.5 text-ember-crimson" />
              <dd>{event.time}</dd>
            </div>
          )}
          {event.location && (
            <div className="flex gap-2">
              <dt className="sr-only">Location</dt>
              <Icon name="mapPin" className="h-4 w-4 shrink-0 translate-y-0.5 text-ember-crimson" />
              <dd>{event.location}</dd>
            </div>
          )}
        </dl>

        {event.description && (
          <p className="mt-4 flex-1 leading-relaxed">{event.description}</p>
        )}
      </div>
    </Card>
  );
}
