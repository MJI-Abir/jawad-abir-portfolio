"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    id: 1,
    name: "E-commerce Platform",
    description:
      "A fully responsive e-commerce platform with advanced features.",
    techStack: ["React", "Node.js", "MongoDB"],
    year: 2023,
    type: "development",
  },
  {
    id: 2,
    name: "Brand Identity Design",
    description: "Complete brand identity design for a tech startup.",
    techStack: ["Illustrator", "Photoshop"],
    year: 2022,
    type: "design",
  },
  {
    id: 3,
    name: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application.",
    techStack: ["React Native", "Firebase"],
    year: 2023,
    type: "development",
  },
  {
    id: 4,
    name: "Corporate Website Redesign",
    description: "Modern redesign of a corporate website with improved UX.",
    techStack: ["Figma", "Sketch"],
    year: 2022,
    type: "design",
  },
  {
    id: 5,
    name: "AI-powered Chatbot",
    description: "Intelligent chatbot for customer support automation.",
    techStack: ["Python", "TensorFlow", "NLP"],
    year: 2023,
    type: "development",
  },
];

export default function Work() {
  const [filter, setFilter] = useState<"all" | "design" | "development">("all");

  const filteredProjects = projects.filter((project) =>
    filter === "all" ? true : project.type === filter
  );

  const projectCounts = {
    all: projects.length,
    design: projects.filter((p) => p.type === "design").length,
    development: projects.filter((p) => p.type === "development").length,
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
        <h1 className="text-blue-950 text-4xl font-bold mb-8 text-center">
          My Work
        </h1>

        <nav className="flex justify-center mb-12">
          {["all", "design", "development"].map((type) => (
            <motion.button
              key={type}
              onClick={() =>
                setFilter(type as "all" | "design" | "development")
              }
              className={`px-6 mx-2 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                filter === type
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
              <span className="text-sm font-normal text-gray-300 align-top ml-2">
                {projectCounts[type as keyof typeof projectCounts]}
              </span>
            </motion.button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg shadow-md p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {project.name}
                  </h2>
                  <span className="text-sm font-medium text-gray-500">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
