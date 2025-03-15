import React from "react";
import { CgWorkAlt } from "react-icons/cg";


export const links = [
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
    title: "Full-Stack Developer",
    location: "Ideoversity , Lahore",
    description:
      "I worked as a Full-Stack developer for 4 months .",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
 
  {
    title: "Full-Stack Developer",
    location: "Xsuite Digital , Lahore",
    description:
      "I am currently working as a Full-Stack developer at Xsuite Digital  .",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
 
] as const;

export const projectsData = [

  {
    title: "Jobify",
    description:
      "A small frontend project in typescript with Google-auth.",
    tags: ["Next.js", "TypeScript",  "Tailwind", "Google-auth"],
    imageUrl: "/jobify.jpg",
    lnk: "https://job-portal-mu-pied.vercel.app/",
  },
  {
    title: "Fooderers-A FUll Stack Restaurant Website",
    description:
      "A Full Stack Website whole cooked in MERN with Redux Toolkit and Stripe",
    tags: ["MERN", "STRIPE",  "Tailwind CSS", "Redux-Toolkit"],
    imageUrl: "/Fooderers.webp",
    lnk: "https://restaurant-vh77.vercel.app/",
  },
  {
    title: "Chatmate-A realtime Chat application",
    description:
      "A FUll Stack project built in MERN with pure authentication and Socket.io",
    tags: ["Tailwind CSS", "MERN",  "Socket.io", "Zustand"],
    imageUrl: "/Chatmate.webp",
    lnk: "https://chat-mate-chi.vercel.app/",
  },
 
 
] as const;

export const skillsData = [
  "JavaScript",
  "Docker",
  "CI/CD",
  "TypeScript",
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
  "Framer Motion",
] as const;
