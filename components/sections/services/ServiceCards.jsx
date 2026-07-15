import { services } from "@/data/services";

export default function ServiceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">

      {services.map((service) => (
        <div
          key={service.title}
          className="rounded-lg bg-white p-8 shadow-sm"
        >

          <div className="text-4xl">
            {service.icon}
          </div>


          <h3 className="mt-5 text-xl font-bold text-[var(--color-sanctuary-blue)]">
            {service.title}
          </h3>


          <p className="mt-3 font-semibold text-[var(--color-ember-crimson)]">
            {service.time}
          </p>


          <p className="mt-3 text-[var(--color-charcoal-slate)]">
            {service.description}
          </p>

        </div>
      ))}

    </div>
  );
}