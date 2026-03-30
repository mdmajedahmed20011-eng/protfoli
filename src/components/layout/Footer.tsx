"use client";

import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import { mzmediaAssets } from "@/lib/mzmedia-data";
import type { SocialLink } from "@/types";

const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedinIn },
  { label: "X", href: "https://x.com", icon: FaXTwitter },
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebookF },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="container py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Image
            src={mzmediaAssets.logo}
            alt="MZ Media logo"
            width={112}
            height={28}
            className="h-auto w-[112px]"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 text-[13px] text-[#9A9A9A]">
            <a href="#" aria-label="Terms and conditions">
              Terms & Conditions
            </a>
            <a href="#" aria-label="Refund policy">
              Refund Policy
            </a>
            <a href="#" aria-label="Privacy policy">
              Privacy Policy
            </a>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit MZ Media on ${label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#B7B7B7] transition-all duration-200 hover:border-white/30 hover:bg-white hover:text-black"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-[13px] text-[#6A6A6A]">
          © 2025 mzmedia | all rights reseved by mzmedia
        </p>
      </div>
    </footer>
  );
}
