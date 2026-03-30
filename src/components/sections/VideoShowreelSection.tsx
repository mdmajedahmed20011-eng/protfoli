"use client";

import { motion } from "framer-motion";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

export function VideoShowreelSection() {
  return (
    <section id="work" className="section-shell bg-[var(--color-bg-primary)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[680px] text-center"
        >
          <div className="flex justify-center">
            <SectionLabel label="Our Work" />
          </div>
          <h2 className="section-heading">Watch What We Create</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-14 max-w-[900px]"
        >
          <VideoPlayer />
        </motion.div>
      </div>
    </section>
  );
}
