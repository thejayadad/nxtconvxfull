import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#F6B8C3",
        accent: "#FFD56E",
        background: "#F8F9FA",
        foreground: "#2D3748",
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
