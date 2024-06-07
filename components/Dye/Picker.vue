<script setup lang="ts">
import { colord } from 'colord'
import type { OutputColor } from '@umbrajs/dye'

import HueCanvas from '../../dye/components/Canvas/HueCanvas.vue'
import ColorCanvas from '../../dye/components/Canvas/ColorCanvas.vue'
import { useDye } from '../../dye/composables/useDye'

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
const theme = useUmbra()
onMounted(() => {
  const base = theme.formated.find((color) => color.name === 'base')
  const accent = theme.formated.find((color) => color.name === 'accent')

  const bg = colord(`rgb(${base.background})`).toHex()
  const fg = colord(`rgb(${base.foreground})`).toHex()
  const acc = colord(`rgb(${accent.background})`).toHex()

  const isBg = props.activeColor === 'background'
  const isFg = props.activeColor === 'foreground'
  const isAc = props.activeColor === 'accents'

  if (isBg) dye.setColor(bg, true)
  if (isFg) dye.setColor(fg, true)
  if (isAc) dye.setColor(acc, true)
})

function change(color: OutputColor) {
  dye.setColor(color)
  theme.change({
    [props.activeColor]: colord(color.hex).toHex()
  })
}
</script>

<template>
  <div class="relative z-20 !ring-0 border-8 border-base-950">
    <DyeContainer class="">
      <DyePallet :activeColor="activeColor" />
      <HueCanvas :min="min" :max="max" @change="change" />
      <ColorCanvas :min="min" :max="max" @change="change" />
    </DyeContainer>
    <slot />
  </div>
</template>
