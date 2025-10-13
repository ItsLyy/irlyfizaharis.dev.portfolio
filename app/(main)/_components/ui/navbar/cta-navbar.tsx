import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function CTANavbar() {
  return (
    <div className="hidden flex-1 justify-end lg:flex">
      <Link href="#" className="group flex items-center gap-2">
        Contact Me{" "}
        <ArrowRightIcon className="transition-transform duration-300 ease-in-out group-hover:-rotate-45" />
      </Link>
    </div>
  );
}
