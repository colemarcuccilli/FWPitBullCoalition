"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { id: 1, x: "8%", y: "15%", size: 6, duration: 7, delay: 0 },
  { id: 2, x: "18%", y: "72%", size: 4, duration: 9, delay: 1.2 },
  { id: 3, x: "27%", y: "38%", size: 8, duration: 6, delay: 0.5 },
  { id: 4, x: "35%", y: "85%", size: 3, duration: 11, delay: 2 },
  { id: 5, x: "44%", y: "22%", size: 5, duration: 8, delay: 0.8 },
  { id: 6, x: "52%", y: "60%", size: 7, duration: 7.5, delay: 1.5 },
  { id: 7, x: "61%", y: "10%", size: 4, duration: 10, delay: 0.3 },
  { id: 8, x: "70%", y: "45%", size: 6, duration: 6.5, delay: 2.5 },
  { id: 9, x: "78%", y: "78%", size: 3, duration: 9.5, delay: 1 },
  { id: 10, x: "85%", y: "30%", size: 5, duration: 8.5, delay: 0.7 },
  { id: 11, x: "92%", y: "65%", size: 4, duration: 7, delay: 1.8 },
  { id: 12, x: "5%", y: "55%", size: 7, duration: 12, delay: 3 },
  { id: 13, x: "23%", y: "92%", size: 3, duration: 8, delay: 0.4 },
  { id: 14, x: "57%", y: "90%", size: 5, duration: 9, delay: 2.2 },
  { id: 15, x: "88%", y: "88%", size: 4, duration: 10.5, delay: 1.4 },
  { id: 16, x: "42%", y: "5%", size: 6, duration: 7.8, delay: 0.9 },
  { id: 17, x: "73%", y: "18%", size: 3, duration: 11.5, delay: 2.8 },
  { id: 18, x: "15%", y: "48%", size: 5, duration: 6.8, delay: 1.6 },
];

const COLORS = [
  "rgba(255,255,255,0.9)", // white
  "rgba(255,255,255,0.7)", // white semi
  "rgba(200,230,255,0.8)", // light blue tint
  "rgba(220,200,255,0.7)", // light purple tint
];

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
            className="absolute rounded-full"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              background: color,
              boxShadow: `0 0 ${p.size * 3}px ${p.size}px ${color}55`,
            }}
            animate={{
              y: [0, -18, 8, -12, 0],
              x: [0, 6, -4, 8, 0],
              opacity: [0.4, 0.9, 0.5, 1, 0.4],
              scale: [1, 1.3, 0.9, 1.2, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
