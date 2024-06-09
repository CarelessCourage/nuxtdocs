<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

const theme = useUmbra()

function inverse() {
  theme.inverse()
}
</script>

<template>
  <ClientOnly>
    <InverseBtn :isDark="theme.isDark" @change="inverse" />
  </ClientOnly>
</template>
