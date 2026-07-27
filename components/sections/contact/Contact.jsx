import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ContactCard from "./ContactCard";

import { contactInfo } from "@/data/contact";


export default function Contact() {
  return (
    <Section
      background="light"
      id="contact"
    >

      <SectionHeading
        eyebrow="Contact"
        title="Get In Touch"
        description="We would love to connect with you and welcome you to PCEA Nyari Church."
      />


      <div
        className="
        grid
        gap-8
        md:grid-cols-3
        "
      >

        {contactInfo.map((item) => (
        <ContactCard
          key={item.title}
          icon={
            item.icon === "location"
              ? "📍"
              : item.icon === "phone"
              ? "📞"
              : "✉️"
          }
          title={item.title}
        >
          {item.description}
        </ContactCard>
      ))}


      </div>

    </Section>
  );
}