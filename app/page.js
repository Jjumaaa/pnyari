import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import QuickInfo from "@/components/sections/QuickInfo";
import About from "@/components/sections/about/About";
import Services from "@/components/sections/services/Services";
import NewHere from "@/components/sections/new-here/NewHere";
import Ministries from "@/components/sections/ministries/Ministries";

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
    </>
  );
}