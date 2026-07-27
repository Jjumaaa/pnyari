import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Map from "./Map";

export default function Contact() {
  return (
    <Section background="white">
      <div id="contact">
        <SectionHeading
          eyebrow="Contact"
          title="Contact Us"
          description="We'd love to hear from you. Reach out with any questions, prayer requests, or visit information."
        />

        <ContactInfo />
        <ContactForm />
        <Map />
      </div>
    </Section>
  );
}