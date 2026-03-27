"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Paw SVG shape — same geometry as hero particles
function PawSvg({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={`rgba(238,97,14,${opacity})`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: `drop-shadow(0 0 ${size * 0.15}px rgba(238,97,14,0.5))` }}
    >
      {/* Main central pad */}
      <ellipse cx="50" cy="68" rx="24" ry="20" />
      {/* Toes */}
      <ellipse cx="24" cy="44" rx="11" ry="13" transform="rotate(-15 24 44)" />
      <ellipse cx="40" cy="30" rx="10" ry="12" transform="rotate(-5 40 30)" />
      <ellipse cx="60" cy="30" rx="10" ry="12" transform="rotate(5 60 30)" />
      <ellipse cx="76" cy="44" rx="11" ry="13" transform="rotate(15 76 44)" />
    </svg>
  );
}

// Walking trail definition — positions along the section, bottom → top
// x = left%, y = top-of-section%, rotate = slight angle for natural gait
const TRAIL = [
  { id: 1, x: "57%", y: "80%", rotate: -14, scrollIn: 0.00, scrollPeak: 0.13, scrollOut: 0.28 },
  { id: 2, x: "67%", y: "65%", rotate:  10, scrollIn: 0.15, scrollPeak: 0.28, scrollOut: 0.43 },
  { id: 3, x: "54%", y: "50%", rotate: -12, scrollIn: 0.30, scrollPeak: 0.43, scrollOut: 0.58 },
  { id: 4, x: "68%", y: "35%", rotate:   9, scrollIn: 0.45, scrollPeak: 0.58, scrollOut: 0.73 },
  { id: 5, x: "53%", y: "20%", rotate: -10, scrollIn: 0.60, scrollPeak: 0.73, scrollOut: 0.88 },
  { id: 6, x: "66%", y:  "6%", rotate:  11, scrollIn: 0.75, scrollPeak: 0.88, scrollOut: 1.00 },
];

// Each paw as its own component so it can call useTransform as a hook
function ScrollPaw({
  paw,
  scrollYProgress,
}: {
  paw: (typeof TRAIL)[number];
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [paw.scrollIn, paw.scrollPeak, paw.scrollOut],
    [0, 0.72, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [paw.scrollIn, paw.scrollPeak, paw.scrollOut],
    [0.6, 1, 0.6]
  );

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: paw.x,
        top: paw.y,
        rotate: paw.rotate,
        opacity,
        scale,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <PawSvg size={64} opacity={1} />
    </motion.div>
  );
}

export function WalkingPaws() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {TRAIL.map((paw) => (
        <ScrollPaw key={paw.id} paw={paw} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}
