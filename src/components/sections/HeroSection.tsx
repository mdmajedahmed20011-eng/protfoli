"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Users } from "lucide-react";
import { scroller } from "react-scroll";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const headlineLines = [
  "Bring Real Business",
  "Results Using Your",
  "Personal Brand",
];

const avatars = [
  "from-[#FF3D00] to-[#5B5B5B]",
  "from-[#FF6B35] to-[#2A2A2A]",
  "from-[#3C3C3C] to-[#FF3D00]",
  "from-[#FF8A5B] to-[#1F1F1F]",
  "from-[#5A5A5A] to-[#FF6B35]",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--color-bg-primary)]">
      <div className="pointer-events-none absolute right-[-120px] top-[-60px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse_800px_600px_at_70%_20%,rgba(255,61,0,0.12)_0%,transparent_70%)] opacity-80 blur-3xl" />
      <div className="pointer-events-none absolute left-[-180px] top-[30%] h-[520px] w-[520px] animate-orb-drift rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.08)_0%,transparent_70%)] blur-[90px]" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[10%] h-[480px] w-[480px] animate-orb-drift rounded-full bg-[radial-gradient(circle,rgba(255,61,0,0.08)_0%,transparent_70%)] blur-[100px] [animation-delay:4s]" />

      <div className="container flex min-h-[calc(100vh-72px)] items-center">
        <div className="grid w-full items-center gap-12 py-12 md:py-16 lg:grid-cols-[0.55fr_0.45fr]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="order-1 mx-auto w-full max-w-[420px] lg:order-2"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-[0_0_80px_rgba(255,61,0,0.15)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,61,0,0.08)_0%,transparent_36%,transparent_100%)]" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[rgba(255,255,255,0.04)] bg-[linear-gradient(180deg,#161616_0%,#0E0E0E_100%)]">
                  <motion.div
                    animate={{ x: [0, 14, 0], y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[-8%] top-[12%] h-40 w-40 rounded-full bg-[rgba(255,61,0,0.22)] blur-3xl"
                  />
                  <motion.div
                    animate={{ x: [0, -12, 0], y: [0, 12, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[12%] right-[-6%] h-44 w-44 rounded-full bg-[rgba(255,107,53,0.18)] blur-3xl"
                  />
                  <div className="absolute inset-x-8 top-8 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] p-5 backdrop-blur-sm">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                          Weekly Pipeline
                        </p>
                        <p className="mt-2 text-xl font-bold text-[var(--color-text-primary)]">
                          Content That Converts
                        </p>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,61,0,0.35)] bg-[rgba(255,61,0,0.08)] text-[var(--color-accent)]">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 w-full rounded-full bg-[rgba(255,255,255,0.06)]">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "78%" }}
                          transition={{ duration: 1.4, delay: 0.6 }}
                          className="h-full rounded-full bg-[linear-gradient(90deg,#FF3D00_0%,#FF6B35_100%)]"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {["Hooks", "Retention", "Reach"].map((item, index) => (
                          <div
                            key={item}
                            className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] p-3"
                          >
                            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
                              {item}
                            </p>
                            <p className="mt-2 text-lg font-bold text-[var(--color-text-primary)]">
                              {88 + index * 4}%
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 grid gap-3">
                    {[
                      "Short-form funnels built for daily reach.",
                      "Long-form edits designed for retention.",
                      "Creative systems that scale your brand.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-[var(--color-text-secondary)] backdrop-blur-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -left-6 top-10 hidden rounded-xl border border-[rgba(255,61,0,0.3)] bg-[var(--color-bg-tertiary)] p-4 shadow-card md:flex"
              >
                <div>
                  <div className="flex items-center gap-2 text-[var(--color-accent)]">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="font-heading text-lg font-bold">500+</span>
                  </div>
                  <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                    Clients
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 right-[-18px] hidden rounded-xl border border-[rgba(255,61,0,0.3)] bg-[var(--color-bg-tertiary)] p-4 shadow-card md:flex"
              >
                <div>
                  <div className="flex items-center gap-2 text-[var(--color-accent)]">
                    <Users className="h-4 w-4" />
                    <span className="font-heading text-lg font-bold">30+</span>
                  </div>
                  <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                    Expert Editors
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <Badge
                accent
                className="rounded-full px-[14px] py-[6px] normal-case tracking-normal"
              >
                🚀 Done-For-You Content Systems
              </Badge>
            </motion.div>

            <div className="mt-6 space-y-1.5">
              {headlineLines.map((line, index) => (
                <motion.h1
                  key={line}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className={[
                    "font-heading text-[34px] font-extrabold leading-[1.05] tracking-[-0.05em] md:text-[44px] lg:text-[68px]",
                    index === headlineLines.length - 1 ? "text-gradient" : "",
                  ].join(" ")}
                >
                  {line}
                </motion.h1>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="mt-6 max-w-[480px] text-base leading-8 text-[var(--color-text-secondary)] md:text-lg"
            >
              We help entrepreneurs and businesses with Done-For-You organic
              content systems that generate leads on autopilot — without you
              lifting a finger.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  scroller.scrollTo("contact", {
                    smooth: true,
                    duration: 800,
                    offset: -72,
                  })
                }
                icon={<ArrowRight className="h-5 w-5" />}
              >
                Book a Free Call
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
                className="justify-center"
              >
                <span className="mr-1 inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
                <span>▶ Watch Showreel</span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <div className="flex items-center">
                {avatars.map((gradient, index) => (
                  <span
                    key={gradient}
                    className={[
                      "h-8 w-8 rounded-full border-2 border-[var(--color-bg-primary)] bg-gradient-to-br",
                      gradient,
                      index === 0 ? "" : "-ml-2",
                    ].join(" ")}
                  />
                ))}
              </div>
              <div>
                <div className="text-sm text-[var(--color-accent)]">★★★★★</div>
                <p className="text-[13px] text-[var(--color-text-secondary)]">
                  Loved by 500+ businesses worldwide
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

