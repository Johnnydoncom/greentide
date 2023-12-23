import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        serif: ['var(--font-sansita)'],
      },
      colors: {
        "primary": {
          DEFAULT: "#74A651",
          50: "#F2F7EE",
          100: "#E4EEDD",
          200: "#C6DCB7",
          300: "#ABCB95",
          400: "#90BA72",
          500: "#74A651",
          600: "#5E8641",
          700: "#466331",
          800: "#2E4120",
          900: "#182211",
          950: "#0C1108"
        },
        "secondary": {
          DEFAULT: "#1F4040",
          50: "#E4F2F2",
          100: "#C8E4E4",
          200: "#8EC8C8",
          300: "#57ADAD",
          400: "#3A7878",
          500: "#1F4040",
          600: "#193434",
          700: "#122626",
          800: "#0C1818",
          900: "#070E0E",
          950: "#030707"
        },
        "accent": {
          DEFAULT: "#93BF96",
          50: "#F5F9F6",
          100: "#E9F2E9",
          200: "#D5E6D6",
          300: "#BFD9C1",
          400: "#A9CCAB",
          500: "#93BF96",
          600: "#68A66D",
          700: "#4C804F",
          800: "#335636",
          900: "#192A1A",
          950: "#0D160E"
        },
        "neutral": {
          DEFAULT: "#040404",
          "50": "#E6E6E6",
          "100": "#CCCCCC",
          "200": "#9C9C9C",
          "300": "#696969",
          "400": "#363636",
          "500": "#040404",
          "600": "#030303",
          "700": "#030303",
          "800": "#030303",
          "900": "#000000"
        },
        "info": {
          DEFAULT: "#3ABFF8",
          "50": "#EBF9FE",
          "100": "#D8F2FE",
          "200": "#B0E5FC",
          "300": "#89D9FB",
          "400": "#61CCF9",
          "500": "#3ABFF8",
          "600": "#08A8EC",
          "700": "#067EB1",
          "800": "#045476",
          "900": "#022A3B"
        },
        "success": {
          DEFAULT: "#28a745",
          50: "#E6F9EB",
          100: "#CEF3D6",
          200: "#9CE7AE",
          300: "#6BDC85",
          400: "#39D05D",
          500: "#28A745",
          600: "#1F8437",
          700: "#186329",
          800: "#10421B",
          900: "#08210E",
          950: "#041007"
        },
        "warning": {
          DEFAULT: "#FFC107",
          50: "#FFF9E5",
          100: "#FFF2CC",
          200: "#FFE79E",
          300: "#FFDA6B",
          400: "#FFCD38",
          500: "#FFC107",
          600: "#D19D00",
          700: "#9E7700",
          800: "#6B5000",
          900: "#332600",
          950: "#191300"
        },
        "error": {
          DEFAULT: "#DC3545",
          50: "#FBE9EB",
          100: "#F8D8DB",
          200: "#F1ACB3",
          300: "#EA858F",
          400: "#E35E6B",
          500: "#DC3545",
          600: "#BB2030",
          700: "#8B1824",
          800: "#5B1017",
          900: "#30080C",
          950: "#160406"
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
