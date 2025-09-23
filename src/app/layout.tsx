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
          <div className="w-80 h-full shrink-0 bg-accent-foreground"></div>
          <div className="w-full bg-gray-800">
            <main className="container mx-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
