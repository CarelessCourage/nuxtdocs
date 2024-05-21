<script setup lang="ts">
interface Props {
  className?: string;
  color?: string;
}

withDefaults(defineProps<Props>(), {
  className: "#ff0000",
  color: "255, 0, 0",
});
</script>

<template>
  <div
    :class="cn('h-10 bg-white rounded-lg border border-border', className)"
    :style="{ background: `rgb(${color} / 1)` }"
  />
</template>
