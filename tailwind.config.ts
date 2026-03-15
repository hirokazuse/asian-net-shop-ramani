import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        thai: ['var(--font-thai)', 'sans-serif'],
      },
      colors: {
        'deep-green': '#1B4332',
        'mango': '#F5A623',
        'cream': '#FDFAF4',
        'warm-earth': '#8B7355',
        'leaf-green': '#4A7C59',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
