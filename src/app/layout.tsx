import Menu from "./components/menu/menu";
import "./globals.css";
import { primary_font, secondary_font } from "@/global/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primary_font.variable} ${secondary_font.variable} antialiased dark`}>
        <div className="flex h-screen">
          <Menu />
          <div className="w-full">
            <main className="container mx-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
