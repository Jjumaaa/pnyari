import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import events from "@/data/events";

import EventCard from "./EventCard";


export default function Events() {
  return (
    <Section
      background="light"
      id="events"
    >

      <SectionHeading
        eyebrow="Events"
        title="Upcoming Events"
        description="Stay connected with what's happening at PCEA Nyari Church."
      />


      <div
        className="
        grid
        gap-8
        md:grid-cols-2
        lg:grid-cols-3
        "
      >

        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}

      </div>

    </Section>
  );
}