"use client";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import HeroSection from "@/components/sections/HeroSection";
import HowWeWork from "@/components/sections/HowWeWork";
import OurServicesSection from "@/components/sections/OurServicesSection";
import Projects from "@/components/sections/Projects";
import ServicesSection from "@/components/sections/ServicesSection";
import TeamSection from "@/components/sections/TeamSeaction";
import ToolsSection from "@/components/sections/ToolsSection";
import {useEffect} from "react";

import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 300, // Duration of animations in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
    const replainSettingsScript = document.createElement("script");
    replainSettingsScript.innerHTML = `
      window.replainSettings = { id: '8f1a8fb7-c789-4dc9-8a05-3b489f91fdc3' };
    `;

    const replainScript = document.createElement("script");
    replainScript.src = "https://widget.replain.cc/dist/client.js";
    replainScript.async = true;

    document.body.appendChild(replainSettingsScript);
    document.body.appendChild(replainScript);

    return () => {
      document.body.removeChild(replainSettingsScript);
      document.body.removeChild(replainScript);
    };
  }, []);
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
