<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

const appConfig = useAppConfig()
const theme = useUmbra()

function inverse() {
  theme.inverse()
}
</script>

<template>
  <ClientOnly>
    <Button
      variant="icon"
      :icon="theme.isDark ? appConfig.ui.icons.dark : appConfig.ui.icons.light"
      :aria-label="`Switch to ${theme.isDark ? 'light' : 'dark'} mode`"
      color="bg-[red]"
      @click="inverse"
    />
  </ClientOnly>
</template>
