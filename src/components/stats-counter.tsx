"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  color?: string;
}

const colorMap = {
  cyan: {
    text: "text-[oklch(0.85_0.2_195)]",
    border: "border-[oklch(0.85_0.2_195/0.4)]",
    glow: "0 0 20px oklch(0.85 0.2 195 / 0.3), 0 0 60px oklch(0.85 0.2 195 / 0.1)",
    labelColor: "text-[oklch(0.85_0.2_195/0.8)]",
  },
  purple: {
    text: "text-[oklch(0.7_0.25_300)]",
    border: "border-[oklch(0.7_0.25_300/0.4)]",
    glow: "0 0 20px oklch(0.7 0.25 300 / 0.3), 0 0 60px oklch(0.7 0.25 300 / 0.1)",
    labelColor: "text-[oklch(0.7_0.25_300/0.8)]",
  },
  pink: {
    text: "text-[oklch(0.75_0.25_350)]",
    border: "border-[oklch(0.75_0.25_350/0.4)]",
    glow: "0 0 20px oklch(0.75 0.25 350 / 0.3), 0 0 60px oklch(0.75 0.25 350 / 0.1)",
    labelColor: "text-[oklch(0.75_0.25_350/0.8)]",
  },
  green: {
    text: "text-[oklch(0.8_0.2_150)]",
    border: "border-[oklch(0.8_0.2_150/0.4)]",
    glow: "0 0 20px oklch(0.8 0.2 150 / 0.3), 0 0 60px oklch(0.8 0.2 150 / 0.1)",
    labelColor: "text-[oklch(0.8_0.2_150/0.8)]",
  },
};

export function StatsCounter({
  value,
  suffix = "+",
  label,
  color = "cyan",
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const colors = colorMap[color as keyof typeof colorMap] ?? colorMap.cyan;

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out effect
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(value * eased);
      setCount(current);

      if (step >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex flex-col items-center justify-center rounded-2xl border bg-white shadow-lg p-8 ${colors.border}`}
      style={{ boxShadow: colors.glow }}
    >
      {/* Corner accents */}
      <div
        className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-2xl ${colors.border}`}
      />
      <div
        className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-2xl ${colors.border}`}
      />
      <div
        className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-2xl ${colors.border}`}
      />
      <div
        className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-2xl ${colors.border}`}
      />

      <span
        className={`text-5xl font-bold font-mono tabular-nums ${colors.text}`}
        style={{
          textShadow: `0 0 10px currentColor, 0 0 40px currentColor`,
        }}
      >
        {count.toLocaleString()}
        {suffix}
      </span>
      <span
        className={`mt-3 text-sm font-medium uppercase tracking-widest ${colors.labelColor}`}
      >
        {label}
      </span>
    </motion.div>
  );
}
