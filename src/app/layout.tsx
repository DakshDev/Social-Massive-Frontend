import "./globals.css";
import { primary_font, secondary_font } from "@/global/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primary_font.variable} ${secondary_font.variable} antialiased dark`}>{children}</body>
    </html>
  );
}
