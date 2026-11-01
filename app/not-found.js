import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-alabaster px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-deep">404</p>
      <h1 className="mt-3 text-4xl font-bold text-sanctuary-blue">This page could not be found</h1>
      <p className="mt-4 max-w-md">The page you are looking for may have moved. Let&apos;s get you back home.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-sanctuary-blue px-6 py-3 font-semibold text-white hover:bg-sanctuary-deep"
      >
        Back to PCEA Nyari Church
      </Link>
    </main>
  );
}
