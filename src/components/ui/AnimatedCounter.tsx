"use client";

import CountUp from "react-countup";

import { useInView } from "@/hooks/useInView";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({
  end,
  suffix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView();

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp duration={duration} end={end} suffix={suffix} />
      ) : (
        `0${suffix}`
      )}
    </span>
  );
}

