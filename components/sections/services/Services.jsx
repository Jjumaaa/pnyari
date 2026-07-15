import ServiceCards from "./ServiceCards";
import Location from "./Location";


export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-20"
    >

      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-12 text-center">

          <h2 className="text-4xl font-bold text-[var(--color-sanctuary-blue)]">
            Service Times & Location
          </h2>


          <p className="mt-4 text-[var(--color-charcoal-slate)]">
            Join us for worship and fellowship
          </p>

        </div>


        <ServiceCards />


        <Location />


      </div>

    </section>
  );
}