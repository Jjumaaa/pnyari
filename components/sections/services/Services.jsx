import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCards from "./ServiceCards";

export default function Services() {
  return (
    <Section background="white" id="services" labelledBy="services-title">
      <SectionHeading
        id="services-title"
        eyebrow="Worship With Us"
        title="Sunday Services"
        description="Every Sunday we gather to worship God, hear His Word, and encourage one another. You are warmly invited."
      />

      <ServiceCards />
    </Section>
  );
}
