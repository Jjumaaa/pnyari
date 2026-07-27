import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import MinistryTabs from "./MinistryTabs";

export default function Ministries() {
  return (
    <Section background="white">
      <div id="ministries">
        <SectionHeading
          eyebrow="Ministries"
          title="Our Ministries"
          description="Find a place where you can grow, serve, and belong."
        />

        <MinistryTabs />
      </div>
    </Section>
  );
}