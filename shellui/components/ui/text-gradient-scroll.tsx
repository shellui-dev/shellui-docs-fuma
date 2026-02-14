"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface TextGradientScrollProps {
  children: string;
  className?: string;
}

export function TextGradientScroll({
  children,
  className = "",
}: TextGradientScrollProps) {
  const { scrollYProgress } = useScroll();
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35],
    ["0% 50%", "50% 50%", "100% 50%"]
  );

  return (
    <motion.h1
      className={className}
      style={{
        background:
          "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.7) 50%, hsl(var(--primary)) 100%)",
        backgroundSize: "200% auto",
        backgroundPosition,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </motion.h1>
  );
}
