import BgGrid from "@/app/_components/general/bg-grid";
import { forwardRef } from 'react';

const HeroSection = forwardRef(function HeroSection(props, ref) {
  return (
    <section ref={ref} id="home" className="h-full w-full p-4 snap-start pr-18 md:pt-24 md:pr-24">
      <h2 className="mb-4 text-2xl">Hi👋, I am <span className="text-app-550">Irly Fizaharis,</span></h2>
      <p className="text-zinc-400">
        A <span className="text-app-500">Fullstack Web Developer</span> with a love for coding and technology. I enjoy
        learning new programming languages and frameworks, and I'm always
        looking for new challenges to tackle.
      </p>
    </section>
  );
})

export default HeroSection;

