
import { IconProps } from "@phosphor-icons/react"

interface CardMediaSocialProps {
  icon: IconProps;
  link: string;
}

export default function CardMediaSocial({ icon, link }: CardMediaSocialProps){
  const Icon = icon;
  return (
    <a href={link} target="_blank" rel="external" className="aspect-square cursor-pointer size-10 border-2 border-zinc-500 bg-radial to-zinc-300/10 rounded-md flex items-center justify-center flex-col p-2">
      <div className="relative">{ Icon && <Icon className="size-6" /> }</div>
    </a>
  )
} 

