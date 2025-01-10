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
        primary: "#2D3748", // Dark gray-blue for primary actions
        secondary: "#718096", // Muted gray for secondary elements
        accent: "#A0AEC0", // Subtle blue-gray accent
        background: "#FFFFFF", // Clean white background
        foreground: "#1A202C", // Rich dark gray for text
        muted: "#E2E8F0", // Light gray for borders or less prominent elements
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
