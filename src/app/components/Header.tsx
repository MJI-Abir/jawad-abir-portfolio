"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="md:block flex items-center">
            {/* Empty space for hamburger menu on mobile */}
            <div className="w-8 md:hidden"></div>
            <Link
              href="/"
              className="text-xl font-bold text-blue-950 dark:text-white ml-6 md:ml-0"
            >
              Jawad Abir
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
              href="/about"
              className={`${
                isActive("/about")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              } transition-colors duration-200`}
            >
              About
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
