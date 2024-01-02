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

<template>
  <UButton
    :icon="appConfig.ui.icons.search"
    :label="label"
    v-bind="((!!label ? $ui?.button?.input : $ui?.button?.secondary) as any)"
    aria-label="Search"
    :class="[!!label && 'flex-1']"
    @click="toggleDocsSearch"
  >
    <template v-if="!!label" #trailing>
      <div
        class="hidden lg:flex items-center gap-0.5 ml-auto -my-1 flex-shrink-0"
      >
        <UKbd class="!text-gray-100 !bg-gray-900">
          {{ metaSymbol }}
        </UKbd>
        <UKbd class="!text-gray-100 !bg-gray-900"> K </UKbd>
      </div>
    </template>
  </UButton>
</template>
