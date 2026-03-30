"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] shadow-[0_0_80px_rgba(255,61,0,0.15)]">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,10,10,0.82)_0%,rgba(10,10,10,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,61,0,0.22),transparent_35%),radial-gradient(circle_at_78%_35%,rgba(255,107,53,0.14),transparent_32%),linear-gradient(135deg,#111111_0%,#171717_100%)]" />

      {isPlaying ? (
        <div className="relative flex h-full items-center justify-center overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute h-56 w-56 rounded-full border border-[rgba(255,61,0,0.22)]"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute h-80 w-80 rounded-full border border-dashed border-[rgba(255,107,53,0.18)]"
          />
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            <div className="flex items-end gap-2">
              {[48, 72, 56, 90, 64].map((height, index) => (
                <motion.span
                  key={height}
                  initial={{ height: 18 }}
                  animate={{ height: [18, height, 24, height - 10, 18] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.12,
                  }}
                  className="w-3 rounded-full bg-[linear-gradient(180deg,#FF6B35_0%,#FF3D00_100%)]"
                />
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Showreel Preview
              </p>
              <p className="mt-2 text-lg text-[var(--color-text-primary)]">
                Cinematic editing systems built for growth.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          aria-label="Play MZ Media showreel preview"
          onClick={() => setIsPlaying(true)}
          className="relative z-10 flex h-full w-full items-center justify-center"
        >
          <span className="absolute h-[100px] w-[100px] animate-pulse-ring rounded-full border-2 border-[rgba(255,61,0,0.4)]" />
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-accent)] shadow-glow"
          >
            <Play className="ml-1 h-6 w-6 fill-white text-white" />
          </motion.span>
        </button>
      )}
    </div>
  );
}

