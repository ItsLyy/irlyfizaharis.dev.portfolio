export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <>{children}</>
      <aside className="fixed top-0 right-12 bottom-0 -z-10 flex h-full w-0.5 items-center justify-center border-1 border-zinc-800 lg:right-20">
        <div className="flex flex-col gap-4">
          <div className="size-5 rounded-full border-2 border-zinc-800"></div>
          <div className="size-5 rounded-full border-2 border-zinc-800"></div>
          <div className="size-5 rounded-full border-2 border-zinc-800"></div>
        </div>
      </aside>
    </>
  );
}
