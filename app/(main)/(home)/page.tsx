"use client"

import HeroSection from "./_components/sections/hero";
import AboutSection from "./_components/sections/about";
import Profile from "./_components/general/profile";
import ContactSection from "./_components/sections/contact";
import { useRef } from "react"
import Sidebar from "../_components/general/sidebar";

export default function HomePage() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const scrollRoot = useRef(null);
  return (
    <div ref={scrollRoot} className="no-scrollbar focus:outline-0 scroll-smooth grow-0 h-full w-full snap-y snap-mandatory overflow-y-scroll *:max-w-[800px]">
      <HeroSection ref={ref1} />
      <AboutSection ref={ref2} />
      <ContactSection ref={ref3} />
      <Sidebar ref={scrollRoot}>
        <Sidebar.Indicator link="/#home" ref={ref1} />
        <Sidebar.Indicator link="/#about" ref={ref2} />
        <Sidebar.Indicator link="/#contact" ref={ref3} />
      </Sidebar>
    </div>
  );
}
