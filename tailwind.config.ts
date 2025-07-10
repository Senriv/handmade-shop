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
        accentMainLight: "#ECFBFB",
        accentMain: "#37cece",
        accentMainActive: "#2CA7A7",
        mint: "#ecfbfb",
        lightGray: "#acacac",
        mediumGray: "#727272",
        placeholderPrimary: "#A5A5A5",
        error: "#F03800",
        labelSale: "#ce373a",

        accentBg: "rgba(55, 206, 206, 0.1)",
      },
    },
    screens: {
      xs: "389px",
      sm: "768px",
      md: "1440px",
    },
  },
  plugins: [],
};

export default config;
