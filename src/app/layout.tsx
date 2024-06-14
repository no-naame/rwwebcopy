import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import FinalHeader from "@/components/FinalHeader";
import Footer from "@/components/Footer";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Rewardwise",
  description: "Make your customer loyal to you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={cn(
        "min-h-screen bg-background antialiased font-sans",
        fontSans.variable
    )}>
    <FinalHeader/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
