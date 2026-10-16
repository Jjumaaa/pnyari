import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[min(780px,calc(100svh-76px))] scroll-mt-24 items-center justify-center overflow-hidden bg-cover bg-center px-6 py-24 text-center text-white sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(115deg, rgba(26,54,93,0.92) 0%, rgba(26,54,93,0.76) 48%, rgba(26,54,93,0.58) 100%), url('/images/hero/hero-1.jpg')",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(197,160,89,0.2),transparent_48%)]"
      />

      <div className="mx-auto w-full max-w-5xl animate-in fade-in slide-in-from-bottom-3 duration-700">
        <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-brushed-gold)] sm:text-sm">
          <span aria-hidden="true" className="h-px w-8 bg-[var(--color-brushed-gold)]" />
          Welcome Home
          <span aria-hidden="true" className="h-px w-8 bg-[var(--color-brushed-gold)]" />
        </p>

        <h1
          id="hero-title"
          className="mx-auto max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          A place to belong.
          <span className="mt-2 block text-[var(--color-brushed-gold)]">
            A faith to grow.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg md:text-xl">
          Welcome to PCEA Nyari Church — a Christ-centered family where everyone
          is welcomed, accepted, loved, and shepherded.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button href="#services">
            Join Us This Sunday <span aria-hidden="true">→</span>
          </Button>
          <Button href="#new-here" variant="secondary">
            Plan Your Visit
          </Button>
        </div>

        <a
          href="#quick-info"
          className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brushed-gold)]"
        >
          Discover our church
          <span aria-hidden="true" className="text-lg">↓</span>
        </a>
      </div>
    </section>
  );
}
