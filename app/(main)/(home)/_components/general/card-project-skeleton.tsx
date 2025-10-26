import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

export default function CardSkeletonProject() {
  return (
    <div className="w-full flex-[0_0_100%] select-none animate-pulse max-w-80 snap-center shrink-0 border-1 border-zinc-700 rounded-lg overflow-hidden">
      <div className="w-full aspect-video bg-zinc-300" />
      <div className="py-2 px-3 space-y-2">
        <div className="flex justify-between group items-center gap-2 cursor-pointer">
          <div className="transition-all ease-in-out duration-300 w-full h-4 bg-zinc-300 rounded-md" />
          <div className="size-4 rounded-md bg-zinc-300" />
        </div>
        <div className="bg-zinc-400 h-3 w-full rounded-md" />
        <div className="bg-zinc-400 h-3 w-10 rounded-md" />
      </div>
    </div>
  )
}
