"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { processSteps } from "@/lib/mzmedia-data";

export function ProcessSection() {
  return (
    <section id="process" className="bg-[#070707] py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[650px]"
        >
          <p className="text-[12px] uppercase tracking-[0.34em] text-[#7A7A7A]">
            our process
          </p>
          <h2 className="mt-4 font-heading text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-white md:text-[50px] lg:text-[64px]">
            Our strategy to get you leads with content
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.06,
              }}
              className="grid gap-6 overflow-hidden rounded-[32px] border border-white/10 bg-[#101010] p-6 md:p-8 lg:grid-cols-[0.6fr_1.4fr]"
            >
              <div>
                <p className="font-heading text-[52px] font-extrabold leading-none tracking-[-0.06em] text-white">
                  {step.number}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#818181]">
                  {step.title}
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <h3 className="font-heading text-[28px] font-bold leading-tight text-white">
                    {step.subtitle}
                  </h3>
                  <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-[#A8A8A8]">
                    {step.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {step.chips.map((chip) => (
                      <span
                        key={`${step.number}-${chip}`}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-[#D8D8D8]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[220px] overflow-hidden rounded-[26px] border border-white/10 bg-black/30">
                  <Image
                    src={step.visual}
                    alt={`${step.subtitle} visual`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.4)_100%)]" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
