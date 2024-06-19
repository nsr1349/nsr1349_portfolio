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
        dark: "#141517",
        darkSub: "#1E2022",
        darkSubHover: "#2C2B30",
        point: "#00FF99",
      },
    },
  },
  plugins: [],
};
export default config;
