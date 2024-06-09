<script setup lang="ts">
import type { FormatedRange } from '../../core'
defineProps<{
  formated?: FormatedRange
  cellClass?: string
}>()
</script>

<template>
  <RangeCells>
    <RangeColor
      :color2="formated?.background"
      :class-name="cn('w-10 h-10 cursor-pointer', cellClass)"
    />
    <div v-for="color in formated?.shades" :key="color">
      <RangeColor :color2="color" :class-name="cn('w-10 h-10 cursor-pointer', cellClass)" />
    </div>
    <RangeColor
      :color2="formated?.foreground"
      :class-name="cn('w-10 h-10 cursor-pointer', cellClass)"
    />
  </RangeCells>
</template>
