import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Ads from "@/components/ads";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExploreProperties from "@/components/ExploreProperties";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estatein",
  description: "Real Estate Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased`}
      >
        <Ads />
        <Navbar />
        {children}
        <ExploreProperties />
        <Footer />
      </body>
    </html>
  );
}
