import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#e8f7ee",
          100: "#c7edd5",
          200: "#93dbae",
          300: "#5ec987",
          400: "#2db761",
          500: "#009E49",
          600: "#00843D",
          700: "#056a33",
          800: "#07542b",
          900: "#064324",
          950: "#022513",
        },
        cardBg: "#EEF3F8",
        brandNavy: "#0B1528",
        cobalt: "#0000F2",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-cabinet)", "var(--font-outfit)", "sans-serif"],
      },
      borderRadius: {
        "2.5xl": "1.375rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
