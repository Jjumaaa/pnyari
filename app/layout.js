import "./globals.css";
import { Playfair_Display, Open_Sans } from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});


const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});


export const metadata = {
  title: "PCEA Nyari Church",
  description:
    "A Christ-centered church where everyone is welcomed, accepted, loved, and shepherded.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${openSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}