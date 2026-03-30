"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";

const mzMediaPoints = [
  "In house team of 40+ Experts",
  "Results oriented",
  "Experience with 500+ Clients",
  "Proven DFY Content Funnel",
  "Personalised CRM",
  "24/7 Support, Anytime You Need Us",
];

const otherAgencyPoints = [
  "Unreliable freelancers with slow turnarounds",
  "Edits that fail to convert or perform",
  "Weak thumbnails and titles with no CTR strategy",
  "Lack of proper distribution systems",
  "No expertise in funnels or lead capture systems",
  "Limited revisions with no client-focused approach",
];

export function TeamSection() {
  return (
    <section className="section-shell bg-[var(--color-bg-primary)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[760px] text-center"
        >
          <div className="flex justify-center">
            <SectionLabel label="Why Choose Us" />
          </div>
          <h2 className="section-heading">Know What We Do Differently</h2>
          <p className="mx-auto mt-4 max-w-[560px] text-lg leading-8 text-[var(--color-text-secondary)]">
            You&apos;re not hiring a freelancer. You&apos;re plugging into a full
            growth machine built to make your content perform.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl border border-[rgba(255,61,0,0.25)] bg-[linear-gradient(180deg,rgba(255,61,0,0.08)_0%,rgba(17,17,17,1)_100%)] p-8 shadow-[0_0_40px_rgba(255,61,0,0.12)]"
          >
            <Badge accent className="normal-case tracking-[0.18em]">
              MZ Media
            </Badge>
            <ul className="mt-6 space-y-4">
              {mzMediaPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(255,61,0,0.12)] text-[var(--color-accent)]">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-[15px] leading-7 text-[var(--color-text-primary)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-[rgba(255,61,0,0.2)] bg-[rgba(255,255,255,0.02)] p-5">
              <p className="text-sm font-semibold text-[var(--color-accent)]">
                Bonuses you get with us:
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge className="border-[rgba(255,61,0,0.15)] bg-[rgba(255,61,0,0.06)] text-[var(--color-text-primary)]">
                  Free Go High Level Subscription
                </Badge>
                <Badge className="border-[rgba(255,61,0,0.15)] bg-[rgba(255,61,0,0.06)] text-[var(--color-text-primary)]">
                  Free 1-on-1 Consultancy
                </Badge>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-8"
          >
            <Badge className="normal-case tracking-[0.18em]">Other Agencies</Badge>
            <ul className="mt-6 space-y-4">
              {otherAgencyPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.03)] text-[#5A5A5A]">
                    <X className="h-4 w-4" />
                  </span>
                  <span className="text-[15px] leading-7 text-[var(--color-text-secondary)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

