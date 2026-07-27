import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ServiceCards from "./ServiceCards";
import Location from "./Location";

export default function Services() {
  return (
    <Section background="white">
      <div id="services">
        <SectionHeading
          eyebrow="Services"
          title="Service Times & Location"
          description="Join us for worship and fellowship"
        />

        <ServiceCards />
        <Location />
      </div>
    </Section>
  );
}