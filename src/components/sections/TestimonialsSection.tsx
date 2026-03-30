"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { reviewCards } from "@/lib/mzmedia-data";

export function TestimonialsSection() {
  return (
    <section id="review" className="bg-[#070707] py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[620px]"
        >
          <p className="text-[12px] uppercase tracking-[0.34em] text-[#7A7A7A]">
            Client testimonials
          </p>
          <h2 className="mt-4 font-heading text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-white md:text-[50px] lg:text-[64px]">
            Hear what they’re Saying about us
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {reviewCards.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className={[
                "overflow-hidden rounded-[30px] border border-white/10 bg-[#101010]",
                index === 0 ? "xl:row-span-2" : "",
              ].join(" ")}
            >
              <div className="relative aspect-[1.15/1] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.name} testimonial`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.72)_100%)]" />
              </div>
              <div className="p-6">
                <p className="text-base leading-7 text-white">
                  {item.quote}
                </p>
                {"subquote" in item ? (
                  <p className="mt-4 text-sm leading-7 text-[#A8A8A8]">
                    {item.subquote}
                  </p>
                ) : null}
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="font-medium text-[#F0F0F0]">{item.name}</p>
                  <p className="mt-1 text-sm text-[#7D7D7D]">{item.title}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

