import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import Calendar from "./Calendar";
import EventCard from "./EventCard";

export default function Events() {
  return (
    <Section background="white">
      <div id="events">
        <SectionHeading
          eyebrow="Events"
          title="Upcoming Events"
          description="Join us for upcoming church gatherings, activities, and special services."
        />

        <Calendar />
        <EventCard />
      </div>
    </Section>
  );
}