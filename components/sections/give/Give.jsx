import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Give() {
  return (
    <Section
      background="white"
      id="give"
    >

      <SectionHeading
        eyebrow="Support Our Ministry"
        title="Give & Make A Difference"
        description="Your generosity helps us continue serving God, supporting our community, and sharing His Word."
      />


      <div
        className="
        mx-auto
        max-w-3xl
        text-center
        "
      >

        <p
          className="
          leading-relaxed
          text-[var(--color-charcoal-slate)]
          "
        >
          Every gift supports the work of the church, including
          ministry programs, outreach, and community service.
        </p>


        <div className="mt-8">

          <Button
            href="#contact"
            variant="crimson"
          >
            Contact Us To Give
          </Button>

        </div>

      </div>

    </Section>
  );
}