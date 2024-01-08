/** @type {import('tailwindcss').Config} */

const hue = 236.29

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:{
      colors: {
        primary: {
          50: `oklch(98.89% 0.05 ${hue})`,
          100: `oklch(95.89% 0.09 ${hue})`,
          150: `oklch(90.89% 0.12 ${hue})`,
          200: `oklch(80.01% 0.135 ${hue})`,
          300: `oklch(68.16% 0.14 ${hue})`,
          400: `oklch(58.67% 0.13 ${hue})`,
          500: `oklch(48.7% 0.10 ${hue})`,
          600: `oklch(38.52% 0.09 ${hue})`,
          700: `oklch(28.54% 0.062 ${hue})`,
          800: `oklch(18.12% 0.04 ${hue})`,
          900: `oklch(15.12% 0.019 ${hue})`,
        }
      }
    }

  },
  plugins: [],
}
