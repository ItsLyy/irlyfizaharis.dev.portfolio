import StackIcon from "tech-stack-icons"

interface CardTechnologyProps {
  name: string;
  icon: string;
  variant?: string;
}

export default function CardTechnology({ name, icon, variant = "dark" }: CardTechnologyProps){
  const Icon = icon;
  return (
    <div className="aspect-square size-22 border-2 border-zinc-500 gap-1 bg-radial to-zinc-300/10 rounded-md flex items-center justify-center flex-col p-2 mt-2">
      <figure role="img" aria-label={`${name} logo`}>
        <StackIcon name={icon} variant={variant} className="size-6" />
      </figure>
      <span className="text-zinc-400 text-sm">{ name }</span>
    </div>
  )
} 

