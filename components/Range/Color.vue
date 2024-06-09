<script setup lang="ts">
interface Props {
  className?: string
  color?: string
  color2?: string
}

withDefaults(defineProps<Props>(), {
  className: undefined,
  color: '255, 0, 0',
  color2: undefined
})
</script>

<template>
  <div
    :class="cn('h-10 bg-white rounded-lg border', className)"
    :style="{ background: color2 ? color2 : `rgb(${color} / 1)` }"
  />
</template>
