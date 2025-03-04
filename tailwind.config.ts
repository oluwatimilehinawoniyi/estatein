import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "background-grey": "var(--background-grey)",
        primary: "var(--primary)",
        border: "var(--border)",
      },
      animation: {
        "spin-reverse": "var(--animate-spin-reverse)",
        spins: "var(--animate-spins)",
      },
    },
  },
  plugins: [],
} satisfies Config;
