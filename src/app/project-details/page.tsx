"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";

// Mock projects data (replace with actual data fetching logic)
const projects = [
  {
    id: 1,
    name: "E-commerce Platform",
    description:
      "A fully responsive e-commerce platform with advanced features.",
    longDescription:
      "This e-commerce platform revolutionizes online shopping with its intuitive design and powerful features. Built with scalability in mind, it offers a seamless experience for both customers and administrators.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
    specialFeatures: [
      {
        name: "AI-Powered Recommendations",
        description:
          "Utilizes machine learning algorithms to provide personalized product recommendations.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Real-time Inventory Management",
        description:
          "Seamlessly tracks and updates inventory across multiple channels in real-time.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Advanced Analytics Dashboard",
        description:
          "Provides comprehensive insights into sales, customer behavior, and market trends.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  // Add more projects here
];

export default function Page() {
  const { id } = useParams();
  const [project, setProject] = useState(projects[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const projectId = parseInt(id as string, 10);
    const foundProject = projects.find((p) => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  const nextProjectId = (project.id % projects.length) + 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 pt-20"
    >
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <motion.h1
            className="text-6xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {project.name}
          </motion.h1>
          <motion.p
            className="text-2xl text-center max-w-2xl px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {project.description}
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Project Showcase
          </h2>
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="aspect-w-16 aspect-h-9 w-full"
              >
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`Project image ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            What makes {project.name} special
          </h2>
          <div className="grid grid-cols-6 gap-8">
            {project.specialFeatures.map((feature, index) => (
              <motion.div
                key={feature.name}
                className={`bg-white rounded-lg shadow-md overflow-hidden ${
                  index === 0
                    ? "col-span-4 row-span-2"
                    : index === 1
                    ? "col-span-2 row-span-1"
                    : "col-span-3 row-span-1"
                }`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
              >
                <div className="relative h-48">
                  <Image
                    src={feature.image}
                    alt={feature.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Project Demo</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={project.videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </motion.div>

        <div className="text-center">
          <Link href={`/project/${nextProjectId}`}>
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next Project
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
