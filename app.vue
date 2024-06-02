<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogSiteName: 'UmbraJS - Docs',
  twitterCard: 'summary_large_image'
})

provide('navigation', navigation)
const theme = useUmbra()

onMounted(() => {
  theme.apply()
})
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

body {
  transition: 0.8s;
}

h1,
a {
  color: rgb(var(--base-contrast) / 1);
}

:root {
  --inner-radius: 3px;
  --radius: 10px;
  --outer-radius: calc(var(--radius) + var(--space-s));
}

$mobile: 360px;
$phablet: 540px;
$tablet: 850px;
$desktop: 1200px;

:root {
  --space-xs: calc(var(--space) / 4);
  --space-s: calc(var(--space) / 2);
  --space: 25px;
  --space-m: calc(2 * var(--space));
  --space-l: calc(4 * var(--space));
  --space-xl: calc(8 * var(--space));

  --inner-radius: 3px;
  --radius: 10px;
  --outer-radius: calc(var(--radius) + var(--space-s));

  @media only screen and (max-width: $tablet) {
    --space: 12px;
  }
  @media only screen and (max-width: $mobile) {
    --space: 6px;
  }
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

  --accent: 136 136 255;
  --accent-10: 11 10 17;
  --accent-20: 25 24 37;
  --accent-30: 35 34 55;
  --accent-40: 44 43 72;
  --accent-50: 66 65 114;
  --accent-60: 136 136 255;
  --accent-70: 169 164 255;
  --accent-80: 192 186 255;
  --accent-90: 221 217 255;
  --accent-100: 236 234 255;
  --accent-110: 245 243 255;
  --accent-120: 250 248 255;
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
  --color-primary-DEFAULT: var(--color-primary-300);
}

:root {
  --border-subtle: var(--base-30);
  --border: var(--base-50);
  --border-active: var(--accent-90);

  --link-subtle: var(--base-90);
  --link: var(--accent-90);
  --link-active: var(--accent-100);

  --button-subtle: var(--base-90);
  --button: var(--accent-90);
  --button-active: var(--accent-100);

  --button-border-subtle: var(--base-30);
  --button-border: var(--base-50);
  --button-border-active: var(--accent-90);
}

.dark {
  --ui-foreground: var(--base-120);
  --ui-background: var(--base);
}

.prose-primary {
  --tw-prose-pre-border: rgb(var(--color-gray-900));
}

html {
  overflow-x: hidden;
  transition: 0.8s;
}

div.prose.code {
  --tw-prose-pre-bg: rgb(var(--color-gray-900));
}
</style>
