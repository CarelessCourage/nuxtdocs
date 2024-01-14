<script setup>
const theme = useUmbra();

console.log("tt", theme.formated.value);
</script>

<template>
  <div class="flex gap-1">
    <div v-for="range in theme.formated" :key="range.name">
      <p>{{ range?.name }}</p>
      <div
        class="w-10 h-10 bg-white"
        :style="{ background: `rgb(${range?.background} / 1)` }"
      />
    </div>
  </div>
</template>
