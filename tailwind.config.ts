import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";
import daisyui from "daisyui"


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2', // Light Blue (Primary)
        secondary: '#FDBA74', // Light Orange (Secondary)
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
