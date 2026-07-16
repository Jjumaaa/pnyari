import SermonFilters from "./SermonFilters";
import SermonCard from "./SermonCard";

export default function Sermons() {
  return (
    <section>
      <h2>Recent Sermons</h2>

      <p>
        Watch, listen to, and revisit messages from our church services.
      </p>

      <SermonFilters />

      <SermonCard />
    </section>
  );
}