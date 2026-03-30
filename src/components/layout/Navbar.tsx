"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";

import { Button } from "@/components/ui/Button";
import { mzmediaAssets } from "@/lib/mzmedia-data";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "Review", target: "review" },
  { label: "Work", target: "work" },
  { label: "Case study", target: "case-study" },
  { label: "process", target: "process" },
  { label: "book a call", target: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <nav
          className={[
            "mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 transition-all duration-300 ease-in-out md:px-6",
            isScrolled
              ? "bg-[rgba(10,10,10,0.82)] backdrop-blur-xl"
              : "bg-transparent",
          ].join(" ")}
          aria-label="Primary navigation"
        >
          <button
            type="button"
            aria-label="Scroll to top"
            onClick={() =>
              scroller.scrollTo("top", {
                smooth: true,
                duration: 800,
                offset: -72,
              })
            }
            className="flex items-center"
          >
            <Image
              src={mzmediaAssets.logo}
              alt="MZ Media logo"
              width={112}
              height={28}
              className="h-auto w-[112px]"
              priority
            />
          </button>

          <div className="hidden items-center gap-8 xl:flex">
            {navItems.map((item) => (
              <ScrollLink
                key={item.target}
                to={item.target}
                spy
                smooth
                duration={800}
                offset={-72}
                activeClass="!text-[var(--color-accent)]"
                className="cursor-pointer text-[15px] font-medium capitalize text-[var(--color-text-secondary)] transition-colors duration-150 hover:text-white"
                aria-label={`Scroll to ${item.label}`}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          <div className="hidden xl:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() =>
                scroller.scrollTo("contact", {
                  smooth: true,
                  duration: 800,
                  offset: -72,
                })
              }
              className="rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-black hover:bg-[#E8E8E8] hover:text-black hover:shadow-none"
            >
              Book a call
            </Button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(17,17,17,0.6)] xl:hidden"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
              className="absolute h-0.5 w-5 bg-white"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute h-0.5 w-5 bg-white"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              className="absolute h-0.5 w-5 bg-white"
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex min-h-screen flex-col bg-[rgba(10,10,10,0.97)] px-6 pb-10 pt-28 backdrop-blur-xl xl:hidden"
          >
            <div className="flex flex-1 flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.target}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <ScrollLink
                    to={item.target}
                    smooth
                    duration={800}
                    offset={-72}
                    onClick={() => setIsOpen(false)}
                    className="block cursor-pointer font-heading text-[28px] font-bold capitalize text-white"
                    aria-label={`Scroll to ${item.label}`}
                  >
                    {item.label}
                  </ScrollLink>
                </motion.div>
              ))}
            </div>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                setIsOpen(false);
                scroller.scrollTo("contact", {
                  smooth: true,
                  duration: 800,
                  offset: -72,
                });
              }}
              className="w-full"
            >
              Book a call
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
