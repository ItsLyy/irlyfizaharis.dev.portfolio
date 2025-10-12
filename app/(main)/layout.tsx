import FooterMain from "./_components/general/footer";
import NavbarMain from "./_components/general/navbar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavbarMain />
      <main className="p-2 min-h-[100svh]">{children}</main>
      <FooterMain />
    </>
  );
}
