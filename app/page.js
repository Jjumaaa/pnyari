import Navbar from "@/components/layout/Navbar";
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

export default function Home() {
  return (
    <>
      <Navbar />

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
    </>
  );
}