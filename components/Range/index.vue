<script setup lang="ts">
import type { FormatedRange } from '../../core'
defineProps<{
  formated?: FormatedRange
}>()
</script>

<template>
  <RangeCells>
    <RangeColor :color2="formated?.background" class-name="w-10 h-10 cursor-pointer" />
    <div v-for="color in formated?.shades" :key="color">
      <RangeColor :color2="color" class-name="w-10 h-10 cursor-pointer" />
    </div>
    <RangeColor :color2="formated?.foreground" class-name="w-10 h-10 cursor-pointer" />
  </RangeCells>
</template>
