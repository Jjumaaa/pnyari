"use client";

export default function Error({ reset }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-alabaster px-4 text-center">
      <h1 className="text-3xl font-bold text-sanctuary-blue">Something went wrong</h1>
      <p className="mt-4 max-w-md">Sorry — this page failed to load. Please try again.</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 rounded-full bg-sanctuary-blue px-6 py-3 font-semibold text-white hover:bg-sanctuary-deep"
      >
        Try again
      </button>
    </main>
  );
}
