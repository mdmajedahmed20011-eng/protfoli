"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { faqs } from "@/lib/mzmedia-data";

export function CTASection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="contact" className="bg-[#070707] py-16 md:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[12px] uppercase tracking-[0.34em] text-[#7A7A7A]">
              work with us
            </p>
            <h2 className="mt-4 font-heading text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-white md:text-[50px] lg:text-[64px]">
              Let’s level up Your Business!
            </h2>
            <p className="mt-6 max-w-[520px] text-base leading-8 text-[#A8A8A8] md:text-lg">
              Plug into a team that handles strategy, editing, thumbnails,
              distribution, and feedback loops so your content can finally start
              pulling real business results.
            </p>
            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                href="mailto:hello@mzmedia.digital?subject=Let%27s%20level%20up%20your%20business"
                className="rounded-full bg-white px-8 text-[15px] font-semibold text-black hover:bg-[#E7E7E7] hover:text-black hover:shadow-none"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Book a call
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          >
            <p className="text-[12px] uppercase tracking-[0.34em] text-[#7A7A7A]">
              Any queries you have
            </p>
            <h3 className="mt-4 font-heading text-[32px] font-bold leading-[1.06] tracking-[-0.04em] text-white md:text-[44px]">
              Questions you may Ask
            </h3>

            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-[28px] border border-white/10 bg-[#101010]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex((current) =>
                          current === index ? -1 : index,
                        )
                      }
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-lg font-medium text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={[
                          "h-5 w-5 shrink-0 text-[#A0A0A0] transition-transform duration-200",
                          isOpen ? "rotate-180" : "",
                        ].join(" ")}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/10 px-6 py-5 text-[15px] leading-7 text-[#A8A8A8]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
