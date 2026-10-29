import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import VisitSteps from "./VisitSteps";
import FAQ from "./FAQ";
import NextSteps from "./NextSteps";

export default function NewHere() {
  return (
    <Section background="light" id="new-here" labelledBy="new-here-title">
      <SectionHeading
        id="new-here-title"
        eyebrow="New Here?"
        title="We Saved You a Seat"
        description="Visiting a church for the first time can feel like a big step. Here is what you can expect when you join us at PCEA Nyari."
      />

      <VisitSteps />
      <FAQ />
      <NextSteps />
    </Section>
  );
}
