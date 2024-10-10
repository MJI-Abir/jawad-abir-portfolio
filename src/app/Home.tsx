"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "./assets/me.jpg";
import Port1 from "./assets/port1.jpg";
import Port2 from "./assets/port2.png";
import Port3 from "./assets/port3.png";
import Port4 from "./assets/port4.png";

export const Home = () => {
  const [page, setPage] = useState(0);

  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "A short description of Project 1",
      image: Port1,
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      name: "Project 2",
      description: "A short description of Project 2",
      image: Port2,
      tags: ["Vue.js", "Express", "PostgreSQL"],
    },
    {
      id: 3,
      name: "Project 3",
      description: "A short description of Project 3",
      image: Port3,
      tags: ["Angular", "Django", "MySQL"],
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
    <main>
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
          className="text-blue-950 text-4xl md:text-6xl font-bold mb-2"
          variants={fadeInUp}
        >
          Jawad Abir
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-gray-600 mb-8"
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
      <section id="work" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-blue-950 text-3xl font-semibold text-center mb-12"
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
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, zIndex: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative h-48 md:h-64">
                  <Image
                    src={project.image}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`#project-${project.id}`}
                    className="text-blue-500 hover:text-blue-600 flex items-center group"
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
      <section className="bg-gray-200 py-16 overflow-hidden">
        <div className="container mx-auto px-32">
          <motion.h2
            className="text-blue-950 text-3xl font-semibold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Project Showcases
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
            {/* <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md z-10 hover:bg-white transition-colors duration-300"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="text-blue-950 w-6 h-6" />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md z-10 hover:bg-white transition-colors duration-300"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="text-blue-950 w-6 h-6" />
            </button> */}
          </div>
        </div>
      </section>
    </main>
  );
};
