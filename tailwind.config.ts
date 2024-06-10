import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      base: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },
    container: {
      center: true,
      padding: "32px",
    },
    fontSize: {
      "13": "13px",
      base: "15px",
      main: "16px",
      "17": "17px",
      xs: "20px",
      normal: "22px",
      lg: "28px",
    },
    fontWeight: {
      main: "400",
      bold: "600",
    },
    colors: {
      white: {
        main: "#FFFFFF",
        accent: "#edeeff",
      },
      black: {
        main: "#000000",
        accent: "#191e3b",
      },
      purple: {
        main: "#714eff",
      },
      yellow: {
        main: "#fddb32",
      },
      gray: {
        main: "#9d9da1",
        accent: "#e5e5ea",
        secondary: "#DCE3F680",
      },
      opacity: {
        gray80: "#3c3c43cc",
        gray18: "#3c3c432e",
        gray30: "#8888884d",
        gray50: "#3c3c4380",
        black10: "#0000001a",
        white50: "#ffffff80",
        gray: "#9797974D",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
