import Image from "next/image";
import CardMediaSocial from "@/app/(main)/_components/general/card-media-social"
import { EnvelopeSimple, LinkedinLogo, GithubLogo, InstagramLogo, ReadCvLogo } from "@phosphor-icons/react/dist/ssr"

export default function Profile() {
  return (
    <aside className="flex w-full p-4 pt-14 gap-4 shrink-0 md:pt-24 md:flex-col md:items-end md:w-100 md:gap-10">
      <div className="aspect-square h-fit w-24 grow-0 rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl border-2 border-zinc-500 p-2 md:w-28">
        <div className="relative size-full overflow-hidden rounded-tl-md rounded-tr-2xl rounded-br-md rounded-bl-2xl">
          <Image
            fill
            alt="profile"
            src="/profile.jpeg"
            sizes="width: full"
            className="object-cover"
          />
        </div>
      </div>
      <div className="h-full w-44 flex flex-col gap-2">
        <div className="grid grid-cols-4 gap-2 w-fit">
          <CardMediaSocial icon={EnvelopeSimple} link="mailto:irly.fizaharis.dev@gmail.com?subject=SUBJECT&body=BODY" />
          <CardMediaSocial icon={LinkedinLogo} link="https://www.linkedin.com/in/irly-fizaharis-aa8896298/" />
          <CardMediaSocial icon={InstagramLogo} link="https://www.instagram.com/lyynoir/" />
          <CardMediaSocial icon={GithubLogo} link="https://github.com/ItsLyy" />
        </div>
        <a target="_blank" href="/irlyfizaharis-cv.pdf" className="rounded-md cursor-pointer w-full justify-center pl-2 pr-3 py-2 bg-zinc-100 text-zinc-900 font-semibold text-sm flex items-center gap-2"><ReadCvLogo className="size-5 p-0" />Download CV</a>
      </div>
    </aside>
  );
}
