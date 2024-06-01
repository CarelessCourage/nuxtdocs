<script setup lang="ts">
import { colord } from 'colord'
import type { OutputColor } from '@umbrajs/dye'

import HueCanvas from '../../dye/components/Canvas/HueCanvas.vue'
import ColorCanvas from '../../dye/components/Canvas/ColorCanvas.vue'
import { useDye } from '../../dye/composables/useDye'
const theme = useUmbra()

interface DyeProps {
  activeColor: 'background' | 'foreground' | 'accents'
}

const props = withDefaults(defineProps<DyeProps>(), {
  activeColor: 'background'
})

const dye = useDye()
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
    <DyeContainer>
      <DyePallet :activeColor="activeColor" />
      <HueCanvas @change="change" />
      <ColorCanvas :min="75" :max="100" @change="change" />
    </DyeContainer>
  </div>
</template>
