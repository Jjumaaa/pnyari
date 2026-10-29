import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { church } from "@/data/church";

export default function ChurchStory() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <h3 className="text-3xl font-bold text-sanctuary-blue md:text-4xl">Our Story</h3>

        <p className="mt-5 text-lg leading-relaxed">
          {church.name} is a congregation of the {church.denomination}, a
          Christ-centered community committed to sharing God&apos;s love, growing
          in faith, and serving the people around us.
        </p>

        <p className="mt-4 leading-relaxed">
          Through worship, discipleship, and fellowship, we continue building a
          church where every person is{" "}
          <strong className="text-sanctuary-blue">
            {church.motto.slice(0, -1).join(", ").toLowerCase()}, and{" "}
            {church.motto.at(-1).toLowerCase()}
          </strong>
          .
        </p>

        <blockquote className="mt-8 border-l-4 border-brushed-gold pl-5 font-[family-name:var(--font-heading)] text-xl italic text-sanctuary-blue">
          {church.motto.join(". ")}.
        </blockquote>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative mx-auto max-w-md pb-16 sm:pb-24">
          <figure className="relative z-10 w-[78%] -rotate-2 rounded-xl bg-white p-2.5 shadow-xl">
            <Image
              src="/images/hero/hero-1.jpg"
              alt="The PCEA Nyari Church building"
              width={243}
              height={174}
              sizes="(min-width: 640px) 350px, 78vw"
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
          </figure>
          <figure className="absolute bottom-0 right-0 z-20 w-[62%] rotate-3 rounded-xl bg-white p-2.5 shadow-2xl">
            <Image
              src="/images/about/old.jpg"
              alt="Interior of the old Nyari Church sanctuary with wooden pews and a red carpet aisle"
              width={243}
              height={174}
              sizes="(min-width: 640px) 280px, 62vw"
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
            <figcaption className="px-1 pt-2 text-center text-xs text-charcoal-slate/80">
              The old Nyari Church — a place of worship for many years
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </div>
  );
}
