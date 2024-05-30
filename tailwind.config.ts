import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/hero.jpg')",
        "about": "url('/images/about.jpg')",
        "bus1": "url('/images/bus1.jpg')",
        "bus2": "url('/images/bus2.jpg')",
        "bus3": "url('/images/bus3.jpg')",
        "bus4": "url('/images/bus4.jpg')",
        "bus5": "url('/images/bus5.jpg')",
        "bus6": "url('/images/bus6.jpg')",
      },
      backgroundSize: {
        "size-sm": "150%",
        "size-md": "125%",
        "size-lg": "120%",
      },
      backgroundPosition: {
        "pos-sm": "25% 95%",
        "pos-md": "18% 70%",
        "pos-lg": "100% 57%",
      },
      transitionProperty: {
        "width": "width",
      }
    }
  },
  plugins: [],
};
export default config;
