import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[85vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/hero/hero-1.jpg')",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 text-center text-white">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-brushed-gold)]">
          Welcome Home
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Welcome to PCEA Nyari Church
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
          A Christ-centered church where everyone is welcomed,
          accepted, loved, and shepherded.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#services">
            Join Us This Sunday
            </Button>

          <Button href="#new-here" variant="secondary">
                I'm New Here
                </Button>
        </div>
      </div>
    </section>
  );
}