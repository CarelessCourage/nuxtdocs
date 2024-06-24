<script setup lang="ts">
const readability = ref(50)
const theme = useUmbra()

watch(readability, () => {
  theme.setReadability(readability.value)
})
</script>

<template>
  <h1>{{ readability }}</h1>
  <div class="range">
    <div class="line"></div>
    <URange v-model="readability" />
  </div>
</template>

<style scoped lang="scss">
.range {
  position: relative;
}

.line {
  position: absolute;
  z-index: 999;
  left: 30%;
  width: 3px;
  height: 100%;
  background: red;
}
</style>
