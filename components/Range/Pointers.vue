<script setup lang="ts">
const theme = useUmbra()
const cellClass = 'flex justify-center items-start relative'

function cva(active: boolean) {
  const activeCell = ''
  return cn(cellClass, {
    [activeCell]: active
  })
}

const activeColor = ref<'background' | 'foreground' | 'accents'>('background')
</script>

<template>
  <DyePicker :activeColor="activeColor" />

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
  background: rgb(var(--base-10));
  padding-top: 5rem;
  top: -50px;
  transition: top 0.2s;
}

.wrapper.active {
  top: -120px;
}
</style>
