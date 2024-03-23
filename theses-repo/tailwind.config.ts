import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //light Mode
        "primary": "#00419c",
        "on-primary": "#f5f5f5",
        "primary-container": "#d9e2ff",
        "on-primary-container": "#002d6f",
        "error": "#93000a",
        "on-error": "#f5f5f5",
        "error-container": "#ffdad6",
        "on-error-container": "#690005",
        "surface": "#eeeeee",
        "on-surface": "#333333",
        "on-surface-variant": "#666666",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f5f5",
        "surface-container": "#dddddd",
        "surface-container-high": "#cccccc",
        "surface-container-highest": "#bbbbbb",
        "outline": "#111111",
        "outline-variant": "#999999",
        "shadow": "#111111",
        "scrim": "#111111",
        "inverse-surface": "#222222",
        "on-inverse-surface": "#dddddd",
        "inverse-primary": "#f5f5f5",
        //dark mode
        "dark-primary": "#86a9ff",
        "dark-on-primary": "#111111",
        "dark-primary-container": "#001945",
        "dark-on-primary-container": "#d9e2ff",
        "dark-error": "#ff897d",
        "dark-on-error": "#111111",
        "dark-error-container": "#410002",
        "dark-on-error-container": "#ffdad6",
        "dark-surface": "#222222",
        "dark-on-surface": "#dddddd",
        "dark-on-surface-variant": "#aaaaaa",
        "dark-surface-container-lowest": "#000000",
        "dark-surface-container-low": "#111111",
        "dark-surface-container": "#333333",
        "dark-surface-container-high": "#444444",
        "dark-surface-container-highest": "#555555",
        "dark-outline": "#f5f5f5",
        "dark-outline-variant": "#777777",
        "dark-shadow": "#000000",
        "dark-scrim": "#000000",
        "dark-inverse-surface": "#eeeeee",
        "dark-on-inverse-surface": "#333333",
        "dark-inverse-primary": "#111111",
      },
      borderRadius: {
        'none': '0',
        'extra-small': '0.25rem',
        'small': '0.5rem',
        'medium': '0.75rem',
        'large': '1rem',
        'extra-large': '1.75rem',
        'full': '9999px',
      },
      boxShadow: {
        'elevation-4': '4px 4px 4px 0px rgba(0, 0, 0, 0.4)',
        'elevation-5': '8px 8px 8px 0px rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        "label-small": ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.03rem' }],
        "label-medium": ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.03rem' }],
        "label-large": ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.01rem' }],

        "body-small": ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025rem' }],
        "body-medium": ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.015rem' }],
        "body-large": ['1.125rem', { lineHeight: '1.5rem', letterSpacing: '0.03rem' }],

        "title-small": ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.01rem' }],
        "title-medium": ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.02rem' }],
        "title-large": ['1.5rem', { lineHeight: '2rem', letterSpacing: '0rem' }],

        "headline-small": ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '0rem' }],
        "headline-medium": ['2rem', { lineHeight: '2.5rem', letterSpacing: '0rem' }],
        "headline-large": ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '0rem' }],

        "display-small": ['2.5rem', { lineHeight: '3rem', letterSpacing: '0rem' }],
        "display-medium": ['3.1875rem', { lineHeight: '3.625rem', letterSpacing: '0rem' }],
        "display-large": ['4rem', { lineHeight: '4.5rem', letterSpacing: '-0.01563rem' }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionProperty: {
        interactive: 'border-radius, color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow',
      },
      scale: {
        97: '.97',
      },
    },
  },
  plugins: [],
};
export default config;