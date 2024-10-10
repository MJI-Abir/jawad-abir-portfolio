'use client';

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AnimatePresence } from "framer-motion";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Jawad Abir",
//   description: "Full Stack Developer",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <AnimatePresence mode="wait">
          <div key={pathname}>{children}</div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
