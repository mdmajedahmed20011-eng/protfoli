"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { coreServices } from "@/lib/mzmedia-data";

export function ServicesSection() {
  return (
    <section className="bg-[#070707] py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[620px]"
        >
          <p className="text-[12px] uppercase tracking-[0.34em] text-[#7A7A7A]">
            Core services
          </p>
          <h2 className="mt-4 font-heading text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-white md:text-[50px] lg:text-[64px]">
            Types of work We do
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {coreServices.map((service, index) => (
            <motion.article
              key={`${service.title}-${index}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: index * 0.06,
              }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#101010]"
            >
              <div className="relative aspect-[0.94/1] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-[24px] font-bold leading-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[#A7A7A7]">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

