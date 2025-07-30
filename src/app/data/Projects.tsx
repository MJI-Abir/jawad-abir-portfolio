// File: src/data/projects.ts

export interface ProjectImage {
  src: string;
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
  image: string; // Main project image path - now points directly to assets
  tags: string[];
  images: ProjectImage[]; // Gallery images - now use direct asset paths
}

export const projects: Project[] = [
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
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
    image: "/assets/port1.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    images: [
      {
        src: "/assets/port1.jpg",
        alt: "E-commerce Homepage",
        caption: "Homepage with Featured Products",
      },
      {
        src: "/assets/port2.png",
        alt: "Product Detail Page",
        caption: "Product Detail View",
      },
      {
        src: "/assets/port3.png",
        alt: "Shopping Cart",
        caption: "Shopping Cart Interface",
      },
      {
        src: "/assets/port4.png",
        alt: "Checkout Process",
        caption: "Secure Checkout Flow",
      },
      {
        src: "/assets/port1.jpg",
        alt: "Admin Dashboard",
        caption: "Admin Product Management",
      },
      {
        src: "/assets/port2.png",
        alt: "Mobile View",
        caption: "Responsive Mobile Experience",
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
    image: "/assets/taskmaster-hero.png",
    tags: ["React", "Firebase", "Tailwind CSS"],
    images: [
      {
        src: "/assets/taskmaster-home.png",
        alt: "Task App Dashboard",
        caption: "Main Dashboard View",
      },
      {
        src: "/assets/taskmaster-home.png",
        alt: "Project Board",
        caption: "Update Interface with Drag-and-Drop",
      },
      {
        src: "/assets/taskmaster-home.png",
        alt: "Task Detail",
        caption: "Detailed Task View",
      },
      {
        src: "/assets/taskmaster-login.png",
        alt: "Login Page",
        caption: "Login Page",
      },
      {
        src: "/assets/taskmaster-signup.png",
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
    image: "/assets/portfolio-hero.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    images: [
      {
        src: "/assets/portfolio-hero.png",
        alt: "Portfolio Homepage",
        caption: "Hero Section with Animation",
      },
      {
        src: "/assets/portfolio-about-me.png",
        alt: "About Page",
        caption: "About Section with Bio",
      },
      {
        src: "/assets/portfolio-work.png",
        alt: "Projects Grid",
        caption: "Project Showcase Grid",
      },
      {
        src: "/assets/portfolio-project-details.png",
        alt: "Project Detail",
        caption: "Detailed Project View",
      },
      {
        src: "/assets/portfolio-contact.png",
        alt: "Contact Form",
        caption: "Interactive Contact Form",
      },
      {
        src: "/assets/portfolio-project-gallery.png",
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
