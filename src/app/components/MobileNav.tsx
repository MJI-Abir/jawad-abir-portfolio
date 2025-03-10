"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Mail } from "lucide-react";

export function MobileNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] dark:shadow-gray-800 transition-colors duration-200">
      <div className="flex items-center justify-around py-3">
        <Link
          href="/"
          className={`flex flex-col items-center ${
            isActive("/")
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          href="/about"
          className={`flex flex-col items-center ${
            isActive("/about")
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          <User size={20} />
          <span className="text-xs mt-1">About</span>
        </Link>
        <Link
          href="/work"
          className={`flex flex-col items-center ${
            isActive("/work")
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          <Briefcase size={20} />
          <span className="text-xs mt-1">Work</span>
        </Link>
        <Link
          href="/contact"
          className={`flex flex-col items-center ${
            isActive("/contact")
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          <Mail size={20} />
          <span className="text-xs mt-1">Contact</span>
        </Link>
      </div>
    </div>
  );
}
