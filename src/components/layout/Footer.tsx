"use client";

import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { Link as ScrollLink, scroller } from "react-scroll";

import type { SocialLink } from "@/types";

const socialLinks: SocialLink[] = [
  { label: "YouTube", href: "https://www.youtube.com", icon: FaYoutube },
  { label: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
  { label: "TikTok", href: "https://www.tiktok.com", icon: FaTiktok },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedinIn },
];

const serviceLinks = [
  "YouTube Video Editing",
  "Short-Form Content",
  "Promotional Videos",
  "Motion Graphics",
  "Social Media Marketing",
  "Thumbnail Design",
];

const companyLinks = [
  { label: "About", target: "top" },
  { label: "Process", target: "process" },
  { label: "Results", target: "results" },
  { label: "Careers", target: "contact" },
  { label: "Blog", target: "work" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] bg-[#080808]">
      <div className="container py-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
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
              className="font-heading text-[22px] font-extrabold tracking-[-0.04em]"
            >
              <span className="text-[var(--color-accent)]">MZ</span>{" "}
              <span className="text-white">Media</span>
            </button>
            <p className="mt-4 max-w-[220px] text-sm leading-6 text-[var(--color-text-tertiary)]">
              Done-For-You Content Systems That Generate Leads on Autopilot
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit MZ Media on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-text-tertiary)] transition-all duration-200 hover:bg-[var(--color-accent)] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#555555]">
              Services
            </p>
            <ul className="mt-6 space-y-3">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <ScrollLink
                    to="services"
                    smooth
                    duration={800}
                    offset={-72}
                    className="cursor-pointer text-sm text-[var(--color-text-secondary)] hover:text-white"
                    aria-label={`Scroll to services section for ${item}`}
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#555555]">
              Company
            </p>
            <ul className="mt-6 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <ScrollLink
                    to={item.target}
                    smooth
                    duration={800}
                    offset={-72}
                    className="cursor-pointer text-sm text-[var(--color-text-secondary)] hover:text-white"
                    aria-label={`Scroll to ${item.label}`}
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#555555]">
              Get in Touch
            </p>
            <div className="mt-6 space-y-3 text-sm text-[var(--color-text-secondary)]">
              <a
                href="mailto:hello@mzmedia.digital"
                aria-label="Email MZ Media"
                className="block hover:text-white"
              >
                hello@mzmedia.digital
              </a>
              <a
                href="mailto:hello@mzmedia.digital?subject=Book%20a%20Discovery%20Call"
                aria-label="Book a discovery call with MZ Media"
                className="block font-semibold text-[var(--color-accent)]"
              >
                Book a Discovery Call
              </a>
              <p>Mon-Fri, 9am-6pm EST</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#111111] pt-6 text-[13px] text-[#444444] md:flex-row md:items-center md:justify-between">
          <p>© 2025 MZ Media. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" aria-label="View privacy policy">
              Privacy Policy
            </a>
            <a href="#" aria-label="View terms of service">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
