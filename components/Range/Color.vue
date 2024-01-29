<script setup>
defineProps({
  className: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    :class="cn('h-10 bg-white rounded-lg border border-border', className)"
    :style="{ background: `rgb(${color} / 1)` }"
  />
</template>
