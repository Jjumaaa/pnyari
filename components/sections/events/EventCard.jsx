import Card from "@/components/ui/Card";

export default function EventCard({ event }) {
  return (
    <Card
      className="
      flex
      h-full
      flex-col
      "
    >

      <p
        className="
        text-sm
        font-semibold
        uppercase
        tracking-[0.25em]
        text-[var(--color-brushed-gold)]
        "
      >
        {event.date}
      </p>


      <h3
        className="
        mt-3
        text-2xl
        font-bold
        text-[var(--color-sanctuary-blue)]
        "
      >
        {event.title}
      </h3>


      <div
        className="
        mt-5
        space-y-2
        text-[var(--color-charcoal-slate)]
        "
      >

        <p>
          🕒 {event.time}
        </p>


        <p>
          📍 {event.location}
        </p>

      </div>


      <p
        className="
        mt-5
        flex-1
        leading-relaxed
        text-gray-600
        "
      >
        {event.description}
      </p>

    </Card>
  );
}