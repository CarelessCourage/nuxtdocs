<script setup lang="ts">
import { useTheme } from "../composables/useTheme";

defineOptions({
  inheritAttrs: false,
});

const appConfig = useAppConfig();
//const theme = useTheme();

function inverse() {
  //theme.inverse().apply({});
}

const isDark = computed(() => true);
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
