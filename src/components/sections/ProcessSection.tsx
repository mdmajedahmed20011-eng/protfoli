"use client";

import { motion } from "framer-motion";

import { ProcessStep } from "@/components/ui/ProcessStep";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ProcessStepItem } from "@/types";

const steps: ProcessStepItem[] = [
  {
    number: "1",
    title: "Discovery Call",
    description:
      "We understand your project, consumer base, and business goals in a 30-min call.",
  },
  {
    number: "2",
    title: "Strategy & Planning",
    description:
      "We craft a custom content calendar and editing style guide tailored to your brand.",
  },
  {
    number: "3",
    title: "Production & Editing",
    description:
      "Our team of 30+ editors produce high-quality content with fast 48-hour turnaround.",
  },
  {
    number: "4",
    title: "Deliver & Optimize",
    description:
      "Content is delivered, feedback is gathered, and we continuously improve your results.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-shell bg-[var(--color-bg-primary)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[700px] text-center"
        >
          <div className="flex justify-center">
            <SectionLabel label="How It Works" />
          </div>
          <h2 className="section-heading">
            From Discovery to Delivery in 4 Simple Steps
          </h2>
        </motion.div>

        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-[12.5%] right-[12.5%] top-5 h-[2px] border-t border-dashed border-[#222222]" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-[12.5%] right-[12.5%] top-5 h-[2px] origin-left bg-[linear-gradient(90deg,#FF3D00_0%,#FF6B35_100%)]"
          />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:hidden">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 ? (
                <div className="absolute left-5 top-12 h-[calc(100%-12px)] w-px bg-[#222222]" />
              ) : null}
              <div className="relative flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[rgba(255,61,0,0.1)] font-heading text-lg font-bold text-[var(--color-accent)]">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

