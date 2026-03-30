import { useInView as useIntersectionInView } from "react-intersection-observer";

export function useInView() {
  return useIntersectionInView({
    triggerOnce: true,
    threshold: 0.35,
  });
}

