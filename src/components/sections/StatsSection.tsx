"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { mzmediaAssets } from "@/lib/mzmedia-data";

export function StatsSection() {
  return (
    <section id="case-study" className="bg-[#070707] py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[620px]"
        >
          <p className="text-[12px] uppercase tracking-[0.34em] text-[#7A7A7A]">
            case studies
          </p>
          <h2 className="mt-4 font-heading text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-white md:text-[50px] lg:text-[64px]">
            Some solid Case studies
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          className="mt-12 overflow-hidden rounded-[34px] border border-white/10 bg-[#101010]"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[360px]">
              <Image
                src={mzmediaAssets.caseStudy}
                alt="Case study visual for Spencer Pawliw"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.65)_100%)]" />
            </div>

            <div className="flex flex-col justify-between p-8 md:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-[#7D7D7D]">
                  01 Case study
                </p>
                <h3 className="mt-4 max-w-[620px] font-heading text-[28px] font-bold leading-[1.08] tracking-[-0.04em] text-white md:text-[40px]">
                  “With just 5,000 subscribers, Spencer now generates $350K per
                  month"
                </h3>
                <div className="mt-8">
                  <p className="text-lg font-medium text-white">Neel Nafis</p>
                  <p className="mt-1 text-sm text-[#7D7D7D]">Founder</p>
                </div>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="font-heading text-[40px] font-extrabold tracking-[-0.05em] text-white">
                    250%
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.26em] text-[#8A8A8A]">
                    Revenue Growth
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="font-heading text-[40px] font-extrabold tracking-[-0.05em] text-white">
                    200%
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.26em] text-[#8A8A8A]">
                    Saved on Ads
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="primary"
                  size="md"
                  href="mailto:hello@mzmedia.digital?subject=Book%20a%2030%20min%20call"
                  className="rounded-full bg-white text-black hover:bg-[#E7E7E7] hover:text-black hover:shadow-none"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Book a 30 min call
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
