"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href = "#contact",
}: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-8 shadow-card transition-all duration-300 ease-in-out hover:border-[rgba(255,61,0,0.4)] hover:bg-[#161616] hover:shadow-[0_8px_40px_rgba(255,61,0,0.1)]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(255,61,0,0.1)] text-[var(--color-accent)]">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-[var(--color-text-primary)]">
        {title}
      </h3>
      <p className="text-[15px] leading-6 text-[var(--color-text-secondary)]">
        {description}
      </p>
      <a
        href={href}
        aria-label={`Learn more about ${title}`}
        className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--color-accent)] opacity-70 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:rotate-[5deg]" />
      </a>
    </motion.article>
  );
}

