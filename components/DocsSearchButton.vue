<template>
  <UButton
    :icon="appConfig.ui.icons.search"
    :label="label"
    v-bind="((!!label ? $ui.button.input : $ui.button.secondary) as any)"
    aria-label="Search"
    class="flex-1 !ring-border !text-base-800"
    @click="toggleDocsSearch"
  >
    <template v-if="!!label" #trailing>
      <div
        class="hidden lg:flex items-center gap-0.5 ml-auto -my-1 flex-shrink-0"
      >
        <Kbd>
          {{ metaSymbol }}
        </Kbd>

        <Kbd> K </Kbd>
      </div>
    </template>
  </UButton>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const { toggleDocsSearch } = useUIState();
const { metaSymbol } = useShortcuts();

withDefaults(
  defineProps<{
    label?: string;
  }>(),
  {
    label: "Search...",
  }
);
</script>
