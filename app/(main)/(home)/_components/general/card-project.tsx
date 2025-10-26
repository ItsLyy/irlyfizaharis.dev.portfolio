import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

interface CardProjectProps {
  title: string;
  description: string;
  technologies: string[];
}

export default function CardProject({ title, description, technologies }: CardProjectProps) {
  return (
    <div className="w-full flex-[0_0_100%] select-none max-w-80 snap-center shrink-0 border-1 border-zinc-700 rounded-lg overflow-hidden">
      <div className="w-full aspect-video bg-zinc-100"></div>
      <div className="py-2 px-3">
        <Link href="/" className="flex justify-between group items-center cursor-pointer">
          <h2 className="group-hover:underline transition-all ease-in-out duration-300">{ title }</h2>
          <ArrowRight className="size-4 group-hover:-rotate-45 transition-all ease-in-out duration-300" />
        </Link>
        <p className="text-zinc-400 text-sm line-clamp-2">{ description }</p>
        <span className="text-app-500 text-sm">{ technologies.map((technology, index) => `${technology}${(technologies.length - 1 > index ? ", ": "")}`) }</span>
      </div>
    </div>
  )
}
