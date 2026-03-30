"use client";

import { motion } from "framer-motion";

import { heroStats } from "@/lib/mzmedia-data";

export function ProblemSection() {
  return (
    <section className="bg-[#070707] py-16 md:py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[12px] uppercase tracking-[0.34em] text-[#7A7A7A]">
              the problem
            </p>
            <h2 className="mt-4 max-w-[640px] font-heading text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-white md:text-[46px] lg:text-[64px]">
              Tired of{" "}
              <span className="text-[#BEBEBE] line-through decoration-white/30">
                boring
              </span>{" "}
              video content that don&apos;t stand out? It&apos;s time to
              upgrade the game with us!
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={[
                  "rounded-[28px] border border-white/10 bg-[#101010] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)]",
                  index === 1 ? "md:translate-y-5" : "",
                ].join(" ")}
              >
                <div className="font-heading text-[42px] font-extrabold leading-none tracking-[-0.06em] text-white">
                  {stat.value}
                </div>
                <p className="mt-3 text-lg font-medium text-[#E4E4E4]">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.22em] text-[#7D7D7D]">
                  {stat.caption}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
