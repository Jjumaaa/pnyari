import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ministries from "@/data/ministries";
import MinistryCard from "./MinistryCard";

export default function Ministries() {
  return (
    <Section background="white" id="ministries" labelledBy="ministries-title">
      <SectionHeading
        id="ministries-title"
        eyebrow="Ministries"
        title="Find Your Place"
        description="There is a place for everyone at PCEA Nyari — to grow, to serve, and to belong."
      />

      <ul className="flex flex-wrap justify-center gap-6 lg:gap-8">
        {ministries.map((ministry, i) => (
          <li
            key={ministry.id}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.334rem)]"
          >
            <MinistryCard ministry={ministry} delay={(i % 3) * 0.08} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
