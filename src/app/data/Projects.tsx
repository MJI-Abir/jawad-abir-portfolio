// File: src/data/projects.ts

import OcasioHero from "../assets/ocasio-hero.png";
import Ocasio2 from "../assets/ocasio-2.jpg";
import Ocasio3 from "../assets/ocasio-3.jpg";
import Ocasio4 from "../assets/ocasio-4.jpg";
import Ocasio5 from "../assets/ocasio-5.jpg";
import Ocasio6 from "../assets/ocasio-6.jpg";
import Ocasio7 from "../assets/ocasio-7.jpg";
import Ocasio8 from "../assets/ocasio-8.jpg";
import Ocasio9 from "../assets/ocasio-9.jpg";
import Ocasio10 from "../assets/ocasio-10.jpg";

import PraxixHero from "../assets/praxix_studymate_hero.jpg";
import PraxixHero11 from "../assets/praxix_hero11.png";
import PraxixHero12 from "../assets/praxix_hero12.png";
import PraxixHero13 from "../assets/praxix_hero13.png";

import TaskmasterHero from "../assets/taskmaster-hero.png";
import TaskmasterHome from "../assets/taskmaster-home.png";
import TaskmasterLogin from "../assets/taskmaster-login.png";
import TaskmasterSignup from "../assets/taskmaster-signup.png";

import PortfolioHero from "../assets/portfolio-hero.png";
import PortfolioAbout from "../assets/portfolio-about-me.png";
import PortfolioWork from "../assets/portfolio-work.png";
import PortfolioProjectDetails from "../assets/portfolio-project-details.png";
import PortfolioContact from "../assets/portfolio-contact.png";
import PortfolioMobile from "../assets/portfolio-project-gallery.png";

import { StaticImageData } from "next/image";
export interface ProjectImage {
  src: StaticImageData;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  buildDate: string;
  clientName?: string;
  projectType: string;
  liveUrl?: string;
  githubUrl?: string;
  image: StaticImageData; // Main project image path - now points directly to assets
  tags: string[];
  images: ProjectImage[]; // Gallery images - now use direct asset paths
}

