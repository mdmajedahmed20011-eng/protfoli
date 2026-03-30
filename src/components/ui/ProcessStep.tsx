"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 flex flex-col items-center text-center"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[rgba(255,61,0,0.1)] font-heading text-lg font-bold text-[var(--color-accent)]">
        {number}
      </div>
      <h3 className="mt-4 text-lg font-bold text-[var(--color-text-primary)]">
        {title}
      </h3>
      <p className="mt-2 max-w-[220px] text-sm leading-6 text-[var(--color-text-secondary)]">
        {description}
      </p>
    </motion.div>
  );
}

