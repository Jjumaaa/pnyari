import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import AboutCards from "./AboutCards";
import ChurchStory from "./ChurchStory";
import Beliefs from "./Beliefs";

export default function About() {
  return (
    <Section background="light">
      <div id="about">
        <SectionHeading
          eyebrow="About"
          title="About Our Church"
          description="Discover who we are and what we believe."
        />

        <AboutCards />
        <ChurchStory />
        <Beliefs />
      </div>
    </Section>
  );
}