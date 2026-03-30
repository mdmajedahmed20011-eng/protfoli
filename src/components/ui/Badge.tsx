import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}

export function Badge({ children, className, accent = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
        accent
          ? "border-[rgba(255,61,0,0.4)] bg-[rgba(255,61,0,0.08)] text-[var(--color-accent)]"
          : "border-[var(--color-border)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

