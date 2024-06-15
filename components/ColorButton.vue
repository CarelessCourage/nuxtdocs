<script lang="ts" setup>
import { umbra } from '../core'
import { colord } from 'colord'
import { rgb } from '../core'

const theme = useUmbra()
const props = defineProps<{
  color: 'background' | 'foreground' | 'accents'
  active: 'background' | 'foreground' | 'accents'
}>()

const btn = ref<HTMLButtonElement | null>(null)

watch(
  () => theme.formated,
  () => {
    const isBg = props.color === 'background'
    const isFg = props.color === 'foreground'
    const isAc = props.color === 'accents'
    const { bg, fg, ac } = getColors()

    const settings2 = {
      formater: rgb,
      readability: 120 //0-120
    }

    function paint(color: string) {
      umbra({
        background: color,
        foreground: color,
        settings: settings2
      }).apply({
        target: btn.value
      })
    }

    if (isBg) paint(bg)
    if (isFg) paint(fg)
    if (isAc) paint(ac)
  }
)

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
  <div ref="btn" class="bg-base-50">
    <Button variant="icon" class="rounded-none text-base-950 w-full">{{ color }}</Button>
  </div>
</template>
