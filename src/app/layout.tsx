import type { Metadata } from "next";
import { VT323, Outfit, Press_Start_2P, Satisfy, Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuantCraft | Build. Solve. Conquer.",
  description: "Join QuantCraft, the ultimate hackathon at Galgotias University. AI/ML, Cyber Security, Blockchain, and Game Dev tracks.",
};

import LoadingScreen from "@/components/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} ${vt323.variable} ${pressStart2P.variable} ${satisfy.variable} ${firaCode.variable} font-sans antialiased bg-black text-white`} suppressHydrationWarning>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
