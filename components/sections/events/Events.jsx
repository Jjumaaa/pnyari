import Calendar from "./Calendar";
import EventCard from "./EventCard";

export default function Events() {
  return (
    <section>
      <h2>Upcoming Events</h2>

      <p>
        Join us for upcoming church gatherings,
        activities, and special services.
      </p>

      <Calendar />

      <EventCard />
    </section>
  );
}