<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

const config = {
  wrapper:
    "block px-6 py-8 border not-prose rounded-lg border-gray-800 hover:bg-gray-800/30 group",
  icon: {
    wrapper:
      "inline-flex items-center rounded-full p-1.5 bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-900 mb-4 group-hover:ring-primary/50",
    base: "w-5 h-5 text-gray-300 group-hover:text-primary",
  },
  title: "font-medium text-gray-900 dark:text-white text-[15px] mb-1",
  description:
    "text-sm font-normal group-hover:text-gray-100 text-gray-500 dark:text-gray-400 line-clamp-2",
};

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  link: Pick<ParsedContent, string>;
  icon?: string;
  ui?: Partial<typeof config>;
  class?: any;
}>();

const { ui, attrs } = useUI(
  "docs.surround.link",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true
);
</script>

<template>
  <NuxtLink
    :to="(link as ParsedContent)._path"
    :class="ui.wrapper"
    v-bind="attrs"
  >
    <div v-if="icon || (link as ParsedContent).icon" :class="ui.icon.wrapper">
      <UIcon
        :name="icon || (link as ParsedContent).icon"
        :class="ui.icon.base"
      />
    </div>

    <p class="surround-link-title" :class="ui.title">
      {{ (link as ParsedContent).title }}
    </p>

    <p :class="ui.description">
      {{ (link as ParsedContent).description }}
    </p>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.surround-link-title {
  color: rgb(var(--base-120));
}
</style>
