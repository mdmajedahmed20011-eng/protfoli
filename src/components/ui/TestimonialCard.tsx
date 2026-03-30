"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

export function TestimonialCard({
  quote,
  name,
  title,
}: TestimonialCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-7 transition-all duration-300 hover:border-[rgba(255,61,0,0.3)]"
    >
      <div className="mb-4 flex text-base text-[var(--color-accent)]">
        {"★★★★★"}
      </div>
      <div className="mb-4 flex items-start gap-3">
        <span className="font-heading text-[60px] leading-none text-[rgba(255,61,0,0.2)]">
          "
        </span>
        <p className="pt-2 text-[15px] italic leading-7 text-[#cccccc]">
          {quote}
        </p>
      </div>
      <div className="mb-5 h-px w-full bg-[#1A1A1A]" />
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full border-2 border-[var(--color-accent)] bg-[linear-gradient(135deg,#FF3D00_0%,#3A3A3A_100%)]" />
        <div>
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">
            {name}
          </p>
          <p className="text-xs text-[var(--color-text-tertiary)]">{title}</p>
        </div>
      </div>
    </motion.article>
  );
}

