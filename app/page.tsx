import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MarqueeSection from "@/components/home/MarqueeSection";
import StatsSection from "@/components/home/StatsSection";
import CoreSection from "@/components/home/CoreSection";
import ParallaxShowcase from "@/components/home/ParallaxShowcase";
import BrandQuote from "@/components/home/BrandQuote";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <MarqueeSection />
        <StatsSection />
        <CoreSection />

        <About />

        <ParallaxShowcase />

        <Services />

        <BrandQuote />

        <Team />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
