import UserProfileNavbar from "../ui/navbar/user-profile";
import CTANavbar from "../ui/navbar/cta-navbar";
import MenuNavbar from "../ui/navbar/menu-navbar";

export default function NavbarMain() {
  return (
    <header className="fixed top-0 right-0 left-0 z-40 pointer-events-none mx-auto flex w-full max-w-[1200px] px-6 py-4 lg:items-center">
      <UserProfileNavbar />
      <MenuNavbar />
      <CTANavbar />
    </header>
  );
}
