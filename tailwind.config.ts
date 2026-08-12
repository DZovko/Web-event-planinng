import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* Extra breakpoint for very small phones (iPhone SE and similar) */
      screens: {
        xs: "420px",
      },
      colors: {
        ink: "#1F2937",
        gold: {
          DEFAULT: "#94283b",
          light: "#b8455a",
          dark: "#751f2f",
        },
        /* Single page background. Also mirrored as --page-bg in globals.css. */
        cream: "#edebd6",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
