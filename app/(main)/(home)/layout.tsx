import Profile from "./_components/general/profile";
import MouseScrollAnimation from "@/app/_components/ui/mouse-scroll-animation"

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col md:flex-row h-svh overflow-hidden w-full">
      <Profile />
      {children}
    </div>
  );
}
