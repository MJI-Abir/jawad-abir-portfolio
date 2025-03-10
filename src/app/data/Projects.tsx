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
  image: string;
  tags: string[];
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Website",
    description:
      "A full-featured online shopping platform with user authentication, product catalog, and payment processing.",
    longDescription:
      "This e-commerce platform was designed to provide a seamless shopping experience with a focus on user experience and performance. The application includes features such as user authentication, product search and filtering, shopping cart functionality, secure checkout with Stripe integration, and an admin dashboard for managing products and orders.\n\nThe front-end was built with React and uses context API for state management. The back-end utilizes Node.js with Express to create a RESTful API, with MongoDB serving as the database. User authentication is handled with JWT tokens for secure access.\n\nThe project was completed over a three-month period, with regular client feedback incorporated throughout the development process.",
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
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    images: [
      {
        src: "/projects/ecommerce/home.jpg",
        alt: "E-commerce Homepage",
        caption: "Homepage with Featured Products",
      },
      {
        src: "/projects/ecommerce/product.jpg",
        alt: "Product Detail Page",
        caption: "Product Detail View",
      },
      {
        src: "/projects/ecommerce/cart.jpg",
        alt: "Shopping Cart",
        caption: "Shopping Cart Interface",
      },
      {
        src: "/projects/ecommerce/checkout.jpg",
        alt: "Checkout Process",
        caption: "Secure Checkout Flow",
      },
      {
        src: "/projects/ecommerce/admin.jpg",
        alt: "Admin Dashboard",
        caption: "Admin Product Management",
      },
      {
        src: "/projects/ecommerce/mobile.jpg",
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
    techStack: [
      "React",
      "Firebase",
      "Firestore",
      "Authentication",
      "Cloud Functions",
      "Tailwind CSS",
    ],
    buildDate: "November 2023",
    projectType: "Web Application",
    liveUrl: "",
    githubUrl: "https://github.com/RaufunNazin/TaskMaster",
    image: "/projects/task-app.jpg",
    tags: ["React", "Firebase", "Tailwind CSS"],
    images: [
      {
        src: "/projects/task-app/dashboard.jpg",
        alt: "Task App Dashboard",
        caption: "Main Dashboard View",
      },
      {
        src: "/projects/task-app/board.jpg",
        alt: "Project Board",
        caption: "Kanban Board Interface",
      },
      {
        src: "/projects/task-app/task-detail.jpg",
        alt: "Task Detail",
        caption: "Detailed Task View",
      },
      {
        src: "/projects/task-app/calendar.jpg",
        alt: "Calendar View",
        caption: "Calendar Schedule View",
      },
      {
        src: "/projects/task-app/analytics.jpg",
        alt: "Analytics Dashboard",
        caption: "Project Analytics and Metrics",
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
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    images: [
      {
        src: "/projects/portfolio/home.jpg",
        alt: "Portfolio Homepage",
        caption: "Hero Section with Animation",
      },
      {
        src: "/projects/portfolio/about.jpg",
        alt: "About Page",
        caption: "About Section with Bio",
      },
      {
        src: "/projects/portfolio/projects.jpg",
        alt: "Projects Grid",
        caption: "Project Showcase Grid",
      },
      {
        src: "/projects/portfolio/project-detail.jpg",
        alt: "Project Detail",
        caption: "Detailed Project View",
      },
      {
        src: "/projects/portfolio/contact.jpg",
        alt: "Contact Form",
        caption: "Interactive Contact Form",
      },
      {
        src: "/projects/portfolio/mobile.jpg",
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
