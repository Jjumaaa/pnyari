import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import sermons from "@/data/sermons";

import SermonCard from "./SermonCard";

export default function Sermons() {
  return (
    <Section background="white" id="sermons">
      <SectionHeading
        eyebrow="Sermons"
        title="Recent Sermons"
        description="Watch or listen to our latest messages."
      />

      <div
        className="
          mt-12
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {sermons.map((sermon) => (
          <SermonCard
            key={sermon.id}
            sermon={sermon}
          />
        ))}
      </div>
    </Section>
  );
}