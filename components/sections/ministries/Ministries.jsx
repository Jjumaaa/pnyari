import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ministries from "@/data/ministries";

import MinistryCard from "./MinistryCard";

export default function Ministries() {
  return (
    <Section background="light" id="ministries">
      <SectionHeading
        eyebrow="Ministries"
        title="Our Ministries"
        description="Find a place where you can grow, serve, and belong."
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
        {ministries.map((ministry) => (
          <MinistryCard
            key={ministry.id}
            ministry={ministry}
          />
        ))}
      </div>
    </Section>
  );
}