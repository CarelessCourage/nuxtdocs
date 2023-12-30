<script setup lang="ts">
import { umbra, rgbStrippedFormat, isDark as isDarkColor } from "@umbrajs/core";
import { useTheme } from "../composables/useTheme";

defineOptions({
  inheritAttrs: false,
});

//const colorMode = useColorMode();
const appConfig = useAppConfig();

const theme = useTheme();

function inverse() {
  //fix inversion and make sure it has good types
  const test = umbra(theme.value.scheme)
    .inverse()
    .apply({ formater: rgbStrippedFormat });
  theme.value = test.input;
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
