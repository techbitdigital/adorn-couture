import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Adorn Couture | Fashion & Academy",
    template: "%s | Adorn Couture",
  },
  description: "Adorn Couture — Premium ready-to-wear fashion collections and a world-class fashion design academy in Lagos, Nigeria.",
  keywords: ["fashion", "couture", "Lagos", "Nigeria", "fashion academy", "ready-to-wear", "fashion design"],
  openGraph: {
    title: "Adorn Couture | Fashion & Academy",
    description: "Premium ready-to-wear fashion and world-class fashion education in Lagos, Nigeria.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  ); 
}