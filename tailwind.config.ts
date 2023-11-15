import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/Bg.jpg')",
        "about-bg": "url('/About Us v1.3.jpg')",
      },
    },
  },
  plugins: [require("preline/plugin"), require("tailwindcss-bg-patterns")],
};
export default config;
