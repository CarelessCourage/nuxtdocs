<script setup lang="ts">
//import { useTheme, storedTheme } from "../composables/useTheme";

defineOptions({
  inheritAttrs: false,
});

const colorMode = useColorMode();
const appConfig = useAppConfig();

//const theme = useTheme();

function inverse() {
  //const inverse = theme.inverse().apply();
  //storedTheme.value = inverse.output;
}

const isDark = false;
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
