"use client";

import { Header } from "./Header";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <ThemeToggle />
      <main className="pt-16">{children}</main>
      <MobileNav />
    </>
  );
}
