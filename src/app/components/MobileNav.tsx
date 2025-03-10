"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  // Close sidebar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-md"
        aria-label="Open menu"
      >
        <Menu size={24} className="text-gray-800 dark:text-gray-200" />
      </button>

      {/* Sidebar overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out shadow-lg md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-800 dark:text-gray-200" />
            </button>
          </div>

          {/* Logo */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <Link
              href="/"
              className="text-xl font-bold text-blue-950 dark:text-white"
            >
              Jawad Abir
            </Link>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col px-4 py-6 space-y-4">
            <Link
              href="/"
              className={`flex items-center space-x-3 px-3 py-2 rounded-md ${
                isActive("/")
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              } transition-colors duration-200`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link
              href="/about"
              className={`flex items-center space-x-3 px-3 py-2 rounded-md ${
                isActive("/about")
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              } transition-colors duration-200`}
            >
              <User size={20} />
              <span>About</span>
            </Link>
            <Link
              href="/work"
              className={`flex items-center space-x-3 px-3 py-2 rounded-md ${
                isActive("/work")
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              } transition-colors duration-200`}
            >
              <Briefcase size={20} />
              <span>Work</span>
            </Link>
            <Link
              href="/contact"
              className={`flex items-center space-x-3 px-3 py-2 rounded-md ${
                isActive("/contact")
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              } transition-colors duration-200`}
            >
              <Mail size={20} />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
