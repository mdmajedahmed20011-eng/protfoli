"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps {
  variant: "primary" | "ghost" | "outline";
  size: "sm" | "md" | "lg";
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  loading?: boolean;
  icon?: ReactNode;
}

const variantClasses = {
  primary:
    "bg-[var(--color-accent)] text-white shadow-[0_0_0_rgba(255,61,0,0)] hover:bg-[var(--color-accent-hover)] hover:shadow-glow",
  ghost:
    "border border-[#333333] bg-transparent text-white hover:border-[var(--color-accent)] hover:bg-[rgba(255,61,0,0.05)] hover:text-[var(--color-accent)]",
  outline:
    "border border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white",
} as const;

const sizeClasses = {
  sm: "rounded-[6px] px-4 py-2 text-sm",
  md: "rounded-[8px] px-6 py-3 text-base",
  lg: "rounded-[8px] px-8 py-4 text-lg",
} as const;

function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
    />
  );
}

export function Button({
  variant,
  size,
  children,
  onClick,
  href,
  className,
  loading,
  icon,
}: ButtonProps) {
  const sharedClassName = cn(
    "inline-flex items-center justify-center gap-2 font-body font-semibold transition-all duration-200 ease-out",
    "disabled:pointer-events-none disabled:opacity-60",
    "focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]",
    "hover:-translate-y-0.5",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const content = loading ? (
    <Spinner />
  ) : (
    <>
      <span>{children}</span>
      {icon ? (
        <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:rotate-[5deg]">
          {icon}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileTap={{ scale: 0.98 }}
        href={href}
        aria-disabled={loading}
        className={cn("group", sharedClassName)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={loading}
      className={cn("group", sharedClassName)}
    >
      {content}
    </motion.button>
  );
}

export type { ButtonProps };

