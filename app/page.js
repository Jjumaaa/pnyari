import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Hero from "@/components/sections/Hero";
import QuickInfo from "@/components/sections/QuickInfo";
import About from "@/components/sections/about/About";
import Services from "@/components/sections/services/Services";
import NewHere from "@/components/sections/new-here/NewHere";
import Ministries from "@/components/sections/ministries/Ministries";
import Sermons from "@/components/sections/sermons/Sermons";
import Events from "@/components/sections/events/Events";
import Give from "@/components/sections/give/Give";
import Contact from "@/components/sections/contact/Contact";
import WhatsApp from "@/components/sections/whatsapp/WhatsApp";

// Re-render hourly so new YouTube uploads appear and past events move out of "upcoming".
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <QuickInfo />
        <About />
        <Services />
        <NewHere />
        <Ministries />
        <Sermons />
        <Events />
        <Give />
        <Contact />
        <WhatsApp />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
