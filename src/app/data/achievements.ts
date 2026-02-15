export type AchievementCategory =
  | "hackathon"
  | "academic"
  | "athletic"
  | "certification"
  | "publication";

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: AchievementCategory;
  description: string;
  highlight: string; // bold stat, e.g. "1st Place", "Band 8.0"
  featured?: boolean; // one item gets the big editorial spotlight
  url?: string;
}

export const achievements: Achievement[] = [
  {
    id: "a1",
    title: "IELTS Academic",
    organization: "British Council",
    date: "November 2025",
    category: "certification",
    description:
      "Overall band 8.0. Reading 9.0, Listening 8.5, Writing 7.5, Speaking 7.0.",
    highlight: "Band 8.0",
    featured: true,
  },
  {
    id: "a2",
    title: "Research Paper Published",
    organization: "IEEE Xplore",
    date: "March 2024",
    category: "publication",
    description:
      "Published on Deep Q-Network based Task Offloading in Vehicular Edge Computing Networks.",
    highlight: "IEEE Access",
    url: "https://ieeexplore.ieee.org",
  },
  {
    id: "a3",
    title: "Finalist — Code Samurai National Hackathon",
    organization: "BASIS SoftExpo",
    date: "February 2024",
    category: "hackathon",
    description:
      "Built a real-time disaster response coordination system using Spring Boot and WebSocket in 24 hours. Competed against 120+ teams nationwide.",
    highlight: "Top 20",
  },
  {
    id: "a4",
    title: "Runner-up — IUT ICT Fest",
    organization: "IUT ICT Fest",
    date: "October 2023",
    category: "hackathon",
    description:
      "AI-powered crop disease detection with fine-tuned ResNet and React Native frontend.",
    highlight: "2nd Place",
  },
  {
    id: "a6",
    title: "Dhaka Half-Marathon Finisher",
    organization: "Dhaka Marathon",
    date: "January 2024",
    category: "athletic",
    description: "Completed 21km under 2 hours on first organized race entry.",
    highlight: "21 km",
  },
];
