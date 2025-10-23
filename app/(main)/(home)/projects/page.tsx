"use client"

import HeroSection from "../_components/sections/hero";
import AboutSection from "../_components/sections/about";
import { useRef } from "react"
import Sidebar from "../../_components/general/sidebar";

export default function ProjectsPage() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const scrollRoot = useRef(null);
  return (
    <div ref={scrollRoot} className="no-scrollbar focus:outline-0 scroll-smooth h-full grow-0 w-full snap-y snap-mandatory overflow-y-scroll *:max-w-[800px]">
      <HeroSection ref={ref1} />
      <AboutSection ref={ref2} />
      <Sidebar ref={scrollRoot}>
        <Sidebar.Indicator link="/projects#study-case" ref={ref1} />
        <Sidebar.Indicator link="/projects#cetificates" ref={ref2} />
      </Sidebar>
    </div>
  );
}
