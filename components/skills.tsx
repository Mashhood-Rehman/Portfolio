"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";

const typescriptImg = "/ts.png";
const reactImg = "/reactjs.png";
const nextjsImg = "/nextjs.png";
const tailwindImg = "/tailwind.png";
const nodejsImg = "/nodejs1.png";
const mongodbImg = "/mongodb.jpg";
const gitImg = "/git.png";
const dockerImg = "/docker.png";
const cicdImg = "/cicd.png";

const iconBubbleClass =
  "flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.06] bg-white p-1.5 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.1)] sm:h-9 sm:w-9 sm:p-2";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(320);

  useEffect(() => {
    const box = containerRef.current;
    if (!box) return;

    const observer = new ResizeObserver(([entry]) => {
      setSize(entry.contentRect.width);
    });

    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  const innerRadius = size * 0.4;
  const outerRadius = size * 0.52;
  const hubSize = Math.max(44, size * 0.16);

  function placeOnCircle(angle: number, radius: number, children: React.ReactNode) {
    return (
      <div
        className="absolute left-1/2 top-1/2 h-0 w-0"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <div
          className="absolute left-0 top-0"
          style={{
            transform: `translate(-50%, -50%) translateY(-${radius}px)`,
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <section
      id="skills"
      ref={ref}
      className="relative mb-16 w-full max-w-6xl scroll-mt-28 sm:mb-24"
    >
      <SectionHeading>Tech stack</SectionHeading>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* LEFT — text about my stack */}
        <motion.div
          className="leading-7 text-gray-700"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-base sm:text-lg">
            I build full-stack web apps with a modern, production-ready stack.
            My go-to setup is the{" "}
            <span className="font-semibold">
              MERN stack
            </span>{" "}
            — MongoDB, Express, React, and Node.js — for scalable backends and
            dynamic frontends.
          </p>

          <p className="mb-4 text-base sm:text-lg">
            For newer projects I use{" "}
            <span className="font-semibold">
              Next.js
            </span>{" "}
            with{" "}
            <span className="font-semibold">
              TypeScript
            </span>{" "}
            to get server-side rendering, better performance, and type-safe
            code from day one.
          </p>

          <p className="mb-4 text-base sm:text-lg">
            I containerize apps with{" "}
            <span className="font-semibold">
              Docker
            </span>
            , automate deployments through{" "}
            <span className="font-semibold">
              CI/CD pipelines
            </span>
            , and use{" "}
            <span className="font-semibold">
              GitHub Actions
            </span>{" "}
            to run tests and ship code reliably.
          </p>

          <p className="text-base sm:text-lg">
            Everything lives on{" "}
            <span className="font-semibold">
              GitHub
            </span>{" "}
            — version control, collaboration, and automated workflows all in
            one place.
          </p>
        </motion.div>

        {/* RIGHT — circular orbit diagram (unchanged) */}
        <div className="flex flex-col items-center">
          <motion.div
            ref={containerRef}
            className="relative aspect-square w-[min(85vw,18rem)] sm:w-[min(70vw,22rem)]"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
        {/* Inner circle line */}
        <div
          className="absolute left-1/2 top-1/2 rounded-full border border-gray-200/60"
          style={{
            width: innerRadius * 2,
            height: innerRadius * 2,
            transform: "translate(-50%, -50%)",
          }}
          aria-hidden
        />

        {/* Outer circle line */}
        <div
          className="absolute left-1/2 top-1/2 rounded-full border border-gray-200/60"
          style={{
            width: outerRadius * 2,
            height: outerRadius * 2,
            transform: "translate(-50%, -50%)",
          }}
          aria-hidden
        />

        {/* INNER RING — spins clockwise, icons stay upright */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {placeOnCircle(
            0,
            innerRadius,
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
              <div className={iconBubbleClass} title="TypeScript">
                <Image src={typescriptImg} alt="TypeScript" width={32} height={32} className="h-full w-full object-contain" />
              </div>
            </motion.div>
          )}

          {placeOnCircle(
            72,
            innerRadius,
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
              <div className={iconBubbleClass} title="React">
                <Image src={reactImg} alt="React" width={32} height={32} className="h-full w-full object-contain" />
              </div>
            </motion.div>
          )}

          {placeOnCircle(
            144,
            innerRadius,
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
              <div className={iconBubbleClass} title="Next.js">
                <Image src={nextjsImg} alt="Next.js" width={32} height={32} className="h-full w-full object-contain" />
              </div>
            </motion.div>
          )}

          {placeOnCircle(
            216,
            innerRadius,
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
              <div className={iconBubbleClass} title="Tailwind">
                <Image src={tailwindImg} alt="Tailwind" width={32} height={32} className="h-full w-full object-contain" />
              </div>
            </motion.div>
          )}

          {placeOnCircle(
            288,
            innerRadius,
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
              <div className={iconBubbleClass} title="Node.js">
                <Image src={nodejsImg} alt="Node.js" width={32} height={32} className="h-full w-full object-contain" />
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* OUTER RING — spins counter-clockwise, icons stay upright */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
        >
          {placeOnCircle(
            45,
            outerRadius,
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 52, repeat: Infinity, ease: "linear" }}>
              <div className={iconBubbleClass} title="MongoDB">
                <Image src={mongodbImg} alt="MongoDB" width={32} height={32} className="h-full w-full object-contain" />
              </div>
            </motion.div>
          )}

          {placeOnCircle(
            135,
            outerRadius,
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 52, repeat: Infinity, ease: "linear" }}>
              <div className={iconBubbleClass} title="Git">
                <Image src={gitImg} alt="Git" width={32} height={32} className="h-full w-full object-contain" />
              </div>
            </motion.div>
          )}

          {placeOnCircle(
            225,
            outerRadius,
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 52, repeat: Infinity, ease: "linear" }}>
              <div className={iconBubbleClass} title="Docker">
                <Image src={dockerImg} alt="Docker" width={32} height={32} className="h-full w-full object-contain" />
              </div>
            </motion.div>
          )}

          {placeOnCircle(
            315,
            outerRadius,
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 52, repeat: Infinity, ease: "linear" }}>
              <div className={iconBubbleClass} title="CI/CD Pipelines">
                <Image src={cicdImg} alt="CI/CD Pipelines" width={32} height={32} className="h-full w-full object-contain" />
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Center hub */}
        <div
          className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-900 shadow-md"
          style={{ width: hubSize, height: hubSize }}
        >
          <span className="text-center text-[0.45rem] font-bold uppercase leading-tight tracking-widest text-white sm:text-[0.5rem]">
            Tech
            <br />
            Stack
          </span>
        </div>
      </motion.div>

          <motion.p
            className="mt-5 text-center font-mono text-[0.6rem] uppercase tracking-[0.25em] text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            9 technologies
          </motion.p>
        </div>
      </div>
    </section>
  );
}
