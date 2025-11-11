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
        background: "#FFFFFF",
        primary100: "#ECFBFB",
        primary500: "#37cece",
        primary700: "#2CA7A7",
        surface: "#EAEAEA",

        textPrimary: "#3d3d3d",
        textSecondary: "#727272",
        textTertiary: "#A5A5A5",

        error: "#F03800",

        mint: "#ecfbfb",
        lightGray: "#acacac",
        labelSale: "#ce373a",
        accentBg: "rgba(55, 206, 206, 0.1)",
        oldPrice: "rgba(0,0,0,0.21)",
      },
    },
    screens: {
      xs: "390px",
      sm: "768px",
      md: "1440px",
    },
  },
  plugins: [],
};

export default config;
