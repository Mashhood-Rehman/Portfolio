"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

type ProjectProps = {
  title: string;
  tags: readonly string[];
  lnk: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isActive: boolean;
  imageUrl: string; // Keep these for the type spread
  description: string;
};

export default function Project({
  title,
  tags,
  lnk,
  onMouseEnter,
  onMouseLeave,
  isActive,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    // Magnetic pull effect
    rotateX.set(distY * 0.1);
    rotateY.set(distX * 0.1);
  }

  function handleMouseLeave() {
    onMouseLeave();
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <Link
      target="_blank"
      href={lnk}
      className="group block border-b border-gray-900/10 dark:border-white/10 last:border-0"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          x: springY,
          y: springX,
        }}
        className="py-10 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 group-hover:px-4"
      >
        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
          <h3 className={`text-4xl md:text-7xl font-bold tracking-tighter transition-all duration-500 ${isActive
            ? "text-gray-900 dark:text-white"
            : "text-gray-900/20 dark:text-white/20"
            }`}>
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs md:text-sm font-medium border rounded-full px-3 py-1 transition-all duration-500 ${isActive
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent"
                  : "border-gray-900/20 dark:border-white/20 text-gray-900/40 dark:text-white/40"
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={`hidden md:block text-sm font-bold tracking-widest uppercase transition-all duration-500 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
          View Project &rarr;
        </div>
      </motion.div>
    </Link>
  );
}
