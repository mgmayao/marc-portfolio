import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dce8ff",
          200: "#b8d0ff",
          300: "#8ab0ff",
          400: "#5c88ff",
          500: "#3763f5",
          600: "#2647d6",
          700: "#1f38ac",
          800: "#1c2f87",
          900: "#1a296b",
        },
        accent: {
          400: "#f2b84b",
          500: "#e9a325",
          600: "#c9861a",
        },
        ink: {
          50: "#f5f7fa",
          100: "#e9edf3",
          200: "#cfd8e3",
          400: "#7c8aa0",
          600: "#4a5568",
          800: "#1b2233",
          900: "#0d1220",
          950: "#080b14",
        },
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #3763f5 0%, #6d4cf5 50%, #e9a325 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, rgba(55,99,245,0.12) 0%, rgba(109,76,245,0.12) 50%, rgba(233,163,37,0.12) 100%)",
        "grid-pattern": "linear-gradient(to right, rgba(124,138,160,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,138,160,0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(13, 18, 32, 0.12)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
      backgroundSize: {
        "gradient-lg": "200% 200%",
      },
    },
  },
  plugins: [],
};

export default config;
