"use client";

import { motion } from "framer-motion";

import { SectionLabel } from "@/components/ui/SectionLabel";

const problems = [
  "Spending hours editing when you should be closing deals",
  "Generic content that blends in instead of standing out",
  "Inconsistent posting that kills your algorithm reach",
];

export function ProblemSection() {
  return (
    <section className="section-shell bg-[var(--color-bg-primary)]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionLabel label="The Problem" />
            <h2 className="font-heading text-[32px] font-extrabold leading-[1.15] tracking-[-0.04em] text-[var(--color-text-primary)] md:text-[42px] lg:text-[48px]">
              Tired of{" "}
              <span className="decoration-[var(--color-accent)] decoration-2 line-through">
                boring
              </span>{" "}
              video content that{" "}
              <span className="underline decoration-[var(--color-accent)] decoration-dashed underline-offset-4">
                doesn&apos;t stand out
              </span>
              ?
            </h2>
            <p className="mt-4 text-lg font-semibold text-[var(--color-accent)]">
              It&apos;s time to upgrade the game with us.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {problems.map((problem, index) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="mb-4 rounded-xl border border-[var(--color-border)] border-l-[3px] border-l-[var(--color-accent)] bg-[var(--color-bg-secondary)] p-6"
              >
                <p className="text-base text-[var(--color-text-primary)]">
                  <span className="mr-3 text-lg text-[var(--color-accent)]">
                    ❌
                  </span>
                  {problem}
                </p>
              </motion.div>
            ))}
            <div className="mt-4 text-center">
              <p className="text-2xl text-[var(--color-accent)]">↓</p>
              <p className="mt-2 text-base italic text-[var(--color-text-secondary)]">
                We handle it all. You just show up and record.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
