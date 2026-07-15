import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[var(--color-sanctuary-blue)] text-white">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-brushed-gold)]">
          Welcome Home
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Welcome to PCEA Nyari Church
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
          A Christ-centered church where everyone is welcomed, accepted,
          loved, and shepherded as we grow together in faith.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#services"
            className="rounded-md bg-[var(--color-brushed-gold)] px-8 py-4 font-semibold text-[var(--color-sanctuary-blue)] transition hover:opacity-90"
          >
            Join Us This Sunday
          </Link>

          <Link
            href="#new-here"
            className="rounded-md border-2 border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-[var(--color-sanctuary-blue)]"
          >
            I'm New Here
          </Link>
        </div>
      </div>
    </section>
  );
}