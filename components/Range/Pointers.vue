<script setup lang="ts">
import { colord } from 'colord'
import { useDye } from '../../dye/composables/useDye'

const theme = useUmbra()
const dye = useDye()
const cellClass = 'flex justify-center items-start relative'

function cva(active: boolean) {
  const activeCell = ''
  return cn(cellClass, {
    [activeCell]: active
  })
}

const activeColor = ref<'background' | 'foreground' | 'accents'>('background')

watch(activeColor, (active) => {
  const base = theme.formated.find((color) => color.name === 'base')
  const accent = theme.formated.find((color) => color.name === 'accent')

  const bg = colord(`rgb(${base.background})`).toHex()
  const fg = colord(`rgb(${base.foreground})`).toHex()
  const acc = colord(`rgb(${accent.background})`).toHex()

  const isBg = active === 'background'
  const isFg = active === 'foreground'
  const isAc = active === 'accents'

  if (isBg) dye.setColor(bg, true)
  if (isFg) dye.setColor(fg, true)
  if (isAc) dye.setColor(acc, true)
})
</script>

<template>
  <DyePicker :activeColor="activeColor">
    <div class="flex bg-base-400 border-t-2 border-base-950">
      <Button variant="icon" class="rounded-none">background</Button>
      <Button variant="icon" class="rounded-none">foreground</Button>
      <Button variant="icon" class="rounded-none">accents</Button>
    </div>
  </DyePicker>

  <RangeCells>
    <div :class="cva(true)">
      <div class="wrapper" :class="{ active: activeColor === 'background' }">
        <RangeColor
          :color="theme.formated[0]?.background"
          class-name="w-10 h-10 cursor-pointer"
          @click="activeColor = 'background'"
        />
      </div>
      <RangeHandle />
    </div>

    <div v-for="(color, index) in theme.formated[0]?.shades" :key="color">
      <div :class="cva(index === 9)" v-if="index === 9">
        <div class="wrapper" :class="{ active: activeColor === 'accents' }">
          <RangeColor
            :color="theme.formated[1]?.background"
            class-name="w-10 h-10 cursor-pointer"
            @click="activeColor = 'accents'"
          />
        </div>
        <RangeHandle />
      </div>
    </div>

    <div :class="cva(true)">
      <div class="wrapper" :class="{ active: activeColor === 'foreground' }">
        <RangeColor
          :color="theme.formated[0]?.foreground"
          class-name="w-10 h-10 cursor-pointer"
          @click="activeColor = 'foreground'"
        />
      </div>
      <RangeHandle />
    </div>
  </RangeCells>
</template>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  z-index: 10;
  background: rgb(var(--ui-background));
  padding-top: 5rem;
  top: -50px;
  transition: top 0.2s;
}

.wrapper.active {
  top: -120px;
}
</style>
