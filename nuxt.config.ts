// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxtjs/fontaine",
    "@nuxtjs/google-fonts",
    "nuxt-og-image",
    "@pinia/nuxt"
  ],
  ui: {
    icons: ["heroicons", "simple-icons"],
  },
  // Fonts
  fontMetrics: {
    fonts: ["DM Sans"],
  },
  googleFonts: {
    display: "swap",
    download: true,
    families: {
      "DM+Sans": [400, 500, 600, 700],
    },
  },
  routeRules: {
    "/api/search.json": { prerender: true },
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false },
  content: {
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
        //sepia: "monokai",
      },
    },
  },
});