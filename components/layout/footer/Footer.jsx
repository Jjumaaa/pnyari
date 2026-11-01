import Image from "next/image";
import Icon from "@/components/ui/Icon";
import navigation from "@/data/navigation";
import { church, sundayServices, mapsDirectionsUrl, whatsappLink } from "@/data/church";

const socialLabels = { youtube: "YouTube", facebook: "Facebook", instagram: "Instagram" };

export default function Footer() {
  const socials = Object.entries(church.social).filter(([, url]) => url);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sanctuary-deep text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/images/nyarilogo.png"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 rounded-full bg-white object-contain"
            />
            <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">
              {church.name}
            </span>
          </a>
          <p className="mt-5 font-[family-name:var(--font-heading)] italic text-brushed-gold">
            {church.motto.join(". ")}.
          </p>
          <p className="mt-3 text-sm leading-relaxed">A congregation of the {church.denomination}.</p>

          {socials.length > 0 && (
            <ul className="mt-6 flex gap-3" aria-label="Social media">
              {socials.map(([key, url]) => (
                <li key={key}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${church.name} on ${socialLabels[key]} (opens in a new tab)`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brushed-gold hover:text-sanctuary-deep"
                  >
                    <Icon name={key} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <FooterColumn title="Explore">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
            <li>
              <a href="#new-here" className="hover:text-brushed-gold">New Here?</a>
            </li>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-brushed-gold">{item.label}</a>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Sunday Worship">
          <ul className="space-y-3">
            {sundayServices.map((s) => (
              <li key={s.time} className="flex items-center gap-2">
                <Icon name="clock" className="h-4 w-4 text-brushed-gold" />
                {s.label} — <span className="font-semibold text-white">{s.time}</span>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Contact">
          <ul className="space-y-3">
            <li>
              <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-brushed-gold">
                <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-brushed-gold" />
                {church.address.street}, {church.address.city}
                <span className="sr-only">(opens Google Maps in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={church.phone.href} className="flex gap-2 hover:text-brushed-gold">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brushed-gold" />
                {church.phone.display}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-brushed-gold">
                <Icon name="whatsapp" className="mt-0.5 h-4 w-4 shrink-0 text-brushed-gold" />
                WhatsApp us
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            {church.email && (
              <li>
                <a href={`mailto:${church.email}`} className="flex gap-2 break-all hover:text-brushed-gold">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brushed-gold" />
                  {church.email}
                </a>
              </li>
            )}
          </ul>
        </FooterColumn>
      </div>

      <div className="border-t border-white/10 px-4 py-6 pb-24 text-center text-sm sm:pb-6">
        © {year} {church.name}. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h2 className="mb-5 text-lg font-bold text-white">{title}</h2>
      {children}
    </div>
  );
}
