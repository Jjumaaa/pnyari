import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { church, mapsDirectionsUrl, mapsEmbedUrl, whatsappLink } from "@/data/church";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <Section background="light" id="contact" labelledBy="contact-title">
      <SectionHeading
        id="contact-title"
        eyebrow="Contact"
        title="Get In Touch"
        description="We would love to hear from you, pray with you, and welcome you to PCEA Nyari Church."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ContactCard
          icon="mapPin"
          title="Visit Us"
          href={mapsDirectionsUrl}
          external
          action="Get directions"
        >
          {church.address.street}
          <br />
          {church.address.city}, {church.address.country}
        </ContactCard>
        <ContactCard icon="phone" title="Call Us" href={church.phone.href} action="Call now">
          {church.phone.display}
        </ContactCard>
        <ContactCard
          icon="whatsapp"
          title="WhatsApp"
          href={whatsappLink()}
          external
          action="Start a chat"
        >
          Message us on {church.phone.display}
        </ContactCard>
        {church.email && (
          <ContactCard icon="mail" title="Email Us" href={`mailto:${church.email}`} action="Send an email">
            <span className="break-all">{church.email}</span>
          </ContactCard>
        )}
      </div>

      <Reveal>
        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-lg">
          <iframe
            src={mapsEmbedUrl}
            title="Map showing the location of PCEA Nyari Church on Red Hill Link Rd, Nairobi"
            className="h-[320px] w-full border-0 md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Reveal>
    </Section>
  );
}
