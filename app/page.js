import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import QuickInfo from "@/components/sections/QuickInfo";
import About from "@/components/sections/about/About";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <QuickInfo />

      <About />
    </>
  );
}