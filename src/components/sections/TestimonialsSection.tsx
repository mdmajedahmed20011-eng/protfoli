"use client";

import { motion } from "framer-motion";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    name: "Alex Johnson",
    title: "YouTube Creator (500K subs)",
    quote:
      "MZ Media completely transformed my channel. My watch time increased by 180% in just 3 months. Their team understands exactly what keeps audiences engaged. Absolutely worth every penny.",
  },
  {
    name: "Sarah Chen",
    title: "Business Coach",
    quote:
      "I was skeptical at first, but the results speak for themselves. My Instagram Reels went from 500 views to 50K average. My course sales doubled in 60 days.",
  },
  {
    name: "Marcus Williams",
    title: "Online Entrepreneur",
    quote:
      "30+ editors sounds like chaos — but the quality and consistency is unreal. They turn around content faster than I can film it. My team of one just became a team of thirty.",
  },
  {
    name: "Priya Sharma",
    title: "Fitness Coach",
    quote:
      "The thumbnail designs alone paid for the whole package. My CTR jumped from 3% to 11%. I've tried 4 other agencies. MZ Media is in a different league.",
  },
  {
    name: "David Park",
    title: "Digital Marketer",
    quote:
      "What sold me was how deeply they understood my audience. It's not just editing — it's strategy. They've essentially built my entire personal brand pipeline.",
  },
  {
    name: "Emma Rodriguez",
    title: "Course Creator",
    quote:
      "Fast, professional, and they actually care about your results. My promotional video generated $40K in sales in the first week. That's not a typo.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-shell bg-[linear-gradient(180deg,#0A0A0A_0%,#0C0C0C_100%)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[680px] text-center"
        >
          <div className="flex justify-center">
            <SectionLabel label="Client Love" />
          </div>
          <h2 className="section-heading">Our Clients Speak for Us</h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className={index % 3 === 1 ? "lg:translate-y-8" : ""}
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

