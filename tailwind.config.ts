import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textMain: "#3d3d3d",
        accentMain: "#37cece",
        mint: "#ecfbfb",
        lightGray: "#acacac",

        accentBg: "rgba(55, 206, 206, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
