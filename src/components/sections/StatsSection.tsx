"use client";

import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import type { StatItem } from "@/types";

const stats: StatItem[] = [
  {
    value: 500,
    suffix: "+",
    label: "Businesses Served",
    subtitle: "Worldwide clients across 20+ niches",
  },
  {
    value: 30,
    suffix: "+",
    label: "Expert Editors",
    subtitle: "Full-time dedicated team",
  },
  {
    value: 6,
    label: "Of Experience",
    subtitle: "In social media & video production",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    subtitle: "Clients who stay and scale with us",
  },
];

export function StatsSection() {
  return (
    <section
      id="results"
      className="border-y border-[#1A1A1A] bg-[var(--color-bg-secondary)] py-12 md:py-16 lg:py-20"
    >
      <div className="container">
        <div className="grid divide-y divide-[#222222] md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="px-6 py-8 text-center"
            >
              <p className="font-heading text-[40px] font-extrabold leading-none tracking-[-0.05em] md:text-[48px] lg:text-[56px]">
                <span className="text-gradient">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
              </p>
              <p className="mt-3 font-heading text-lg font-bold text-[var(--color-text-primary)]">
                {stat.label}
              </p>
              <p className="mt-1 text-[13px] text-[var(--color-text-tertiary)]">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

