"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  ImageIcon,
  Megaphone,
  Smartphone,
  Sparkles,
  Video,
} from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceCard } from "@/components/ui/ServiceCard";
import type { Service } from "@/types";

const services: Service[] = [
  {
    icon: Video,
    title: "YouTube Video Editing",
    description:
      "Long-form, narrative-driven edits designed for maximum watch time and subscriber growth.",
  },
  {
    icon: Smartphone,
    title: "Short-Form Content",
    description:
      "Hook-first, pattern-interrupt edits for Instagram Reels, YouTube Shorts, and TikTok.",
  },
  {
    icon: Megaphone,
    title: "Promotional Videos",
    description:
      "High-converting promotional content with motion graphics that sells your offer.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics & Animation",
    description:
      "Advanced motion design that elevates your brand and makes every frame unforgettable.",
  },
  {
    icon: BarChart3,
    title: "Social Media Marketing",
    description:
      "Proven content strategy and ad campaigns that grow your audience and bottom line.",
  },
  {
    icon: ImageIcon,
    title: "Thumbnail Design",
    description:
      "Eye-catching, CTR-optimized thumbnails using psychological design principles.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-shell bg-[linear-gradient(180deg,#0A0A0A_0%,#0E0E0E_100%)]"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[680px] text-center"
        >
          <div className="flex justify-center">
            <SectionLabel label="Our Services" />
          </div>
          <h2 className="section-heading">
            Everything You Need to <span className="text-gradient">Dominate</span>{" "}
            Online
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-lg leading-8 text-[var(--color-text-secondary)]">
            From raw footage to viral-ready content — we handle the entire
            pipeline.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <ServiceCard
                icon={<service.icon className="h-6 w-6" />}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

