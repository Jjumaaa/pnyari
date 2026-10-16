import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import fallbackSermons from "@/data/sermons";
import { getRecentSermons } from "@/lib/sermons";

import SermonCard from "./SermonCard";

export default async function Sermons() {
  const recentUploads = await getRecentSermons();
  const sermons = recentUploads ?? fallbackSermons;

  return (
    <Section background="white" id="sermons">
      <SectionHeading
        eyebrow="Sermons"
        title="Recent Sermons"
        description="Watch the latest videos from the PCEA Nyari Church YouTube channel."
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
