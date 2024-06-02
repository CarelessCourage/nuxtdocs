<script setup lang="ts">
import { provide } from 'vue'
import {
  useDye,
  useColorCanvas,
  useDyeStore,
  DyeKey,
  StoreKey,
  CanvasKey
} from '../../dye/composables/useDye2'
const dye = useDye()
const store = useDyeStore()
const canvas = useColorCanvas()

provide(DyeKey, dye)
provide(StoreKey, store)
provide(CanvasKey, canvas)
</script>

<template>
  <div :ref="(el) => dye.setWrapper(el as HTMLDivElement)" class="container">
    <slot />
  </div>
</template>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 25px auto;
}
</style>
