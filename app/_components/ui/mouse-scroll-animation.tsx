import { MouseSimple, CaretDown} from "@phosphor-icons/react/dist/ssr"

export default function MouseScrollAnimation({ className = "" }: { className: string }) {
  return (
    <div className={`flex items-center flex-col gap-2 ${className}`}>
      <MouseSimple />
      <CaretDown />
    </div>
  )
}
