import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "DM Sans fallback", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "base-50": "rgb(var(--base) / <alpha-value>)",
        "base-100": "rgb(var(--base-10) / <alpha-value>)",
        "base-200": "rgb(var(--base-20) / <alpha-value>)",
        "base-300": "rgb(var(--base-30) / <alpha-value>)",
        "base-400": "rgb(var(--base-40) / <alpha-value>)",
        "base-500": "rgb(var(--base-50) / <alpha-value>)",
        "base-600": "rgb(var(--base-60) / <alpha-value>)",
        "base-700": "rgb(var(--base-70) / <alpha-value>)",
        "base-800": "rgb(var(--base-90) / <alpha-value>)",
        "base-900": "rgb(var(--base-110) / <alpha-value>)",
        "base-950": "rgb(var(--base-120) / <alpha-value>)",

        "accent-50": "rgb(var(--accent-10) / <alpha-value>)",
        "accent-100": "rgb(var(--accent-20) / <alpha-value>)",
        "accent-200": "rgb(var(--accent-40) / <alpha-value>)",
        "accent-300": "rgb(var(--accent-50) / <alpha-value>)",
        "accent-400": "rgb(var(--accent-60) / <alpha-value>)",
        "accent-500": "rgb(var(--accent-70) / <alpha-value>)",
        "accent-600": "rgb(var(--accent-80) / <alpha-value>)",
        "accent-700": "rgb(var(--accent-90) / <alpha-value>)",
        "accent-800": "rgb(var(--accent-100) / <alpha-value>)",
        "accent-900": "rgb(var(--accent-110) / <alpha-value>)",
        "accent-950": "rgb(var(--accent-120) / <alpha-value>)",

        "border-subtle": "rgb(var(--border-subtle) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        "border-active": "rgb(var(--border-active) / <alpha-value>)",

        "link-subtle": "rgb(var(--link-subtle) / <alpha-value>)",
        link: "rgb(var(--link) / <alpha-value>)",
        "link-active": "rgb(var(--link-active) / <alpha-value>)",

        "button-subtle": "rgb(var(--button-subtle) / <alpha-value>)",
        button: "rgb(var(--button) / <alpha-value>)",
        "button-active": "rgb(var(--button-active) / <alpha-value>)",

        "button-border-subtle":
          "rgb(var(--button-border-subtle) / <alpha-value>)",
        "button-border": "rgb(var(--button-border) / <alpha-value>)",
        "button-border-active":
          "rgb(var(--button-border-active) / <alpha-value>)",
      },
    },
  },
};
