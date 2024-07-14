import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import HeroSection from "@/components/sections/HeroSection";
import HowWeWork from "@/components/sections/HowWeWork";
import OurServicesSection from "@/components/sections/OurServicesSection";
import Projects from "@/components/sections/Projects";
import ServicesSection from "@/components/sections/ServicesSection";
import TeamSection from "@/components/sections/TeamSeaction";
import ToolsSection from "@/components/sections/ToolsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurServicesSection />
      <TeamSection />
      <ServicesSection />
      <ToolsSection />
      <Clients />
      <Projects />
      <HowWeWork />
      <Contact />
    </main>
  );
}
