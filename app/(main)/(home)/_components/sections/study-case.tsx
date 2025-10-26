'use client'

import CardProject from "../general/card-project"
import CardProjectSkeleton from "../general/card-project-skeleton"
import { forwardRef } from "react"
import useEmblaCarousel from 'embla-carousel-react'

const StudyCase = forwardRef(function StudyCaseSection(props, ref) {
  const [projectSlideRef] = useEmblaCarousel({ align: "center" })
  const [certificateSlideRef] = useEmblaCarousel({ align: "center" })
  
  return (
    <section ref={ref} id="study-case" className="w-full pb-24 space-y-6 p-4 pr-18 md:pt-24 md:pr-24">
      <header className="flex gap-2">
        <form className="w-full">
          <input className="border-1 border-zinc-500 text-sm px-3 py-2 rounded-sm max-w-96 w-full transition-color duration-300 ease-in-out focus:outline-0 focus:border-zinc-400" placeholder="Search for the title of project" type="text" />
        </form>
      </header>
      <div>
        <h1 className="mb-2 uppercase text-sm text-zinc-400">Projects (20)</h1>
        <div className="overflow-hidden" ref={projectSlideRef}>
          <div className="flex gap-2">
            <CardProject title="Herta" description="Health analytic that guess desease." technologies={["React", "Tailwindcss", "HapiJS"]} />
            <CardProject title="Herta" description="Health analytic that guess desease." technologies={["React", "Tailwindcss", "HapiJS"]} />
            <CardProject title="Herta" description="Health analytic that guess desease." technologies={["React", "Tailwindcss", "HapiJS"]} />
          </div>
        </div>
      </div>
      <div>
        <h1 className="mb-2 uppercase text-sm text-zinc-400">Certificates (20)</h1>
        <div className="overflow-hidden" ref={certificateSlideRef}>
          <div className="flex gap-2">
            <CardProject title="Herta" description="Health analytic that guess desease." technologies={["React", "Tailwindcss", "HapiJS"]} />
            <CardProject title="Herta" description="Health analytic that guess desease." technologies={["React", "Tailwindcss", "HapiJS"]} />
            <CardProjectSkeleton />
          </div>
        </div>
      </div>
    </section>
  )
})

export default StudyCase

