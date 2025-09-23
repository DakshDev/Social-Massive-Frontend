import { Geist, Geist_Mono } from "next/font/google";

const primary_font = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
});

const secondary_font = Geist_Mono({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export { primary_font, secondary_font };
