"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import pic1 from "../assets/about1.jpeg";
import pic2 from "../assets/about2.jpeg";
import pic3 from "../assets/about3.jpeg";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 pt-20"
    >
      <div className=" container mx-auto px-4 py-16">
        <motion.div
          className="relative h-96 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Image
            src={pic2}
            alt="Jawad Abir 1"
            width={300}
            height={400}
            className="absolute left-1/4 top-0 rounded-lg shadow-lg z-10"
          />
          <Image
            src={pic1}
            alt="Jawad Abir 2"
            width={300}
            height={400}
            className="absolute left-2/4 top-8 rounded-lg shadow-lg z-20"
          />
          <Image
            src={pic3}
            alt="Jawad Abir 3"
            width={300}
            height={400}
            className="absolute left-3/4 top-16 rounded-lg shadow-lg z-30"
          />
        </motion.div>

        <motion.h1
          className=" text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hi, I'm Jawad Abir
        </motion.h1>

        <motion.div
          className="font-mono text-justify text-blue-950 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-lg mb-6">
            I'm a passionate full-stack developer with over 5 years of
            experience in creating beautiful and functional web applications. I
            specialize in React, Node.js, and modern web technologies.
          </p>
          <p className="text-lg mb-6">
            My journey in web development started when I built my first website
            for a local business. Since then, I've been constantly learning and
            improving my skills to deliver high-quality solutions to my clients.
          </p>
          <p className="text-lg mb-8">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying a good cup of
            coffee while reading tech blogs.
          </p>
          <div className="text-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
