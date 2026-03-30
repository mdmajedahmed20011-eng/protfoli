"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { clientBenefits } from "@/lib/mzmedia-data";

export function PricingSection() {
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
            feedback
          </p>
          <h2 className="mt-4 font-heading text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-white md:text-[50px] lg:text-[64px]">
            How we Benefit Our Clients
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {clientBenefits.map((client, index) => (
            <motion.article
              key={client.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: index * 0.06,
              }}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-[#101010]"
            >
              <div className="relative aspect-[0.82/1] overflow-hidden">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_100%)]" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-[24px] font-bold leading-tight text-white">
                  {client.name}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.26em] text-[#858585]">
                  {client.niche}
                </p>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#E9E9E9]">
                    {client.statOne}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#E9E9E9]">
                    {client.statTwo}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

