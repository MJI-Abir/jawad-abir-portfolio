"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "../components/ThemeToggle";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

type Project = {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  year: number;
  type: "design" | "development" | "all";
};

const projects: Project[] = [
  {
    id: 0,
    name: "Praxix - E-Learning Platform",
    description:
      "From academics to admissions — all your preparation in one platform. The country’s first personalized learning platform, powered by AI.",
    techStack: [
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Vue.js 3",
      "WebSocket (STOMP)",
      "Docker Compose",
      "JWT Authentication",
      "Pinecone",
      "MinIO",
      "Prometheus",
      "Grafana",
      "Pandoc",
      "XeLaTeX",
    ],
    year: 2025,
    type: "development",
  },
  {
    id: 1,
    name: "Event Management Website",
    description:
      "A full-featured event management platform with user authentication, event catalog, and ticket processing.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "JWT",
      "Tailwind CSS",
    ],
    year: 2023,
    type: "development",
  },
  {
    id: 2,
    name: "Task Management App",
    description:
      "A productivity application for managing tasks, projects, and team collaboration.",
    techStack: ["React", "Java Spring Boot", "MySQL", "Tailwind CSS"],
    year: 2023,
    type: "development",
  },
  {
    id: 3,
    name: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing creative work and professional experience.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
      "Serverless Functions",
    ],
    year: 2024,
    type: "development",
  },
];

export default function Work() {
  const [filter, setFilter] = useState<"all" | "design" | "development">("all");
  const router = useRouter();

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.type === filter
  );

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
            My Work
          </motion.h1>

          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-md inline-flex">
              <button
                onClick={() => setFilter("all")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === "all"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("development")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === "development"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Development
              </button>
              <button
                onClick={() => setFilter("design")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === "design"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Design
              </button>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  onClick={() => router.push(`/projects/${project.id}`)}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-blue-950 dark:text-white">
                        {project.name}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200">
                        View Project →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
