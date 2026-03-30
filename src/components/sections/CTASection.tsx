"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scroller } from "react-scroll";

import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_800px_600px_at_center,rgba(255,61,0,0.12)_0%,transparent_70%),#0A0A0A] py-20 md:py-24 lg:py-[120px]"
    >
      <div className="pointer-events-none absolute left-[-180px] top-[-120px] h-[600px] w-[600px] rounded-full bg-[rgba(255,61,0,0.06)] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[600px] w-[600px] rounded-full bg-[rgba(255,61,0,0.06)] blur-[100px]" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-center">
            <SectionLabel label="Ready To Grow?" />
          </div>
          <div className="space-y-1">
            <h2 className="font-heading text-[40px] font-extrabold leading-[1.05] tracking-[-0.05em] text-[var(--color-text-primary)] md:text-[52px] lg:text-[64px]">
              Stop Blending In.
            </h2>
            <h2 className="font-heading text-[40px] font-extrabold leading-[1.05] tracking-[-0.05em] md:text-[52px] lg:text-[64px]">
              <span className="text-gradient">Start Dominating.</span>
            </h2>
          </div>
          <p className="mx-auto mt-5 max-w-[480px] text-base leading-8 text-[var(--color-text-secondary)] md:text-lg">
            Join 500+ businesses using MZ Media to generate leads, grow
            audiences, and scale revenue — on autopilot.
          </p>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              href="mailto:hello@mzmedia.digital?subject=Book%20Your%20Free%20Discovery%20Call"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Book Your Free Discovery Call
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() =>
                scroller.scrollTo("work", {
                  smooth: true,
                  duration: 800,
                  offset: -72,
                })
              }
            >
              See Our Work ↓
            </Button>
          </div>
          <div className="mt-6 inline-flex rounded-full border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] px-5 py-2 text-[13px] text-[var(--color-text-tertiary)]">
            ✓ No contracts • Cancel anytime • First edit free
          </div>
        </motion.div>
      </div>
    </section>
  );
}
