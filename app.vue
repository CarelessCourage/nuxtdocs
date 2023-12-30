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
    accents: ["#ff0000"],
  }).apply({
    formater: rgbStrippedFormat,
  });

  const theme2 = umbra({
    foreground: "#ffffff",
    background: "#000000",
    accents: ["#ff0000"],
  }).apply({
    formater: rgbStrippedFormat,
  });

  console.log("rezx", JSON.parse(JSON.stringify(theme2.output)));
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
//@import "./css";

:root {
  --inner-radius: 3px;
  --radius: 10px;
  --outer-radius: calc(var(--radius) + var(--space-s));
}

:root {
  --base: 0 0 0;
  --base-10: 17 17 17;
  --base-20: 37 37 37;
  --base-30: 55 55 55;
  --base-40: 72 72 72;
  --base-50: 114 114 114;
  --base-60: 147 147 147;
  --base-70: 173 173 173;
  --base-80: 193 193 193;
  --base-90: 220 220 220;
  --base-100: 236 236 236;
  --base-110: 245 245 245;
  --base-120: 249 249 249;
  --base-contrast: 255 255 255;

  --accent: 255 0 0;
  --accent-10: 20 6 2;
  --accent-20: 40 16 5;
  --accent-30: 58 20 8;
  --accent-40: 75 23 10;
  --accent-50: 116 27 12;
  --accent-60: 255 0 0;
  --accent-70: 255 105 69;
  --accent-80: 255 146 113;
  --accent-90: 255 196 175;
  --accent-100: 255 223 210;
  --accent-110: 255 237 230;
  --accent-120: 255 245 241;
  --accent-contrast: 255 255 255;
}

:root {
  --color-gray-50: var(--base-120);
  --color-gray-100: var(--base-110);
  --color-gray-200: var(--base-90);
  --color-gray-300: var(--base-70);
  --color-gray-400: var(--base-60);
  --color-gray-500: var(--base-50);
  --color-gray-600: var(--base-40);
  --color-gray-700: var(--base-30);
  --color-gray-800: var(--base-20);
  --color-gray-900: var(--base-10);
  --color-gray-950: var(--base);

  --color-primary-50: var(--accent-120);
  --color-primary-100: var(--accent-110);
  --color-primary-200: var(--accent-100);
  --color-primary-300: var(--accent-90);
  --color-primary-400: var(--accent-80);
  --color-primary-500: var(--accent-60);
  --color-primary-600: var(--accent-50);
  --color-primary-700: var(--accent-40);
  --color-primary-800: var(--accent-30);
  --color-primary-900: var(--accent-20);
  --color-primary-950: var(--accent-10);
  --color-primary-DEFAULT: var(--color-primary-500);
}

html {
  overflow-x: hidden;
}
</style>
