import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { Section } from "./type";


export const links: { name: Section; hash: string }[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [

  {
    title: "Full-Stack Developer Intern",
    location: "Ideoversity , Lahore",
    description:
      "I worked as a Full Stack Developer Intern for 4 months.",
    icon: React.createElement(CgWorkAlt),
    date: "May, 2024 - Aug, 2024",
  },

  {
    title: "Full Stack Developer",
    location: "Xsuite Digital , Lahore",
    description:
      "I worked as a Full Stack Developer  for 8 months.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug, 2024 - April,2025",
  },
  {
    title: "Jr. Full Stack Developer",
    location: "Regent Business Strategies, Lahore",
    description:
      "I am currently working for Regent Business Strategies .",
    icon: React.createElement(CgWorkAlt),
    date: "May, 2025 - current",
  },

] as const;

export const projectsData = [

  {
    title: "MTLDispatch",
    description:
      "A Saas Dashboard Admin Panel for Chauffeur companies.",
    tags: ["MERN", "Javascript", "Tailwind", "Redux-Toolkit"],
    imageUrl: "/mtldispatch.webp",
    lnk: "https://mtldispatch.com/",
  },
  {
    title: "Flexible Budget Removals",
    description:
      "A travel-focused website offering flight deals, trip planning, and destination-based booking services.",
    tags: ["MERN", "Javascript", "Tailwind CSS", "GOOGLE LOCATIONS API"],
    imageUrl: "/FBR.png",
    lnk: "https://dashboard.flexiblebudgetremovals.com/",
  },
  {
    title: "Life Alarm Services",
    description:
      "Life Alarm Services is an ecommerce store built with Next.js, Prisma and  NeonDB(Postgre).",
    tags: ["Next.js", "Prisma", "NeonDB(Postgre)", "Tailwind CSS", "Typescript"],
    imageUrl: "/lifealarmservices.webp",
    lnk: "https://lifealarmservices.com/",
  },


] as const;

export const stackLayers = [
  {
    id: "foundation",
    label: "Foundation",
    tagline: "Languages & markup",
    accent: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.35)",
    skills: [
      { name: "TypeScript", icon: "typescript", iconSrc: "/ts.png" },
    ],
  },
  {
    id: "interface",
    label: "Interface",
    tagline: "UI & client state",
    accent: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.35)",
    skills: [
      { name: "React", icon: "react", iconSrc: "/reactjs.png" },
      { name: "Next.js", icon: "nextjs", iconSrc: "/nextjs.png" },
      { name: "Tailwind", icon: "tailwind", iconSrc: "/tailwind.png" },
    ],
  },
  {
    id: "runtime",
    label: "Runtime",
    tagline: "APIs & data",
    accent: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.35)",
    skills: [
      { name: "Node.js", icon: "nodejs", iconSrc: "/nodejs1.png" },
      { name: "MongoDB", icon: "mongodb", iconSrc: "/mongodb.jpg" },
    ],
  },
  {
    id: "ship",
    label: "Ship",
    tagline: "Version control & delivery",
    accent: "#10b981",
    glow: "rgba(16, 185, 129, 0.35)",
    skills: [
      { name: "Git", icon: "git", iconSrc: "/git.png" },
      { name: "Docker", icon: "docker", iconSrc: "/docker.png" },
      { name: "CI/CD Pipelines", icon: "cicd", iconSrc: "/cicd.png" },
    ],
  },
] as const;
