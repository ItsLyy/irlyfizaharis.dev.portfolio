"use client";

import { Icon } from "@phosphor-icons/react";
import { TrayIcon, UserIcon } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";

interface MenuItem {
  id: string;
  name: string;
  link: string;
  icon: Icon;
}

const MenuItems: MenuItem[] = [
  {
    id: "menu-01",
    name: "Home",
    link: "/",
    icon: UserIcon,
  },
  {
    id: "menu-02",
    name: "Project",
    link: "/projects",
    icon: TrayIcon,
  },
];

export default function MenuNavbar() {
  const pathname = usePathname();
  return (
    <div className="flex flex-1 justify-end lg:justify-center">
      <nav className="bg-app-300 flex w-fit flex-col gap-1 rounded-full border-1 border-zinc-500/20 p-1 text-zinc-500 lg:flex-row">
        {MenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.link === pathname;
          return (
            <Link
              key={item.id}
              href={item.link}
              className={`relative flex cursor-pointer flex-col items-center gap-2 rounded-full transition-all duration-300 ease-in-out lg:flex-row ${!isActive ? "p-2 hover:bg-zinc-200/10" : "px-2 py-4 text-zinc-200 lg:px-4 lg:py-2"}`}
            >
              <Icon className="z-10 size-6 transition-colors duration-300 ease-in-out" />
              <span
                className={`z-10 line-clamp-1 px-1 text-sm leading-tight transition-colors duration-300 ease-in-out [writing-mode:vertical-lr] lg:[writing-mode:horizontal-tb] ${!isActive && "hidden"}`}
              >
                {item.name}
              </span>
              {isActive ? (
                <motion.div
                  className="absolute top-0 right-0 bottom-0 left-0 rounded-full bg-zinc-200/10"
                  layoutId="nav-indicator"
                  transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                  }}
                />
              ) : null}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
