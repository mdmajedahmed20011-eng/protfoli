"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { PricingPlan } from "@/types";

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    badge: "For Beginners",
    monthlyPrice: "$997",
    quarterlyPrice: "$2,393",
    period: "/mo",
    features: [
      { label: "4 YouTube long-form edits/month", included: true },
      { label: "12 Shorts / Reels / TikToks", included: true },
      { label: "2 Thumbnail designs", included: true },
      { label: "48-hour turnaround", included: true },
      { label: "1 revision per video", included: true },
      { label: "Social media strategy", included: false },
      { label: "Dedicated account manager", included: false },
    ],
  },
  {
    name: "Growth",
    badge: "Most Popular 🔥",
    monthlyPrice: "$1,997",
    quarterlyPrice: "$4,793",
    period: "/mo",
    highlighted: true,
    features: [
      { label: "8 YouTube long-form edits/month", included: true },
      { label: "30 Shorts / Reels / TikToks", included: true },
      { label: "Unlimited Thumbnail designs", included: true },
      { label: "24-hour turnaround", included: true },
      { label: "Unlimited revisions", included: true },
      { label: "Social media strategy", included: true },
      { label: "Dedicated account manager", included: true },
    ],
  },
  {
    name: "Scale",
    badge: "For Large Teams",
    monthlyPrice: "Custom",
    quarterlyPrice: "Custom",
    period: "",
    features: [
      { label: "Unlimited video edits", included: true },
      { label: "Unlimited short-form content", included: true },
      { label: "Full social media management", included: true },
      { label: "Motion graphics & animation", included: true },
      { label: "Priority 12-hour turnaround", included: true },
      { label: "White-glove onboarding", included: true },
      { label: "Weekly strategy calls", included: true },
    ],
  },
];

type BillingCycle = "monthly" | "quarterly";

export function PricingSection() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const planPeriod = useMemo(
    () => (billing === "monthly" ? "/mo" : "/quarter"),
    [billing],
  );

  return (
    <section id="pricing" className="section-shell bg-[var(--color-bg-primary)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[720px] text-center"
        >
          <div className="flex justify-center">
            <SectionLabel label="Pricing" />
          </div>
          <h2 className="section-heading">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg leading-8 text-[var(--color-text-secondary)]">
            No hidden fees. No long-term lock-ins. Just results.
          </p>

          <div className="mt-10 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={[
                "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
                billing === "monthly"
                  ? "bg-[var(--color-accent)] text-white"
                  : "text-[var(--color-text-secondary)]",
              ].join(" ")}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("quarterly")}
              className={[
                "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
                billing === "quarterly"
                  ? "bg-[var(--color-accent)] text-white"
                  : "text-[var(--color-text-secondary)]",
              ].join(" ")}
            >
              Quarterly (save 20%)
            </button>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className={[
                "rounded-2xl border bg-[var(--color-bg-secondary)] p-9",
                plan.highlighted
                  ? "border-[var(--color-accent)] shadow-[0_0_40px_rgba(255,61,0,0.25)] lg:scale-[1.04]"
                  : "border-[var(--color-border)]",
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
                    {plan.name}
                  </p>
                </div>
                <Badge
                  accent={plan.highlighted}
                  className="normal-case tracking-[0.18em]"
                >
                  {plan.badge}
                </Badge>
              </div>

              <div className="mt-8">
                <p className="font-heading text-[42px] font-extrabold leading-none tracking-[-0.05em] text-[var(--color-text-primary)] md:text-[48px]">
                  {billing === "monthly" ? plan.monthlyPrice : plan.quarterlyPrice}
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-tertiary)]">
                  {plan.monthlyPrice === "Custom" ? "Tailored scope" : planPeriod}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-3">
                    <span
                      className={[
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                        feature.included
                          ? "text-[var(--color-accent)]"
                          : "text-[#333333]",
                      ].join(" ")}
                    >
                      {feature.included ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <X className="h-4 w-4" />
                      )}
                    </span>
                    <span className="text-[15px] leading-7 text-[var(--color-text-secondary)]">
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button
                  variant={plan.highlighted ? "primary" : "ghost"}
                  size="md"
                  href="mailto:hello@mzmedia.digital?subject=Get%20Started%20with%20MZ%20Media"
                  className="w-full justify-center"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

