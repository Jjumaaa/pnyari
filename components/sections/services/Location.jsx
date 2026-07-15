export default function Location() {
  return (
    <div className="mt-16 grid gap-10 md:grid-cols-2">

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.18709105903!2d36.7981685!3d-1.2641556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e7c8b9e6a5%3A0x7c8b9e6a5c8b9e6a5!2sPCEA%20Nyari%20Church!5e0!3m2!1sen!2ske!4v1697040000000"
          className="h-[350px] w-full rounded-lg"
          loading="lazy"
          title="PCEA Nyari Church Location"
        />
      </div>


      <div>

        <h3 className="text-2xl font-bold text-[var(--color-sanctuary-blue)]">
          Our Location
        </h3>


        <div className="mt-5 space-y-4 text-[var(--color-charcoal-slate)]">

          <p>
            📍 Red Hill Link Rd<br />
            Nairobi, Kenya
          </p>

          <p>
            ☎️ 0706465469
          </p>

          <p>
            ✉️ info@nyari.org
          </p>

        </div>


        <h4 className="mt-8 font-bold text-[var(--color-sanctuary-blue)]">
          Parking Information
        </h4>

        <p className="mt-2 text-[var(--color-charcoal-slate)]">
          Parking availability details will be updated with
          official church information.
        </p>


      </div>

    </div>
  );
}