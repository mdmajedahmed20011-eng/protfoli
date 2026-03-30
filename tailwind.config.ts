import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        sm: "24px",
        lg: "24px",
        xl: "24px",
        "2xl": "24px",
      },
      screens: {
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        accent: "#FF3D00",
        "accent-hover": "#E63600",
        "bg-primary": "#0A0A0A",
        "bg-secondary": "#111111",
        "bg-tertiary": "#1A1A1A",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)",
        hover: "0 8px 40px rgba(0,0,0,0.5)",
        glow: "0 0 40px rgba(255, 61, 0, 0.3)",
        "glow-lg": "0 0 80px rgba(255, 61, 0, 0.2)",
        intense: "0 16px 64px rgba(0,0,0,0.6)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-soft": "floatSoft 3s ease-in-out infinite",
        "float-soft-delayed": "floatSoftDelayed 3.5s ease-in-out infinite",
        "pulse-ring": "pulseRing 2s ease-out infinite",
        "orb-drift": "orbDrift 8s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        floatSoftDelayed: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        orbDrift: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

