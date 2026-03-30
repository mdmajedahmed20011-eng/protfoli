"use client";

import { motion } from "framer-motion";

const brands = [
  "BRANDNAME",
  "CLIENTCO",
  "AGENCYXYZ",
  "FUTUREFORM",
  "GROWSTACK",
  "VISIONLAB",
  "ALPHA.ONE",
  "LEADFUEL",
  "CREATORHQ",
  "UPSHIFT",
  "NEXUSCO",
  "SCALEFLOW",
];

export function TrustedBySection() {
  return (
    <section className="bg-[var(--color-bg-primary)] py-10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-[#555555]">
            Trusted by 500+ Businesses Worldwide
          </p>
          <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
            <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
              {[...brands, ...brands].map((brand, index) => (
                <span
                  key={`${brand}-${index}`}
                  className="text-lg font-bold tracking-[0.12em] text-[#333333] transition-colors duration-200 hover:text-[#666666]"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

