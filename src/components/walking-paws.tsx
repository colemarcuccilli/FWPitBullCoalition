"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Large paw SVG — same shape as the corner watermark
function PawSvg({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="#EE610E"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main pad */}
      <ellipse cx="100" cy="140" rx="42" ry="36" />
      {/* Toes */}
      <ellipse cx="54"  cy="98"  rx="18" ry="22" transform="rotate(-15 54 98)"  />
      <ellipse cx="82"  cy="74"  rx="16" ry="20" transform="rotate(-5 82 74)"   />
      <ellipse cx="118" cy="74"  rx="16" ry="20" transform="rotate(5 118 74)"   />
      <ellipse cx="146" cy="98"  rx="18" ry="22" transform="rotate(15 146 98)"  />
    </svg>
  );
}

// Walking trail — big paws alternating left / right, bottom → top of section
const TRAIL = [
  { id: 1, x: "23%", y: "88%", rotate: -14, scrollIn: 0.00, scrollPeak: 0.13, scrollOut: 0.28 },
  { id: 2, x: "72%", y: "72%", rotate:  10, scrollIn: 0.15, scrollPeak: 0.28, scrollOut: 0.43 },
  { id: 3, x: "20%", y: "56%", rotate: -12, scrollIn: 0.30, scrollPeak: 0.43, scrollOut: 0.58 },
  { id: 4, x: "74%", y: "40%", rotate:   9, scrollIn: 0.45, scrollPeak: 0.58, scrollOut: 0.73 },
  { id: 5, x: "21%", y: "24%", rotate: -10, scrollIn: 0.60, scrollPeak: 0.73, scrollOut: 0.88 },
  { id: 6, x: "73%", y:  "8%", rotate:  11, scrollIn: 0.75, scrollPeak: 0.88, scrollOut: 1.00 },
];

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
    [0, 0.55, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [paw.scrollIn, paw.scrollPeak, paw.scrollOut],
    [0.5, 1, 0.5]
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
      <PawSvg size={240} />
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
    // z-[1] keeps paws behind the z-10 content div (dog cards)
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-[1]"
    >
      {TRAIL.map((paw) => (
        <ScrollPaw key={paw.id} paw={paw} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}
