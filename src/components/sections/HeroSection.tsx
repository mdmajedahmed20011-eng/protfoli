"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { scroller } from "react-scroll";

import { Button } from "@/components/ui/Button";
import { heroStats, mzmediaAssets } from "@/lib/mzmedia-data";

const heroAvatars = [
  mzmediaAssets.heroClient,
  mzmediaAssets.testimonialNick,
  mzmediaAssets.testimonialSpencer,
  mzmediaAssets.testimonialLucy,
  mzmediaAssets.testimonialDreikobe,
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#070707] pb-14 pt-10 md:pb-20 md:pt-16">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <Image
          src={mzmediaAssets.heroGlow}
          alt=""
          fill
          priority
          className="object-cover object-top"
        />
      </div>
      <div className="pointer-events-none absolute left-[-10%] top-[16%] h-56 w-56 rounded-full bg-[rgba(255,255,255,0.03)] blur-3xl" />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-[620px]">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading text-[42px] font-extrabold leading-[0.95] tracking-[-0.06em] text-white sm:text-[56px] lg:text-[88px]"
            >
              <span className="block">Get More Leads</span>
              <span className="mt-1 block text-[#D6D6D6]">
                Using Quality Video Content
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="mt-6 max-w-[540px] text-base leading-8 text-[#B0B0B0] md:text-lg"
            >
              We help entrepreneurs and businesses with Done-For-You organic
              content systems that generate leads on autopilot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="mt-8"
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
                className="rounded-full bg-white px-8 text-[15px] font-semibold text-black hover:bg-[#E7E7E7] hover:text-black hover:shadow-none"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Book a call
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="mt-12 flex flex-col gap-4"
            >
              <div className="flex items-center">
                {heroAvatars.map((avatar, index) => (
                  <div
                    key={`${avatar}-${index}`}
                    className={index === 0 ? "relative h-11 w-11" : "relative -ml-3 h-11 w-11"}
                  >
                    <Image
                      src={avatar}
                      alt=""
                      fill
                      className="rounded-full border-2 border-[#070707] object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-[#E9E9E9]">
                  Loved by 500+ Businesses worldwide.
                </p>
                <p className="mt-1 text-sm text-[#9D9D9D]">
                  Our Clients Speak for Us
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative mx-auto min-h-[500px] max-w-[620px]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-6 h-[220px] w-[46%] overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
              >
                <Image
                  src={mzmediaAssets.heroPrimary}
                  alt="MZ Media featured creator preview"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 top-0 h-[250px] w-[50%] overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
              >
                <Image
                  src={mzmediaAssets.heroSecondary}
                  alt="MZ Media creator card"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[118px] right-[6%] h-[188px] w-[42%] overflow-hidden rounded-[26px] border border-white/10 bg-[#101010] shadow-[0_26px_80px_rgba(0,0,0,0.5)]"
              >
                <Image
                  src={mzmediaAssets.heroAccent}
                  alt="MZ Media social proof asset"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute bottom-0 left-[6%] w-[62%] overflow-hidden rounded-[30px] border border-white/10 bg-[#0F0F0F] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.58)]">
                <div className="relative aspect-[1.18/1] overflow-hidden rounded-[24px]">
                  <Image
                    src={mzmediaAssets.heroProof}
                    alt="MZ Media proof panel"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-md">
                    <p className="text-[12px] uppercase tracking-[0.28em] text-[#B5B5B5]">
                      Results Engine
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Editorial systems built to turn content into leads.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute left-2 top-[282px] grid w-[220px] gap-3 sm:w-[260px]">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.35 + index * 0.08,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl"
                  >
                    <div className="flex items-end gap-2">
                      <span className="font-heading text-[28px] font-bold tracking-[-0.05em] text-white">
                        {stat.value}
                      </span>
                      <span className="mb-1 text-xs uppercase tracking-[0.28em] text-[#7F7F7F]">
                        {stat.caption}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[#9A9A9A]">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
