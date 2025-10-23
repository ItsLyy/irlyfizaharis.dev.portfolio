import NavbarMain from "./_components/general/navbar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavbarMain />
      <main className="box-border h-svh flex flex-col">{children}</main>
    </>
  );
}
