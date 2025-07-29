"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import Hero from "./assets/me3.jpg";
import TaskmasterHero from "./assets/taskmaster-hero.png";
import Port2 from "./assets/port2.png";
import PortfolioHero from "./assets/portfolio-hero.png";
import pic1 from "./assets/about1.jpeg";
import pic2 from "./assets/about2.jpeg";
import pic3 from "./assets/about3.jpeg";

// Define a custom interface for the home page projects
interface HomeProject {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: StaticImageData;
  tags: string[];
  techStack: string[];
  buildDate: string;
  projectType: string;
  liveUrl?: string;
  githubUrl?: string;
  images: {
    src: StaticImageData;
    alt: string;
    caption: string;
  }[];
}

const Home = () => {
  const projects: HomeProject[] = [
    {
      id: "1",
      title: "E-commerce Website",
      description:
        "A full-featured online shopping platform with user authentication, product catalog, and payment processing.",
      longDescription:
        "This e-commerce platform was designed to provide a seamless shopping experience with a focus on user experience and performance.",
      image: Port2,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      buildDate: "June 2023",
      projectType: "Web Application",
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/example/ecommerce",
      images: [
        {
          src: Port2,
          alt: "E-commerce Homepage",
          caption: "Homepage with Featured Products",
        },
      ],
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and team collaboration.",
      longDescription:
        "This task management application was designed to help teams track projects, manage tasks, and collaborate effectively.",
      image: TaskmasterHero,
      tags: ["React", "Firebase", "Tailwind CSS"],
      techStack: ["React", "Firebase", "Firestore", "Authentication"],
      buildDate: "November 2023",
      projectType: "Web Application",
      liveUrl: "https://task-management-example.com",
      githubUrl: "https://github.com/example/task-management",
      images: [
        {
          src: TaskmasterHero,
          alt: "Task App Dashboard",
          caption: "Main Dashboard View",
        },
      ],
    },
    {
      id: "3",
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing creative work and professional experience.",
      longDescription:
        "This portfolio website was designed to showcase creative work and professional achievements in an elegant, user-friendly interface.",
      image: PortfolioHero,
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      buildDate: "March 2024",
      projectType: "Website",
      liveUrl: "https://portfolio-example.com",
      githubUrl: "https://github.com/example/portfolio",
      images: [
        {
          src: PortfolioHero,
          alt: "Portfolio Homepage",
          caption: "Hero Section with Animation",
        },
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <Header />

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.div className="mb-8" variants={fadeInUp}>
          <Image
            src={Hero}
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
        </motion.div>
        <motion.h1
          className="text-blue-950 dark:text-white text-4xl md:text-6xl font-bold mb-2"
          variants={fadeInUp}
        >
          Jawad Abir
        </motion.h1>
        <motion.h2
          className="fancy-developer-title text-3xl md:text-5xl lg:text-7xl xl:text-8xl mb-8 leading-tight"
          variants={fadeInUp}
        >
          FULL STACK DEVELOPER
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <Link
            href="#work"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition duration-300 inline-block"
          >
            View My Work
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="about-section min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 flex flex-col justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - Images */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* First Row - 2 Images */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Image
                    src={pic2}
                    alt="Jawad Abir 1"
                    width={180}
                    height={220}
                    className="rounded-xl shadow-lg transition-all duration-300 w-full h-auto object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Image
                    src={pic1}
                    alt="Jawad Abir 2"
                    width={180}
                    height={220}
                    className="rounded-xl shadow-lg transition-all duration-300 w-full h-auto object-cover"
                  />
                </motion.div>
              </div>

              {/* Second Row - 1 Image */}
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-3/4"
                >
                  <Image
                    src={pic3}
                    alt="Jawad Abir 3"
                    width={280}
                    height={320}
                    className="rounded-xl shadow-lg transition-all duration-300 w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="about-title text-4xl md:text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Hi, I'm Jawad
              </motion.h2>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="about-text text-lg leading-relaxed">
                  I'm a passionate full-stack developer with over 5 years of
                  experience in creating beautiful and functional web
                  applications.
                </p>
                <p className="about-text text-lg leading-relaxed">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying a good cup of coffee while reading tech blogs.
                </p>

                <motion.div
                  className="pt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition duration-300 inline-block"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Recent Works Section */}
      <motion.section
        id="work"
        className="min-h-screen bg-white dark:bg-gray-800 py-16 flex flex-col justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-blue-950 dark:text-white text-3xl font-semibold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Recent Works
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md dark:shadow-gray-700 hover:shadow-xl dark:hover:shadow-gray-600 transition-all duration-300 transform hover:scale-105"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, zIndex: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative h-48 md:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-blue-950 dark:text-white text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 flex items-center group"
                  >
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="experience-section min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 py-20 flex flex-col justify-center overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="about-title text-4xl md:text-5xl font-bold text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          <div className="experience-timeline max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Current - Panjeree Publications */}
              <motion.div
                className="experience-card-modern md:mr-8 md:text-right"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="experience-dot"></div>
                <div className="experience-date-modern mb-4">
                  July 2025 - Present
                </div>
                <h3 className="experience-role-modern">
                  Software Engineer - EdTech
                </h3>
                <p className="experience-company-modern mb-3">
                  Panjeree Publications Ltd
                </p>
                <div className="experience-highlight">
                  Building scalable EdTech platform with Java Spring Boot &
                  Next.js
                </div>
              </motion.div>

              {/* Empty space for timeline */}
              <div className="hidden md:block"></div>

              {/* Empty space for timeline */}
              <div className="hidden md:block"></div>

              {/* G2i Inc */}
              <motion.div
                className="experience-card-modern md:ml-8"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="experience-dot"></div>
                <div className="experience-date-modern mb-4">
                  Oct 2024 - Feb 2025
                </div>
                <h3 className="experience-role-modern">
                  AI Data Training Developer
                </h3>
                <p className="experience-company-modern mb-3">
                  G2i Inc. (Remote)
                </p>
                <div className="experience-highlight">
                  AI model analysis, code optimization across Python, Swift,
                  JavaScript
                </div>
              </motion.div>

              {/* Amicsoft */}
              <motion.div
                className="experience-card-modern md:mr-8 md:text-right"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="experience-dot"></div>
                <div className="experience-date-modern mb-4">
                  May 2023 - Apr 2024
                </div>
                <h3 className="experience-role-modern">Full Stack Developer</h3>
                <p className="experience-company-modern mb-3">Amicsoft</p>
                <div className="experience-highlight">
                  Cross-platform apps with Flutter, React, Firebase integration
                </div>
              </motion.div>

              {/* Empty space for timeline */}
              <div className="hidden md:block"></div>

              {/* Empty space for timeline */}
              <div className="hidden md:block"></div>

              {/* University Research */}
              <motion.div
                className="experience-card-modern md:ml-8"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="experience-dot"></div>
                <div className="experience-date-modern mb-4">
                  Sep 2023 - Dec 2024
                </div>
                <h3 className="experience-role-modern">Research Assistant</h3>
                <p className="experience-company-modern mb-3">
                  University of Dhaka
                </p>
                <div className="experience-highlight">
                  Vehicular networks research with Deep Q-Networks & edge
                  computing
                </div>
              </motion.div>

              {/* Academic Affiliation */}
              <motion.div
                className="experience-card-modern md:mr-8 md:text-right"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="experience-dot"></div>
                <div className="experience-date-modern mb-4">
                  Nov 2021 - Apr 2023
                </div>
                <h3 className="experience-role-modern">
                  Junior Frontend Developer
                </h3>
                <p className="experience-company-modern mb-3">
                  Academic Affiliation
                </p>
                <div className="experience-highlight">
                  UI/UX design, prototyping, Next.js web applications
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tech Stack Summary */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex flex-wrap gap-3 justify-center">
              {[
                "Java Spring Boot",
                "Next.js",
                "React",
                "Flutter",
                "Python",
                "Firebase",
                "AI/ML",
                "UI/UX",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
};

export default Home;
