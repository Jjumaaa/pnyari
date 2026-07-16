import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-sanctuary-blue)]">
      <FooterLinks />

      <SocialLinks />

      <p>© 2026 PCEA Nyari Church</p>
    </footer>
  );
}