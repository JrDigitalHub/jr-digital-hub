import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or whichever font you are currently using
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "JR Digital Hub | Autonomous Infrastructure",
    template: "%s | JR Digital Hub",
  },
  description: "Architecting scalable neural systems, pragmatic automation workflows, and robotics vision interfaces for global commerce. Powered by ZENO OS and Kinetic-AGV.",
  keywords: ["Autonomous Infrastructure", "Neural Automation", "Robotics", "ZENO OS", "Kinetic-AGV", "Enterprise Scaling", "JR Digital Hub"],
  authors: [{ name: "JR Digital Hub LTD" }],
  creator: "JR Digital Hub LTD",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jrdigitalhubltd.com",
    title: "JR Digital Hub | Autonomous Infrastructure",
    description: "Architecting scalable neural systems, pragmatic automation workflows, and robotics vision interfaces for global commerce.",
    siteName: "JR Digital Hub",
    images: [
      {
        url: "/og-image.jpg", // We will add an actual image here later
        width: 1200,
        height: 630,
        alt: "JR Digital Hub - Autonomous Infrastructure for the Next Economy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JR Digital Hub | Autonomous Infrastructure",
    description: "Architecting scalable neural systems, pragmatic automation workflows, and robotics vision interfaces for global commerce.",
    images: ["/og-image.jpg"], // Matches the OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0A0A0A] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}