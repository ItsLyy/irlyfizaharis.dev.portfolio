import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function CTANavbar() {
  return (
    <div className="hidden flex-1 justify-end pointer-events-auto lg:flex">
      <Link href="/#contact" className="group flex items-center gap-2">
        Contact Me{" "}
        <ArrowRightIcon className="transition-transform duration-300 ease-in-out group-hover:-rotate-45" />
      </Link>
    </div>
  );
}
