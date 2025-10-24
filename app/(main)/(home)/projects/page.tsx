"use client"

import StudyCaseSection from "../_components/sections/study-case";
import AboutSection from "../_components/sections/about";
import { useRef } from "react"
import Sidebar from "../../_components/general/sidebar";

export default function ProjectsPage() {
  const ref1 = useRef(null);
  const scrollRoot = useRef(null);
  return (
    <div ref={scrollRoot} className="no-scrollbar focus:outline-0 scroll-smooth h-full grow-0 w-full snap-y snap-mandatory overflow-y-scroll *:max-w-[800px]">
      <StudyCaseSection ref={ref1} />
      <Sidebar ref={scrollRoot}>
        <Sidebar.Indicator link="/projects#study-case" ref={ref1} />
      </Sidebar>
    </div>
  );
}
