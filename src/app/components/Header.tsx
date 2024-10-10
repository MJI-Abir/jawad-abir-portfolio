"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" passHref>
          
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text hover:cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Jawad Abir
          </motion.div>
          </Link>
          <div className="hidden md:flex space-x-8">
            {["Work", "About", "Contact"].map((item) => (
              <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg rounded-b-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {["Work", "About", "Contact"].map((item) => (
              <motion.div key={item} whileHover={{ x: 5 }} whileTap={{ x: 0 }}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-6 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
