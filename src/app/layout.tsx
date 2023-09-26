import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";

import { ColorContextProvider } from "@/contexts/color";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nearest Tailwind Color",
  description:
    "Discover the Perfect Tailwind CSS Class for Your Color: Accurate Matching Made Easy! Our tool simplifies the process of finding the ideal Tailwind CSS class that closely matches your chosen color.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <ColorContextProvider>
          <Header />
          {children}
        </ColorContextProvider>
      </body>
    </html>
  );
}
