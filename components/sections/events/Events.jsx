import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import allEvents from "@/data/events";
import { whatsappLink } from "@/data/church";
import { formatDate, todayInNairobi } from "@/lib/format";
import EventCard from "./EventCard";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export default function Events() {
  const today = todayInNairobi();
  const dated = allEvents.filter((e) => e.verified && ISO_DATE.test(e.date ?? ""));

  const upcoming = dated
    .filter((e) => (e.endDate ?? e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = dated
    .filter((e) => (e.endDate ?? e.date) < today)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <Section background="light" id="events" labelledBy="events-title">
      <SectionHeading
        id="events-title"
        eyebrow="Events & Announcements"
        title="What's Happening"
        description="Stay connected with life at PCEA Nyari Church."
      />

      {upcoming.length > 0 ? (
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {upcoming.map((event, i) => (
            <li key={event.id}>
              <EventCard event={event} delay={(i % 3) * 0.08} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mx-auto max-w-2xl rounded-3xl border-2 border-dashed border-sanctuary-blue/15 bg-white p-8 text-center sm:p-10">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brushed-gold/15 text-sanctuary-blue">
            <Icon name="calendar" className="h-7 w-7" />
          </span>
          <h3 className="mt-5 text-2xl font-bold text-sanctuary-blue">
            No upcoming events announced yet
          </h3>
          <p className="mt-3 leading-relaxed">
            New events and announcements are shared during Sunday services and will
            be posted here. In the meantime, message us to hear what&apos;s coming up.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              href={whatsappLink("Hello PCEA Nyari Church, I'd like to know about upcoming church events.")}
              external
              variant="whatsapp"
              icon="whatsapp"
              size="sm"
            >
              Ask About Upcoming Events
            </Button>
          </div>
        </div>
      )}

      {past.length > 0 && (
        <div className="mx-auto mt-14 max-w-3xl">
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-gold-deep">
            Recent Past Events
          </h3>
          <ul className="divide-y divide-black/5 overflow-hidden rounded-2xl bg-white shadow-sm">
            {past.map((event) => (
              <li key={event.id} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <span className="font-semibold text-sanctuary-blue">{event.title}</span>
                <span className="text-sm text-charcoal-slate/80">
                  <time dateTime={event.date}>{formatDate(event.date)}</time>
                  {event.location && ` · ${event.location}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
