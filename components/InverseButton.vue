<script setup lang="ts">
import { useUmbra } from "../composables/useUmbra";

defineOptions({
  inheritAttrs: false,
});

const appConfig = useAppConfig();
const theme = useUmbra();

function inverse() {
  theme.inverse().apply();
}

const isDark = computed(() => theme.isDark);
</script>

<template>
  <ClientOnly>
    <Button
      :icon="isDark ? appConfig.ui.icons.dark : appConfig.ui.icons.light"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      color="bg-[red]"
      @click="inverse"
    />
  </ClientOnly>
</template>
