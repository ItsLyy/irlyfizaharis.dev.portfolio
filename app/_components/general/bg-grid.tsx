import Image from "next/image";

export default function BgGrid() {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 -z-10">
      <div className="relative size-full">
        <Image
          fill
          src="/backgrounds/dots.svg"
          alt="grid"
          className="object-cover"
        />
      </div>
    </div>
  );
}
