"use client"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "../lib/type";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() > 1000) {
    }
  }, [inView, sectionName]);

  return {
    ref,
  };
}
