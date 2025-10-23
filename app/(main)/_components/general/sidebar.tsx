"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { forwardRef, createContext, useContext, useState } from "react"
import { motion, useInView } from "motion/react"

const SidebarContext = createContext(null);
const useSidebar = () => {
  if (!SidebarContext) return null

  return useContext(SidebarContext)
}

const Sidebar = forwardRef(({ children }, ref: { children: React.ReactNode }) => {
  return (
    <SidebarContext.Provider value={{ root: ref }}>
      <aside className="fixed top-0 right-12 bottom-0 flex h-full w-0.5 items-center justify-center border-1 border-zinc-700 lg:right-20">
        <div className="flex flex-col items-center gap-4">
          {children}
        </div>
      </aside>
    </SidebarContext.Provider>
  );
})

const Indicator = forwardRef(({ link }, ref) => {
  const { root } = useSidebar();
  const isInView = useInView(ref, { root, margin: "-100px 0px -100px 0px" });

  return (
    <Link href={link} className="flex size-fit cursor-pointer items-center justify-center hover:p-1.5 trasintition-all duration-300 ease-in-out rounded-full border-2 border-zinc-700 p-1">
      <div
        className={`${isInView ? "size-3" : "size-0"} rounded-full trasintition-all ease-in-out duration-300 bg-zinc-200`}
      />
    </Link>
  );
})

Sidebar.Indicator = Indicator;

export default Sidebar;
