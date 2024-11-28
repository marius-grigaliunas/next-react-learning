import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'royal-purple' : '#1b0647',
        'gray-green' : '#0b6e4e',
        'baby-sky' : '#6fcee8',
        'kinda-tuirquoise' : '#078a7d',
        'l-k-turquoise' : '#1aad9f',
      },
    },
  },
  plugins: [],
} satisfies Config;
