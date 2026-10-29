import Image from "next/image";
import Button from "@/components/ui/Button";
import { church } from "@/data/church";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-sanctuary-deep pb-32 pt-28 text-white md:pb-40"
    >
      {/* The available church photo is low resolution, so it is softened and used as atmosphere. */}
      <Image
        src="/images/hero/hero-1.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 scale-110 object-cover object-center opacity-60 blur-[6px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.18),transparent_60%),linear-gradient(to_bottom,rgba(16,35,63,0.75),rgba(26,54,93,0.85)_55%,rgba(16,35,63,0.97))]"
      />

      <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-brushed-gold">
          {church.parish}
        </p>

        <h1
          id="hero-title"
          className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Welcome to <span className="whitespace-nowrap">PCEA Nyari</span> Church
        </h1>

        <p
          aria-label={`Our motto: ${church.motto.join(". ")}.`}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-[family-name:var(--font-heading)] text-lg italic text-brushed-gold sm:text-2xl"
        >
          {church.motto.map((word, i) => (
            <span key={word} aria-hidden="true" className="flex items-center gap-3">
              {i > 0 && <span className="h-1.5 w-1.5 rotate-45 bg-brushed-gold/70" />}
              {word}
            </span>
          ))}
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
          A church family on Red Hill Link Rd, Nairobi. Come worship with us,
          grow in God&apos;s Word, and find a community that will walk with you.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button href="#new-here" icon="mapPin">
            Plan Your Visit
          </Button>
          <Button href="#ministries" variant="secondary" icon="users">
            Explore Ministries
          </Button>
          <Button href="#sermons" variant="secondary" icon="play">
            Watch Sermons
          </Button>
        </div>
      </div>
    </section>
  );
}
