<script setup lang="ts">
import { useDye } from '../../dye/composables/useDye'
const dye = useDye()
</script>

<template>
  <div :ref="(el) => dye.setWrapper(el as HTMLDivElement)" class="container">
    <slot />
  </div>
</template>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 25px;
  grid-template-rows: auto 1fr;
  .pallet {
    grid-column: span 2;
  }
}
</style>
