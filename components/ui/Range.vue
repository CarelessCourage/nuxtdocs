<script setup lang="ts">
const readability = ref(50)
const theme = useUmbra()

const perc = computed(() => {
  return Math.floor(percentage(theme.readability.output, 100))
})

watch(readability, () => {
  theme.setReadability(readability.value)
})
</script>

<template>
  <div class="range">
    <h1>Min Readability: {{ readability }}</h1>
    <h1>Readability: {{ perc }}</h1>
    <div class="slider">
      <div v-if="true" class="line bg-accent-950"></div>
      <URange v-model="readability" :min="8" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.range {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-xs);
  padding-top: var(--space-s);
  position: relative;
  grid-column: span 2;
}

.range .slider {
  position: relative;
  grid-column: span 2;
}

.line {
  position: absolute;
  z-index: 999;
  --width: 3px;
  left: calc(v-bind(perc) * 1% - (var(--width) / 2));
  width: var(--width);
  height: 100%;
  background: red;
  transition: left 0.1s ease-in-out;
}
</style>
