import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep maroon / saffron — primary brand
        maroon: {
          DEFAULT: "#8B1E2B",
          50: "#FBEDEE",
          100: "#F3D2D5",
          600: "#8B1E2B",
          700: "#741823",
          800: "#5E1019",
          900: "#430A10",
        },
        // Warm gold / marigold accent
        gold: {
          DEFAULT: "#D4A437",
          soft: "#E6C879",
          100: "#F6EBCB",
          600: "#D4A437",
          700: "#B5862A",
        },
        // Cream / ivory background
        cream: {
          DEFAULT: "#FAF6EE",
          dark: "#F2EADC",
        },
        // Near-black ink text
        ink: {
          DEFAULT: "#1C1410",
          soft: "#3D332C",
          muted: "#6B5F56",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -8px rgba(28, 20, 16, 0.18)",
        "card-hover": "0 16px 40px -12px rgba(139, 30, 43, 0.28)",
        glow: "0 0 0 1px rgba(212, 164, 55, 0.4)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(120% 90% at 50% 0%, rgba(139,30,43,0.10) 0%, rgba(250,246,238,0) 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        shimmer: "shimmer 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
