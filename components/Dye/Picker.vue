<script setup lang="ts">
import { colord } from 'colord'
import type { OutputColor } from '@umbrajs/dye'

import HueCanvas from '../../dye/components/Canvas/HueCanvas.vue'
import ColorCanvas from '../../dye/components/Canvas/ColorCanvas.vue'
import { DyeKey } from '../../dye/composables/useDye2'
const theme = useUmbra()

interface DyeProps {
  activeColor: 'background' | 'foreground' | 'accents'
  min?: number
  max?: number
}

const props = withDefaults(defineProps<DyeProps>(), {
  activeColor: 'background',
  min: 0,
  max: 100
})

const dye = inject(DyeKey)
onMounted(() => dye.setColor('#ff0000', true))

function change(color: OutputColor) {
  dye.setColor(color)
  theme.change({
    [props.activeColor]: colord(color.hex).toHex()
  })
}
</script>

<template>
  <div class="!ring-0 border-8 border-base-950 relative z-20">
    <DyeProvider>
      <DyePallet :activeColor="activeColor" />
      <HueCanvas :min="min" :max="max" @change="change" />
      <ColorCanvas :min="min" :max="max" @change="change" />
    </DyeProvider>
  </div>
</template>
