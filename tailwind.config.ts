import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Palette - "The Andalusian Light"
        ivory: "#FAF9F6",          // Primary background
        verdigris: "#34D1BF",      // Accent 1 - Mint
        brass: "#C6A770",          // Accent 2 - Gold
        sand: "#E9DCC9",           // Accent 3 - Pale Beige
        charcoal: "#1E1E1E",       // Text Primary
        warmGray: "#555555",       // Text Secondary
        mutedTeal: "#9BBAB3",      // Lines & Ornaments

        // Legacy colors (for backwards compatibility)
        midnight: "#0A0F1F",
        alabaster: "#E9DCC9",
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
