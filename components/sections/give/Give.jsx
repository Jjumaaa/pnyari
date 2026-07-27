import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import GivingOptions from "./GivingOptions";

export default function Give() {
  return (
    <Section background="light">
      <div id="give">
        <SectionHeading
          eyebrow="Generosity"
          title="Give"
          description="Your generosity supports the ministry and mission of PCEA Nyari Church."
        />

        <GivingOptions />
      </div>
    </Section>
  );
}