import Link from "next/link";
import { Facebook, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Jawad Abir</h3>
            <p className="text-blue-200 mb-4">
              Crafting digital experiences with code and creativity
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.github.com/MJI-Abir"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/jawad-abir"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/mji.abir.940/"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Work", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-blue-200 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="text-blue-200 mb-2">Email: mjiabir12007.com</p>
            <p className="text-blue-200 mb-4">Phone: +880 1886866256</p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300 inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-400 text-center text-blue-200">
          <p>&copy; 2024 Jawad Abir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
