"use client";

import React, { useState, useRef, useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "../lib/data";
import Project from "./project";
import { useSectionInView } from "../lib/hooks";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-32 relative bg-white dark:bg-gray-950 overflow-hidden">
      {/* Decorative Noise/Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10">
        <SectionHeading>My projects</SectionHeading>

        <div className="flex flex-col max-w-5xl mx-auto px-4 divide-y divide-gray-900/10 dark:border-white/10">
          {projectsData.map((project, index) => (
            <Project
              key={index}
              {...project}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
              isActive={activeProject === index}
            />
          ))}
        </div>
      </div>

      {/* Floating Preview Image */}
      <motion.div
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          pointerEvents: "none",
        }}
        className="fixed z-50 hidden md:block w-[450px] h-[280px] overflow-hidden rounded-2xl shadow-2xl pointer-events-none border border-white/20 backdrop-blur-sm"
        initial={{ scale: 0, opacity: 0, rotate: -5 }}
        animate={{
          scale: activeProject !== null ? 1 : 0,
          opacity: activeProject !== null ? 1 : 0,
          rotate: activeProject !== null ? 0 : -5,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeProject === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover scale-110"
              quality={95}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
