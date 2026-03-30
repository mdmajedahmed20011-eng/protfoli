import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

export interface NavItem {
  label: string;
  target: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  subtitle: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
}

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  badge: string;
  monthlyPrice: string;
  quarterlyPrice: string;
  period: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}
