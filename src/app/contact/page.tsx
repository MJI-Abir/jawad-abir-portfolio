"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Download } from "lucide-react";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, email, message });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Jawad_Abir_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-blue-950 text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Let's Connect
        </motion.h1>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-blue-950 text-2xl font-semibold mb-4">
              Contact Information
            </h2>
            <p className="text-teal-950 mb-4">
              Feel free to reach out to me through any of the following
              channels:
            </p>
            <ul className="text-blue-950 space-y-2">
              <li>Email: mjiabir12007@gmail.com</li>
              <li>Phone: +880 1886866256</li>
              <li>Location: Dhaka, Bangladesh</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-blue-950 text-xl font-semibold mb-2">
                Connect with me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/jawad-abir"
                  className="text-blue-600 hover:text-blue-800"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.github.com/MJI-Abir"
                  className="text-blue-600 hover:text-blue-800"
                >
                  GitHub
                </a>
                <a
                  href="https://www.facebook.com/mji.abir.940"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Facebook
                </a>
              </div>
            </div>
            <motion.button
              onClick={handleDownloadCV}
              className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="text-gray-700 block text-sm font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="text-blue-950 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-blue-950 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="text-blue-950 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}
