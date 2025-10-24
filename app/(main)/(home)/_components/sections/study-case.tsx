'use client'

import CardProject from "../general/card-project.tsx"
import { forwardRef } from "react"

const StudyCase = forwardRef(function StudyCaseSection(props, ref) {
  return (
    <section ref={ref} id="study-case" className="h-full w-full space-y-4 p-4 snap-start pr-18 md:pt-24 md:pr-24">
      <header className="flex gap-2">
        <form className="w-full">
          <input className="border-1 border-zinc-500 text-sm px-3 py-2 rounded-sm max-w-96 w-full transition-color duration-300 ease-in-out focus:outline-0 focus:border-zinc-400" placeholder="Search for the title of project" type="text" />
        </form>
      </header>
      <div>
        <h1 className="mb-2 uppercase text-sm text-zinc-400">Projects (20)</h1>
        <div className="flex w-full overflow-x-scroll no-scrollbar snap-x snap-mandatory gap-2">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </div>
      <div>
        <h1 className="mb-2 uppercase text-sm text-zinc-400">Certificates (20)</h1>
        <div className="flex w-full overflow-x-scroll no-scrollbar snap-x snap-mandatory gap-2">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </div>
    </section>
  )
})

export default StudyCase

