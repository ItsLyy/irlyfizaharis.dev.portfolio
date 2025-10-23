import StackIcon from "tech-stack-icons"

export default function NextJsLogo({ className="" }: { className?: string }) {
  return (
    <figure role="img" aria-label="React logo">
      <StackIcon name="nextjs2" variant="dark" className={className} />
    </figure>
  )
}
