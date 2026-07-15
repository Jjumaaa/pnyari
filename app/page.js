import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import QuickInfo from "@/components/sections/QuickInfo";
import About from "@/components/sections/about/About";
import Services from "@/components/sections/services/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <QuickInfo />

      <About />
      <Services />
    </>
  );
}