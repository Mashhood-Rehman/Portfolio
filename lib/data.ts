import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Patientary from "../public/patientary.png";
import Semtech from "../public/Semtech.png";
import whizlabs from "../public/Whizlabs.png";
import wishtender from "../public/wishtender.png";

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
    title: "Cart-Using-Redux-Toolkit",
    description:
      "A small frontend sample with Redux Toolkit intgration",
    tags: ["React.js", "Javascript",  "Tailwind", "Redux-Toolkit"],
    imageUrl: "/image.png",
    lnk: "https://cart-using-redux-toolkit.vercel.app/",
  },
 
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux-Toolkit",
  "Express",
  "Framer Motion",
] as const;
