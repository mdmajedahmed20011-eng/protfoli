"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

import { differentiators } from "@/lib/mzmedia-data";

export function TeamSection() {
  return (
    <section className="bg-[#070707] py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[620px]"
        >
          <p className="text-[12px] uppercase tracking-[0.34em] text-[#7A7A7A]">
            why choose us
          </p>
          <h2 className="mt-4 font-heading text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-white md:text-[50px] lg:text-[64px]">
            Know what we do differently
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-8"
          >
            <p className="font-heading text-[28px] font-bold text-white">
              MZ Media
            </p>
            <ul className="mt-6 space-y-4">
              {differentiators.positive.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-[15px] leading-7 text-[#EAEAEA]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm uppercase tracking-[0.28em] text-[#818181]">
                Bonuses you get with us:
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {differentiators.bonuses.map((bonus) => (
                  <span
                    key={bonus}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
                  >
                    {bonus}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="rounded-[32px] border border-white/10 bg-[#101010] p-8"
          >
            <p className="font-heading text-[28px] font-bold text-white">
              Other Agencies
            </p>
            <ul className="mt-6 space-y-4">
              {differentiators.negative.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#A0A0A0]">
                    <X className="h-4 w-4" />
                  </span>
                  <span className="text-[15px] leading-7 text-[#A7A7A7]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

