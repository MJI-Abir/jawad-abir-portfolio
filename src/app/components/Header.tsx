"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import signature from "../assets/signature2.png";

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Empty space for hamburger menu on mobile */}
            <div className="w-8 md:hidden"></div>

            {/* Signature Container */}
            <Link href="/" className="flex items-center ml-6 md:ml-0">
              <Image
                src={signature}
                alt="Jawad Abir Signature"
                width={80}
                height={20}
                className="dark:invert"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${
                isActive("/")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              } transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              href="/work"
              className={`${
                isActive("/work")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              } transition-colors duration-200`}
            >
              Work
            </Link>
            <Link
              href="/contact"
              className={`${
                isActive("/contact")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              } transition-colors duration-200`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
