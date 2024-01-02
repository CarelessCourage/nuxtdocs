<script setup lang="ts">
import { umbra, rgbStrippedFormat, isDark as isDarkColor } from "@umbrajs/core";
import { useTheme } from "../composables/useTheme";

defineOptions({
  inheritAttrs: false,
});

const appConfig = useAppConfig();
const theme = useTheme();

function inverse() {
  theme.value = umbra(theme.value.scheme)
    .inverse()
    .apply({ formater: rgbStrippedFormat }).input;
}

const isDark = computed(() => {
  return isDarkColor(theme.value);
});
</script>

<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? appConfig.ui.icons.dark : appConfig.ui.icons.light"
      v-bind="{
        ...($ui.button.secondary as any),
        ...$attrs
      }"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      @click="inverse"
    />
  </ClientOnly>
</template>
