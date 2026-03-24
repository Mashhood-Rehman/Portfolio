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
      "I worked as a Full-Stack developer Intern for 4 months .",
    icon: React.createElement(CgWorkAlt),
    date: "May, 2024 - Aug, 2024",
  },

  {
    title: "Frontend Developer",
    location: "Xsuite Digital , Lahore",
    description:
      "I worked as a Frontend developer  for 8 months .",
    icon: React.createElement(CgWorkAlt),
    date: "Aug, 2024 - April,2025",
  },
  {
    title: "Full Stack Developer",
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
    title: "Trekso",
    description:
      "A travel-focused website offering flight deals, trip planning, and destination-based booking services.",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "PostgreSQL"],
    imageUrl: "/trekso.webp",
    lnk: "https://trekso.fr/",
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

export const skillsData = [
  "JavaScript",
  "Docker",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "HTML",
  "CSS",
  "Tailwind",
  "MongoDB",
  "Redux-Toolkit",
  "Express",
] as const;
