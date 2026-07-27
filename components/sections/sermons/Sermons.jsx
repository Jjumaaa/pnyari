import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import SermonFilters from "./SermonFilters";
import SermonCard from "./SermonCard";

export default function Sermons() {
  return (
    <Section background="light">
      <div id="sermons">
        <SectionHeading
          eyebrow="Sermons"
          title="Recent Sermons"
          description="Watch, listen to, and revisit messages from our church services."
        />

        <SermonFilters />
        <SermonCard />
      </div>
    </Section>
  );
}