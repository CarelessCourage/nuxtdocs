<script setup lang="ts">
import { colord } from 'colord'
import type { OutputColor } from '@umbrajs/dye'

import HueCanvas from '../../dye/components/Canvas/HueCanvas.vue'
import ColorCanvas from '../../dye/components/Canvas/ColorCanvas.vue'
import { useDye } from '../../dye/composables/useDye'
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

const dye = useDye()
const umbra = useUmbra()
onMounted(() => {
  const base = umbra.formated.find((color) => color.name === 'base')
  const accent = umbra.formated.find((color) => color.name === 'accent')

  const bg = base.background
  const fg = base.foreground
  const acc = accent.background

  const c = colord(bg).toHex()

  console.log('rex: ', c)
  dye.setColor(c, true)
})

function change(color: OutputColor) {
  dye.setColor(color)
  theme.change({
    [props.activeColor]: colord(color.hex).toHex()
  })
}
</script>

<template>
  <div class="!ring-0 border-8 border-base-950 relative z-20">
    <DyeContainer>
      <DyePallet :activeColor="activeColor" />
      <HueCanvas :min="min" :max="max" @change="change" />
      <ColorCanvas :min="min" :max="max" @change="change" />
    </DyeContainer>
  </div>
</template>
