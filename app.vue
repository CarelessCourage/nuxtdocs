<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { umbra, rgbStrippedFormat } from "@umbrajs/core";

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
const { data: files } = useLazyFetch<ParsedContent[]>("/api/search.json", {
  default: () => [],
  server: false,
});

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  ogSiteName: "UmbraJS - Docs",
  twitterCard: "summary_large_image",
});

provide("navigation", navigation);

onMounted(() => {
  const theme = umbra({
    foreground: "#ffffff",
    background: "#000000",
    accents: ["#ff0000", "#0000ff"],
  }).apply();

  console.log(theme);
});
</script>

<template>
  <div>
    <Header />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <Footer />

    <ClientOnly>
      <LazyUDocsSearch :files="files" :navigation="navigation" />
    </ClientOnly>

    <UNotifications />
  </div>
</template>

<style lang="scss">
@import "./css";

:root {
  --color-primary-50: 239 253 245;
  --color-primary-100: 217 251 232;
  --color-primary-200: 179 245 209;
  --color-primary-300: 117 237 174;
  --color-primary-400: 0 220 130;
  --color-primary-500: 0 193 106;
  --color-primary-600: 0 161 85;
  --color-primary-700: 0 127 69;
  --color-primary-800: 1 101 56;
  --color-primary-900: 10 83 49;
  --color-primary-950: 5 46 22;
  --color-primary-DEFAULT: var(--color-primary-500);
  --color-gray-50: 249 250 251;
  --color-gray-100: 243 244 246;
  --color-gray-200: 229 231 235;
  --color-gray-300: 209 213 219;
  --color-gray-400: 156 163 175;
  --color-gray-500: 107 114 128;
  --color-gray-600: 75 85 99;
  --color-gray-700: 55 65 81;
  --color-gray-800: 31 41 55;
  --color-gray-900: 17 24 39;
  --color-gray-950: 3 7 18;
}

html {
  overflow-x: hidden;
}
</style>
