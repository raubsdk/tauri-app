import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,t s,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  plugins: [],
  }
};

export default config;