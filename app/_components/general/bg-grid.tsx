import Image from "next/image";

export default function BgGrid() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="relative box-border size-full">
        <Image
          fill
          priority
          src="/backgrounds/paper-fibers.png"
          alt="grid"
          className="object-cover"
        />
        <Image
          fill
          priority
          src="/backgrounds/dots.svg"
          alt="grid"
          className="object-cover"
        />
      </div>
    </div>
  );
}
