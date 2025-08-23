import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio built with Next.js",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <main className="min-h-screen ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
