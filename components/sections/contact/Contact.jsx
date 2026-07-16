import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Map from "./Map";

export default function Contact() {
  return (
    <section background="white">
      <h2>Contact Us</h2>

      <p>
        We'd love to hear from you. Reach out with any questions,
        prayer requests, or visit information.
      </p>

      <ContactInfo />

      <ContactForm />

      <Map />
    </section>
  );
}