<script setup>
const theme = useUmbra();
</script>

<template>
  <div class="flex gap-1">
    <div v-for="range in theme.formated" :key="range.name">
      <p>{{ range?.name }}</p>
      <div
        class="w-10 h-10 bg-white border border-border rounded-lg"
        :style="{ background: `rgb(${range?.background} / 1)` }"
      />
    </div>
  </div>
</template>
