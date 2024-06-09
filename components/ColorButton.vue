<script lang="ts" setup>
import { umbra } from '../core'
import { colord } from 'colord'
import { useDye } from '../dye/composables/useDye'
import { rgb } from '../core'

const props = defineProps<{
  color: 'background' | 'foreground' | 'accents'
  active: 'background' | 'foreground' | 'accents'
}>()
const theme = useUmbra()

const btn = ref<HTMLButtonElement | null>(null)

watch(() => theme.formated, (color) => {
  const isBg = props.color === 'background'
  const isFg = props.color === 'foreground'
  const isAc = props.color === 'accents'
  const { bg, fg, ac } = getColors()

  const settings = {
    //formater: rgb,
    target: btn.value
  }

  const settings2 = {
    readability: 1, //0-120
  };

  if(isBg) umbra({ 
    background: "#000000",
    foreground: "#000000",
    settings: settings2 }).apply(settings)
  // if(isFg) umbra({ background: fg, settings: settings2 }).apply(settings)
  // if(isAc) umbra({ background: ac, settings: settings2 }).apply(settings)
}) 

function getColors() {
  const base = theme.formated.find((color) => color.name === 'base')
  const accent = theme.formated.find((color) => color.name === 'accent')
  return {
    bg: colord(`rgb(${base.background})`).toHex(),
    fg: colord(`rgb(${base.foreground})`).toHex(),
    ac: colord(`rgb(${accent.background})`).toHex()
  }
}
</script>

<template>
  <div ref="btn" class="bg-base-50 text-base-950">
    <Button variant="icon" class="rounded-none">{{ color }}</Button>
  </div>
</template>