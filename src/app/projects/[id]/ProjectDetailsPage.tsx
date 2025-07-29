"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project, getProjectById } from "@/app/data/Projects";
import { ChevronLeft } from "lucide-react";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

// Import the project images for the home page
import Port1 from "@/app/assets/port1.jpg";
import TaskmasterHero from "@/app/assets/taskmaster-hero.png";
import PortfolioHero from "@/app/assets/portfolio-hero.png";

// Import Task Management App images
import TaskmasterHome from "@/app/assets/taskmaster-home.png";
import TaskmasterLogin from "@/app/assets/taskmaster-login.png";
import TaskmasterSignup from "@/app/assets/taskmaster-signup.png";

// Import Portfolio images
import PortfolioWork from "@/app/assets/portfolio-work.png";
import PortfolioAboutMe from "@/app/assets/portfolio-about-me.png";
import PortfolioContact from "@/app/assets/portfolio-contact.png";
import PortfolioProjectDetails from "@/app/assets/portfolio-project-details.png";
import PortfolioProjectGallery from "@/app/assets/portfolio-project-gallery.png";

// Map of project IDs to their corresponding hero image imports
const projectImageMap: Record<string, any> = {
  "1": Port1,
  "2": TaskmasterHero,
  "3": PortfolioHero,
};

// Map of project IDs to their corresponding gallery images
const projectGalleryMap: Record<string, Record<string, any>> = {
  "1": {
    "/projects/ecommerce/home.jpg": Port1,
    "/projects/ecommerce/product.jpg": Port1,
    "/projects/ecommerce/cart.jpg": Port1,
    "/projects/ecommerce/checkout.jpg": Port1,
    "/projects/ecommerce/admin.jpg": Port1,
    "/projects/ecommerce/mobile.jpg": Port1,
  },
  "2": {
    "/projects/task-app/dashboard.jpg": TaskmasterHome,
    "/projects/task-app/board.jpg": TaskmasterHome,
    "/projects/task-app/task-detail.jpg": TaskmasterHome,
    "/projects/task-app/calendar.jpg": TaskmasterLogin,
    "/projects/task-app/analytics.jpg": TaskmasterSignup,
  },
  "3": {
    "/projects/portfolio/home.jpg": PortfolioHero,
    "/projects/portfolio/about.jpg": PortfolioAboutMe,
    "/projects/portfolio/projects.jpg": PortfolioWork,
    "/projects/portfolio/project-detail.jpg": PortfolioProjectDetails,
    "/projects/portfolio/contact.jpg": PortfolioContact,
    "/projects/portfolio/mobile.jpg": PortfolioProjectGallery,
  },
};

// Framer Motion variants for animations
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ProjectDetailsPage = ({ params }: { params: { id: string } }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Load the project data
    const loadProject = async () => {
      setLoading(true);
      try {
        const projectData = getProjectById(params.id);

        if (projectData) {
          setProject(projectData);

          // Set the first image as selected by default
          if (projectData.images && projectData.images.length > 0) {
            // Store the image path in selectedImage
            setSelectedImage(projectData.images[0].src);
          }
        }
      } catch (error) {
        console.error("Error loading project:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl text-blue-950 dark:text-gray-100">
          Project not found
        </h2>
      </div>
    );
  }

  return (
    <>
      <ThemeToggle />
      <Header />
      <div className="bg-gray-100 dark:bg-gray-900 text-blue-950 dark:text-gray-100 py-16 transition-colors duration-200">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Back to Projects Button */}
          <Link
            href="/#work"
            className="inline-flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8 transition-colors font-medium"
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Back to Projects
          </Link>

          {/* Project Title */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-blue-950 dark:text-white"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {project.title}
          </motion.h1>

          {/* Project Banner */}
          <motion.div
            className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] relative rounded-2xl overflow-hidden mb-16 shadow-lg dark:shadow-gray-800"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {selectedImage && (
              <Image
                src={
                  selectedImage && projectGalleryMap[params.id]?.[selectedImage]
                    ? projectGalleryMap[params.id][selectedImage]
                    : projectImageMap[params.id]
                }
                alt={project.title}
                fill
                style={{ objectFit: "contain" }}
                className="transition-all duration-700 ease-in-out bg-white dark:bg-gray-800"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            )}
          </motion.div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {/* Project Description */}
            <motion.div
              className="md:col-span-2"
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              <h2 className="text-3xl font-semibold mb-4 text-blue-950 dark:text-white">
                Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Project Details */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md dark:shadow-gray-800"
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-950 dark:text-white">
                Project Details
              </h3>

              <div className="mb-5">
                <h4 className="text-blue-500 dark:text-blue-400 text-sm font-medium mb-2">
                  Project Type
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.projectType}
                </p>
              </div>

              {project.clientName && (
                <div className="mb-5">
                  <h4 className="text-blue-500 dark:text-blue-400 text-sm font-medium mb-2">
                    Client
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.clientName}
                  </p>
                </div>
              )}

              <div className="mb-5">
                <h4 className="text-blue-500 dark:text-blue-400 text-sm font-medium mb-2">
                  Completed
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.buildDate}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-blue-500 dark:text-blue-400 text-sm font-medium mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:shadow-lg transition-all"
                  >
                    View Live Site
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-blue-950 dark:text-white py-3 px-4 rounded-lg text-center font-medium hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all"
                  >
                    View Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Image Gallery */}
          <motion.div
            className="mb-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <h2 className="text-3xl font-semibold mb-8 text-blue-950 dark:text-white">
              Project Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="cursor-pointer group"
                  variants={fadeIn}
                  onClick={() => setSelectedImage(image.src)}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div
                    className={`relative h-64 rounded-2xl overflow-hidden shadow-md dark:shadow-gray-800 transition-all duration-300 group-hover:shadow-xl ${
                      selectedImage === image.src ? "ring-4 ring-blue-500" : ""
                    }`}
                  >
                    <Image
                      src={
                        projectGalleryMap[params.id]?.[image.src] ||
                        projectImageMap[params.id]
                      }
                      alt={image.alt}
                      fill
                      style={{ objectFit: "contain" }}
                      className="bg-white dark:bg-gray-800"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    />
                  </div>
                  <p className="mt-3 text-center text-gray-700 dark:text-gray-300 font-medium">
                    {image.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-10 text-center shadow-md dark:shadow-gray-800"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-950 dark:text-white">
              Interested in working together?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              If you&apos;re looking for a developer to help bring your next
              project to life, I&apos;d love to hear from you!
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition duration-300 inline-block"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;
