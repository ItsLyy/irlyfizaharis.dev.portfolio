export default function UserProfileNavbar() {
  return (
    <div className="flex h-fit flex-1 origin-top-left scale-90 items-center gap-3 lg:scale-100">
      <h2 className="text-xl leading-tight font-semibold">IRLY.DEV</h2>
      <div className="flex items-center gap-2 rounded-full border-2 border-[#00A70E80] bg-gradient-to-b from-[#00A70E30] px-3 py-1">
        <div className="size-2 rounded-full bg-[#00A70E]" />
        <span className="text-xs leading-tight text-[#00A70E]">
          [[Avaible]]
        </span>
      </div>
    </div>
  );
}
