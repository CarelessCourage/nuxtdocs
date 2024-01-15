<script setup>
defineProps({
  color: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="h-10 bg-white rounded-lg border border-border"
    :style="{ background: `rgb(${color} / 1)` }"
  />
</template>
