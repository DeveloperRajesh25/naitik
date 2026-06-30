"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds for sequenced reveals. */
  delay?: number;
  /** Direction the element eases in from. */
  from?: "up" | "down" | "left" | "right" | "fade";
  /** Render as a different element when needed (e.g. list item). */
  as?: "div" | "li" | "section" | "span";
};

const offset = 24;

function buildVariants(from: RevealProps["from"]): Variants {
  const initial: Record<string, number> = { opacity: 0 };
  if (from === "up") initial.y = offset;
  if (from === "down") initial.y = -offset;
  if (from === "left") initial.x = offset;
  if (from === "right") initial.x = -offset;

  return {
    hidden: initial,
    // `custom` carries the per-element delay into the transition.
    visible: (delay: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.6, 0.35, 1], delay },
    }),
  };
}

/**
 * Gentle scroll-triggered fade/slide-in.
 * Animates once when the element enters the viewport.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  const variants = buildVariants(from);

  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
    >
      {children}
    </MotionTag>
  );
}
