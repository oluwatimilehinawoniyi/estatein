import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExploreProperties from "@/components/ExploreProperties";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estatein - Find Your Dream Property",
  description: "Discover luxurious homes and properties effortlessly.",
  openGraph: {
    title: "Estatein - Find Your Dream Property",
    description: "Explore luxurious homes and properties effortlessly.",
    url: "https://estatein.oluwatimilehinawoniyi.com/",
    siteName: "Estatein",
    images: [
      {
        url: "/screenCard.png",
        width: 1200,
        height: 630,
        alt: "Estatein - Find Your Dream Property",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estatein - Find Your Dream Property",
    description: "Explore luxurious homes and properties effortlessly.",
    images: ["/screenCard.png"],
    site: "@timmyawoniyi",
  },
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
        <Navbar />
        {children}
        <ExploreProperties />
        <Footer />
      </body>
    </html>
  );
}
