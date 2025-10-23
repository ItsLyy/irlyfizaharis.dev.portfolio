import SubTitle from "../ui/sub-title"
import CardTechnology from "../general/card-tehnology"
import NextJsLogo from "@/app/_components/ui/icons/nextjs"
import { forwardRef } from 'react';

const technologies = [
  {
    name: "React",
    logo: "react",
    variant: "grayscale"
  },
  {
    name: "Next.js",
    logo: "nextjs2",
    variant: "dark"
  },
  {
    name: "Tailwind",
    logo: "tailwindcss",
    variant: "grayscale"
  },
  {
    name: "Express",
    logo: "expressjs",
    variant: "dark"
  },
  {
    name: "MongoDB",
    logo: "mongodb",
    variant: "grayscale"
  },
  {
    name: "Figma",
    logo: "figma",
    variant: "grayscale"
  }
]

const AboutSection = forwardRef(function AboutSection(props, ref) {
  return (
    <section ref={ref} id="about" className="h-full space-y-6 w-full p-4 pr-18 snap-start md:pt-24 md:pr-24">
      <div>
        <SubTitle>Education</SubTitle>
        <div className="flex flex-col">
          <h2>Telkom University <span className="text-zinc-400 text-sm">as S1 Informatics</span></h2>
          <span className="text-zinc-400 text-sm">2025 - Present</span>
        </div>
        <div className="flex flex-col">
          <h2>Vocational Highschool 1 Wonosobo <span className="text-zinc-400 text-sm">as Software Engineering</span></h2>
          <p className="text-zinc-400 text-sm line-clamp-1">2022 - 2025</p>
        </div>
      </div>
      <div>
        <SubTitle>Technologies</SubTitle>
        <div className="flex w-full gap-2 flex-wrap">
          {
            technologies.map((technology, index) => (
              <CardTechnology key={index} name={technology.name} icon={technology.logo} variant={technology.variant} />
            ))
          }
        </div>
      </div>
    </section>
  );
})

export default AboutSection;

