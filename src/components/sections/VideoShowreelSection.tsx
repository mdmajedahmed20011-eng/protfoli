"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { featuredProjects } from "@/lib/mzmedia-data";

const categories = Object.keys(featuredProjects) as Array<keyof typeof featuredProjects>;

export function VideoShowreelSection() {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof featuredProjects>("Youtube Videos");

  return (
    <section id="work" className="bg-[#070707] py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[12px] uppercase tracking-[0.34em] text-[#7A7A7A]">
            our work
          </p>
          <h2 className="mt-4 max-w-[620px] font-heading text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-white md:text-[50px] lg:text-[64px]">
            Some of our featured projects
          </h2>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={[
                "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200",
                activeCategory === category
                  ? "border-white bg-white text-black"
                  : "border-white/10 bg-white/5 text-[#A6A6A6] hover:text-white",
              ].join(" ")}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProjects[activeCategory].map((project, index) => (
            <motion.article
              key={`${activeCategory}-${project.title}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: index * 0.07,
              }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#101010]"
            >
              <div className="relative aspect-[0.86/1] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.78)_100%)]" />
                <div className="absolute inset-x-4 bottom-4">
                  <p className="text-sm uppercase tracking-[0.28em] text-[#858585]">
                    {activeCategory}
                  </p>
                  <p className="mt-2 font-medium text-white">{project.title}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

