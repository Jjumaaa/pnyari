// Single source of truth for church-wide details.
// Fields set to null are unknown/unverified and are hidden on the site until filled in.

const whatsappNumber = "254706465469";

export const church = {
  name: "PCEA Nyari Church",
  parish: "PCEA Nyari Parish",
  denomination: "Presbyterian Church of East Africa",
  motto: ["Welcomed", "Accepted", "Loved", "Shepherded"],
  // Yearly theme shown under the logo. Update or set to null each year.
  theme: "Year of Abundance",
  description:
    "PCEA Nyari Church is a Presbyterian congregation on Red Hill Link Rd, Nairobi — a family where everyone is welcomed, accepted, loved, and shepherded.",

  address: {
    street: "Red Hill Link Rd",
    city: "Nairobi",
    country: "Kenya",
  },
  mapsQuery: "PCEA Nyari Church, Red Hill Link Rd, Nairobi",

  // TODO(verify): phone and email were on the previous site but are not yet confirmed.
  phone: {
    display: "0706 465 469",
    href: "tel:+254706465469",
  },
  email: "info@nyari.org",

  whatsapp: {
    number: whatsappNumber,
    defaultMessage:
      "Hello PCEA Nyari Church, I found you through your website and would like to know more.",
    // Paste an official WhatsApp Community/Channel invite link here when available.
    communityUrl: null,
  },

  social: {
    youtube: "https://www.youtube.com/@PCEANyariChurch",
    facebook: null,
    instagram: null,
  },
};

export const sundayServices = [
  { label: "First Service", time: "8:30 AM" },
  { label: "Second Service", time: "10:40 AM" },
];

export function whatsappLink(message = church.whatsapp.defaultMessage) {
  return `https://wa.me/${church.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(church.mapsQuery)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(church.mapsQuery)}&output=embed`;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");
