import Button from "@/components/ui/Button";

export default function ChurchStory() {
  return (
    <div className="mt-20 grid gap-10 md:grid-cols-2 items-center">

      {/* Text */}
      <div>

        <h3 className="text-3xl font-bold text-[var(--color-sanctuary-blue)]">
          Our Story
        </h3>

        <p className="mt-5 text-[var(--color-charcoal-slate)] leading-relaxed">
          PCEA Nyari Church is a Christ-centered community committed
          to sharing God's love, growing in faith, and serving people
          within our community.
        </p>

        <p className="mt-4 text-[var(--color-charcoal-slate)] leading-relaxed">
          Through worship, discipleship, and fellowship, we continue
          building a church where people are welcomed, accepted,
          loved, and shepherded.
        </p>

        <div className="mt-8">
          <Button href="#history">
            Learn More About Our History
          </Button>
        </div>

      </div>


      {/* Image */}
      <div className="overflow-hidden rounded-lg">

        <img
          src="/images/about/old.jpg"
          alt="PCEA Nyari Church history"
          className="h-full w-full object-cover"
        />

        <p className="mt-3 text-sm text-gray-600">
          Our journey through The Old Nyari Church, a place of worship and community for many years.
        </p>

      </div>

    </div>
  );
}