"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import LoadingSpinner from "../components/LoadingSpinner";
import { motion } from "framer-motion";
import DownloadCVButton from "../components/DownloadCVButton";

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
        setError("Something went wrong. Please try again.");
        console.error("Error sending email:", error);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 pt-20"
    >
      {loading && <LoadingSpinner />}
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-blue-950 text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Let's Connect
        </motion.h1>

        {success && (
          <div className="bg-green-500 text-white p-4 rounded-lg mb-6">
            Thank you for your message! I will get back to you soon.
          </div>
        )}

        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

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
            <DownloadCVButton cvFileName="CV.docx.pdf" />
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
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="text-blue-950 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-gray-700 block text-sm font-medium mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="text-blue-950 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your message
              </label>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's your message?"
                className="text-blue-950 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
