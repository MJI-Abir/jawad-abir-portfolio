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
import Port1 from "./assets/port1.jpg";
import Port2 from "./assets/port2.png";
import Port3 from "./assets/port3.png";

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
  const [page, setPage] = useState(0);

  const projects: HomeProject[] = [
    {
      id: "1",
      title: "E-commerce Website",
      description:
        "A full-featured online shopping platform with user authentication, product catalog, and payment processing.",
      longDescription:
        "This e-commerce platform was designed to provide a seamless shopping experience with a focus on user experience and performance.",
      image: Port1,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      buildDate: "June 2023",
      projectType: "Web Application",
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/example/ecommerce",
      images: [
        {
          src: Port1,
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
      image: Port2,
      tags: ["React", "Firebase", "Tailwind CSS"],
      techStack: ["React", "Firebase", "Firestore", "Authentication"],
      buildDate: "November 2023",
      projectType: "Web Application",
      liveUrl: "https://task-management-example.com",
      githubUrl: "https://github.com/example/task-management",
      images: [
        {
          src: Port2,
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
      image: Port3,
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      buildDate: "March 2024",
      projectType: "Website",
      liveUrl: "https://portfolio-example.com",
      githubUrl: "https://github.com/example/portfolio",
      images: [
        {
          src: Port3,
          alt: "Portfolio Homepage",
          caption: "Hero Section with Animation",
        },
      ],
    },
  ];

  const showcases = [
    { id: 1, title: "Project A Showcase", videoId: "dQw4w9WgXcQ" },
    { id: 2, title: "Project B Demo", videoId: "dQw4w9WgXcQ" },
    { id: 3, title: "Project C Presentation", videoId: "dQw4w9WgXcQ" },
    { id: 4, title: "Project D Walkthrough", videoId: "dQw4w9WgXcQ" },
    { id: 5, title: "Project E Overview", videoId: "dQw4w9WgXcQ" },
    { id: 6, title: "Project F Highlights", videoId: "dQw4w9WgXcQ" },
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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setPage(
      (prevPage) =>
        (prevPage + newDirection + showcases.length) % showcases.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <Header />

      {/* Hero Section */}
      <motion.section
        className="container mx-auto px-6 pt-32 pb-16 text-center"
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
          className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8"
          variants={fadeInUp}
        >
          Full Stack Developer
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <Link
            href="#work"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition duration-300 inline-block"
          >
            View My Work
          </Link>
        </motion.div>
      </motion.section>

      {/* Recent Works Section */}
      <section id="work" className="bg-white dark:bg-gray-800 py-16">
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
      </section>

      {/* Video Showcase Section */}
      <section className="bg-gray-200 dark:bg-gray-900 py-16 overflow-hidden">
        <div className="container mx-auto px-32">
          <motion.h2
            className="text-blue-950 dark:text-white text-3xl font-semibold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence initial={false} custom={1}>
              <motion.div
                key={page}
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 flex justify-center space-x-6"
              >
                {[
                  showcases[page],
                  showcases[(page + 1) % showcases.length],
                  showcases[(page + 2) % showcases.length],
                ].map((showcase) => (
                  <motion.div
                    key={showcase.id}
                    className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                      <div className="aspect-w-16 aspect-h-9">
                        <iframe
                          src={`https://www.youtube.com/embed/${showcase.videoId}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                      <div className="p-4">
                        <h3 className="text-blue-950 text-lg font-semibold">
                          {showcase.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
