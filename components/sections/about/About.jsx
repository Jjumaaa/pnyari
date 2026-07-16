import AboutCards from "./AboutCards";
import ChurchStory from "./ChurchStory";
import Beliefs from "./Beliefs";

export default function About() {
  return (
    <section background="light"
      id="about"
      className="bg-[var(--color-alabaster)] py-20"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <h2 className="text-4xl font-bold text-[var(--color-sanctuary-blue)]">
            About Our Church
          </h2>

          <p className="mt-4 text-[var(--color-charcoal-slate)]">
            Discover who we are and what we believe
          </p>

        </div>


        <AboutCards />

        <ChurchStory />

        <Beliefs />

      </div>

    </section>
  );
}