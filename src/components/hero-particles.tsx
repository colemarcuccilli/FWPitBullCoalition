"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { id: 1, x: "8%", y: "15%", size: 18, duration: 7, delay: 0 },
  { id: 2, x: "18%", y: "72%", size: 12, duration: 9, delay: 1.2 },
  { id: 3, x: "27%", y: "38%", size: 22, duration: 6, delay: 0.5 },
  { id: 4, x: "35%", y: "85%", size: 10, duration: 11, delay: 2 },
  { id: 5, x: "44%", y: "22%", size: 16, duration: 8, delay: 0.8 },
  { id: 6, x: "52%", y: "60%", size: 20, duration: 7.5, delay: 1.5 },
  { id: 7, x: "61%", y: "10%", size: 12, duration: 10, delay: 0.3 },
  { id: 8, x: "70%", y: "45%", size: 18, duration: 6.5, delay: 2.5 },
  { id: 9, x: "78%", y: "78%", size: 10, duration: 9.5, delay: 1 },
  { id: 10, x: "85%", y: "30%", size: 14, duration: 8.5, delay: 0.7 },
  { id: 11, x: "92%", y: "65%", size: 12, duration: 7, delay: 1.8 },
  { id: 12, x: "5%", y: "55%", size: 20, duration: 12, delay: 3 },
  { id: 13, x: "23%", y: "92%", size: 10, duration: 8, delay: 0.4 },
  { id: 14, x: "57%", y: "90%", size: 14, duration: 9, delay: 2.2 },
  { id: 15, x: "88%", y: "88%", size: 12, duration: 10.5, delay: 1.4 },
  { id: 16, x: "42%", y: "5%", size: 18, duration: 7.8, delay: 0.9 },
  { id: 17, x: "73%", y: "18%", size: 10, duration: 11.5, delay: 2.8 },
  { id: 18, x: "15%", y: "48%", size: 16, duration: 6.8, delay: 1.6 },
];

const COLORS = [
  "rgba(238,97,14,0.85)",   // brand orange
  "rgba(255,255,255,0.75)", // white
  "rgba(238,97,14,0.60)",   // orange dim
  "rgba(255,180,120,0.70)", // warm orange tint
];

// Inline paw print SVG — main pad + 4 toe pads
function PawPrint({ color, size }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main central pad */}
      <ellipse cx="50" cy="68" rx="24" ry="20" />
      {/* Top-left toe */}
      <ellipse cx="24" cy="44" rx="11" ry="13" transform="rotate(-15 24 44)" />
      {/* Top-center-left toe */}
      <ellipse cx="40" cy="30" rx="10" ry="12" transform="rotate(-5 40 30)" />
      {/* Top-center-right toe */}
      <ellipse cx="60" cy="30" rx="10" ry="12" transform="rotate(5 60 30)" />
      {/* Top-right toe */}
      <ellipse cx="76" cy="44" rx="11" ry="13" transform="rotate(15 76 44)" />
    </svg>
  );
}

export function HeroParticles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {PARTICLES.map((p) => {
        const color = COLORS[p.id % COLORS.length];
        return (
          <motion.div
            key={p.id}
            className="absolute"
            style={{
              left: p.x,
              top: p.y,
              filter: `drop-shadow(0 0 ${p.size * 0.4}px ${color})`,
            }}
            animate={{
              y: [0, -18, 8, -12, 0],
              x: [0, 6, -4, 8, 0],
              opacity: [0.35, 0.85, 0.45, 0.9, 0.35],
              scale: [1, 1.25, 0.9, 1.15, 1],
              rotate: [0, 10, -6, 8, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <PawPrint color={color} size={p.size} />
          </motion.div>
        );
      })}
    </div>
  );
}