export const projects: Project[] = [
  {
    id: "0",
    title: "Praxix - E-Learning Platform",
    description:
      "From academics to admissions — all your preparation in one platform. The country’s first personalized learning platform, powered by AI.",
    longDescription:
      "Praxix is a comprehensive e-learning platform built for Panjeree Publications Ltd., serving 10,000+ students across Bangladesh with 100,000+ MCQs across 25+ subjects. The platform features intelligent question selection with stem-based integrity constraints ensuring passage-based questions never split across pages, a three-tier gamified reward system with 7-day practice streak bonuses (+50 points), 5-consecutive-correct bonuses (+10 points, repeatable), and happy hour mechanics (7-9 PM, +5 points).\n\nThe application includes JWT-based authentication with RBAC supporting three user roles (Student, Admin, Super Admin), real-time WebSocket notifications for instant delivery of exam results and announcements to 5,000+ concurrent users, and an AI-powered chatbot using RAG architecture with Pinecone vector embeddings for Bangla curriculum support.\n\nKey technical achievements include optimizing database queries by eliminating N+1 problems through batch operations and JOIN FETCH, reducing practice session reward calculation from 2.5 seconds to 150ms (94% improvement). The platform implements adaptive MCQ selection maintaining pedagogical ratios (5:2:18 for question types) with dynamic backfill algorithms when insufficient questions exist. Three duplicate exam services (1,200+ lines) were refactored into a unified Strategy Pattern architecture, eliminating 800+ lines of code duplication.\n\nThe platform supports live exams with two-phase result publishing (immediate submission + scheduled leaderboard release), automated weekly (Saturday) and monthly (1st) point reset schedulers with reward history preservation for admin tracking, and anti-repetition system with three practice modes (RETRY_WRONG, RESET_AND_RETRY, NORMAL). Built with clean architecture principles and deployed on DigitalOcean with Docker Compose, achieving 99.9% uptime and serving 5,000+ concurrent users during peak hours with sub-second notification delivery.",
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
    buildDate: "September 2025 - Present",
    clientName: "Panjeree Publications Ltd.",
    projectType: "Web Application - EdTech Platform",
    liveUrl: "https://praxix.academy",
    githubUrl: "",
    image: PraxixHero,
    tags: [
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Vue.js",
      "WebSocket",
      "AI/ML",
      "Docker",
    ],
    images: [
      {
        src: PraxixHero11,
        alt: "Studymate Platform Overview",
        caption: "Complete platform interface showcasing all features",
      },
      {
        src: PraxixHero12,
        alt: "Student Dashboard",
        caption: "Student dashboard with progress tracking and statistics",
      },
      {
        src: PraxixHero13,
        alt: "Practice Session Interface",
        caption:
          "Interactive practice mode with real-time feedback and explanations",
      },
    ],
  },
  {
    id: "1",
    title: "Event Management Website",
    description:
      "A full-featured event management platform with user authentication, event catalog, and ticket processing.",
    longDescription:
      "This event management platform was designed to provide a seamless experience for users to browse, register, and manage events. The application includes features such as user authentication, event search and filtering, ticket purchasing functionality, secure checkout with Stripe integration, and an admin dashboard for managing events and attendees.\n\nThe front-end was built with React and uses context API for state management. The back-end utilizes Node.js with Express to create a RESTful API, with MongoDB serving as the database. User authentication is handled with JWT tokens for secure access.\n\nThe project was completed over a three-month period, with regular client feedback incorporated throughout the development process.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "JWT",
      "Tailwind CSS",
    ],
    buildDate: "June 2023",
    clientName: "RetailTech Inc.",
    projectType: "Web Application",
    liveUrl: "",
    githubUrl:
      "https://github.com/MJI-Abir/Ocasio-Full-stack-event-management-web-app",
    image: OcasioHero,
    tags: ["React", "Next.js", "Java Spring Boot", "MySQL", "Postman"],
    images: [
      {
        src: OcasioHero,
        alt: "Hero Section",
        caption: "All Pages together",
      },
      {
        src: Ocasio2,
        alt: "Trending Events",
        caption: "See which events are trending",
      },
      {
        src: Ocasio3,
        alt: "Upcoming Events",
        caption: "See upcoming events",
      },
      {
        src: Ocasio4,
        alt: "Footer",
        caption: "Footer",
      },
      {
        src: Ocasio5,
        alt: "Admin Dashboard",
        caption: "Edit your profile",
      },
      {
        src: Ocasio6,
        alt: "Your Events",
        caption: "See which events you are attending",
      },
      {
        src: Ocasio7,
        alt: "Home Page",
        caption: "Home Page",
      },
      {
        src: Ocasio8,
        alt: "FAQ Section",
        caption: "FAQ section",
      },
      {
        src: Ocasio9,
        alt: "Event Details View",
        caption: "Event Details View",
      },
      {
        src: Ocasio10,
        alt: "Create New Event View",
        caption: "Create New Event View",
      },
    ],
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A productivity application for managing tasks, projects, and team collaboration.",
    longDescription:
      "This task management application was designed to help teams track projects, manage tasks, and collaborate effectively. The app features a clean, intuitive interface that allows users to create project boards, add tasks with detailed descriptions, assign team members, set due dates, and track progress.\n\nThe application includes real-time updates using Firebase, ensuring all team members see the latest changes without refreshing the page. It also features file attachments, comments for team communication, and custom task labels for organization.\n\nThe dashboard provides analytics on project progress, task completion rates, and team productivity metrics. Notifications keep team members informed about task assignments, approaching deadlines, and updates to their assigned tasks.",
    techStack: ["React", "Java Spring Boot", "MySQL", "Tailwind CSS"],
    buildDate: "November 2023",
    projectType: "Web Application",
    liveUrl: "",
    githubUrl: "https://github.com/RaufunNazin/TaskMaster",
    image: TaskmasterHero,
    tags: ["React", "Firebase", "Tailwind CSS"],
    images: [
      {
        src: TaskmasterHome,
        alt: "Task App Dashboard",
        caption: "Main Dashboard View",
      },
      {
        src: TaskmasterHome,
        alt: "Project Board",
        caption: "Update Interface with Drag-and-Drop",
      },
      {
        src: TaskmasterHome,
        alt: "Task Detail",
        caption: "Detailed Task View",
      },
      {
        src: TaskmasterLogin,
        alt: "Login Page",
        caption: "Login Page",
      },
      {
        src: TaskmasterSignup,
        alt: "Signup Page",
        caption: "Signup Page",
      },
    ],
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing creative work and professional experience.",
    longDescription:
      "This portfolio website was designed to showcase creative work and professional achievements in an elegant, user-friendly interface. The site features a minimalist design that puts the focus on the content, with smooth animations and transitions enhancing the user experience without being distracting.\n\nBuilt with Next.js for optimal performance and SEO benefits, the site utilizes static generation for core pages while implementing server-side rendering for dynamic content. The responsive design ensures a seamless experience across all devices, from mobile phones to large desktop screens.\n\nTailwind CSS was used for styling, allowing for rapid development and consistent design throughout the site. Framer Motion adds sophisticated animations that respond to user interactions, creating an engaging yet professional experience.\n\nThe contact form integrates with a serverless function to handle form submissions securely, with email notifications sent directly to the site owner.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
      "Serverless Functions",
    ],
    buildDate: "March 2024",
    clientName: "Creative Studio XYZ",
    projectType: "Website",
    liveUrl: "https://iamjawadabir.netlify.app/",
    githubUrl: "https://github.com/MJI-Abir/jawad-abir-portfolio",
    image: PortfolioHero,
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    images: [
      {
        src: PortfolioHero,
        alt: "Portfolio Homepage",
        caption: "Hero Section with Animation",
      },
      {
        src: PortfolioAbout,
        alt: "About Page",
        caption: "About Section with Bio",
      },
      {
        src: PortfolioWork,
        alt: "Projects Grid",
        caption: "Project Showcase Grid",
      },
      {
        src: PortfolioProjectDetails,
        alt: "Project Detail",
        caption: "Detailed Project View",
      },
      {
        src: PortfolioContact,
        alt: "Contact Form",
        caption: "Interactive Contact Form",
      },
      {
        src: PortfolioMobile,
        alt: "Mobile View",
        caption: "Responsive Mobile Design",
      },
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getAllProjectIds = (): string[] => {
  return projects.map((project) => project.id);
};
