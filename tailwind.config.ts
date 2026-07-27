import type { Config } from "tailwindcss";

// Velocity-B brand tokens (confirmed in briefing doc)
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1543",
        blue: "#5CA6FF",
        orange: "#FF8A3D",
        hair: "#e7e8ee",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
