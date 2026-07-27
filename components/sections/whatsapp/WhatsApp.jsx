import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";


export default function WhatsApp() {
  return (
    <Section
      background="white"
      id="whatsapp"
    >

      <SectionHeading
        eyebrow="Stay Connected"
        title="Join Our WhatsApp Community"
        description="Receive church updates, announcements, events, and fellowship information through WhatsApp."
      />


      <div className="text-center">

        <Button
          href="https://wa.me/254706465469"
          external
          variant="crimson"
        >
          Join WhatsApp Community
        </Button>

      </div>


    </Section>
  );
}