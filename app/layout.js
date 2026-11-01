import "./globals.css";
import { Playfair_Display, Open_Sans } from "next/font/google";
import MotionProvider from "@/components/providers/MotionProvider";
import { church, siteUrl, sundayServices } from "@/data/church";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const title = `${church.name} | Red Hill Link Rd, Nairobi`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${church.name}`,
  },
  description: `${church.description} Sunday services at ${sundayServices.map((s) => s.time).join(" & ")}.`,
  keywords: ["PCEA Nyari", "PCEA Nyari Church", "Nyari Parish", "Presbyterian church Nairobi", "church Red Hill Nairobi"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "/",
    siteName: church.name,
    title,
    description: church.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: church.description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#1A365D",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: church.name,
  description: church.description,
  url: siteUrl,
  logo: `${siteUrl}/images/nyarilogo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: church.address.street,
    addressLocality: church.address.city,
    addressCountry: "KE",
  },
  sameAs: Object.values(church.social).filter(Boolean),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${openSans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only rounded-full bg-brushed-gold font-semibold text-sanctuary-deep shadow-lg focus:not-sr-only focus:px-5 focus:py-3 focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          // JSON-LD built from our own static data; "<" escaped so it cannot close the tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <noscript>
          {/* Scroll-reveal content starts hidden; keep it visible when JavaScript is off. */}
          <style>{`main [style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
