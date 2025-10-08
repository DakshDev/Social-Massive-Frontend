import Menu from "../components/menu/menu";

export default function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen'>
      <Menu />
      <div className='w-full h-full overflow-auto'>
        <main className='container mx-auto p-4'>{children}</main>
      </div>
    </div>
  );
}
