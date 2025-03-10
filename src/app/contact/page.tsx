"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import LoadingSpinner from "../components/LoadingSpinner";
import { motion } from "framer-motion";
import DownloadCVButton from "../components/DownloadCVButton";
import { ThemeToggle } from "../components/ThemeToggle";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Replace these with your actual EmailJS service ID, template ID, and public key
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "", // Replace with your EmailJS service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "", // Replace with your EmailJS template ID
        {
          from_name: form.name,
          to_name: "Jawad Abir",
          from_email: form.email,
          to_email: "iamjawadabir@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);

        // Reset form
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        setError("Something went wrong. Please try again later.");
        console.error(error);
      });
  };

  return (
    <>
      <ThemeToggle />
      <Header />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 pb-16 transition-colors duration-200">
        <div className="container mx-auto px-4 py-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-blue-950 dark:text-white text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-blue-950 dark:text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      iamjawadabir@gmail.com
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      +880 1886866256
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                      Location
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                  <div className="pt-4">
                    <DownloadCVButton cvFileName="CV.docx.pdf" />
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold text-blue-950 dark:text-white mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition duration-300 flex justify-center items-center"
                    >
                      {loading ? <LoadingSpinner /> : "Send Message"}
                    </button>
                  </div>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-3 rounded-lg text-sm"
                    >
                      Your message has been sent successfully! I'll get back to
                      you soon.
                    </motion.div>
                  )}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-3 rounded-lg text-sm"
                    >
                      {error}
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
