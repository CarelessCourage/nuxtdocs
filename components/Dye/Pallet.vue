<script setup lang="ts">
import { ref } from 'vue'
import { useDye } from '../../dye/composables/useDye'

const emit = defineEmits(['click'])

interface Props {
  fade?: number
  activeColor: string
}

withDefaults(defineProps<Props>(), {
  fade: 25,
  activeColor: 'background'
})

const dye = useDye()
const copied = ref(false)

function copyToClipboard() {
  if (!navigator?.clipboard) return
  navigator.clipboard.writeText(dye.color.hex)
  copied.value = true
  setTimeout(() => (copied.value = false), 800)
}

function handleClick() {
  copyToClipboard()
}
</script>

<template>
  <div class="pallet" :class="{ copied }" @click="handleClick">
    <div class="content">
      <ProseH2>{{ dye.color.name }}</ProseH2>
      <ProseH2>{{ dye.color.hex }}</ProseH2>
      <UiRange />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pallet {
  position: relative;
  display: grid;
  --fade: calc(v-bind(fade) * 1px);
  grid-template-columns:
    1fr
    var(--fade)
    var(--fade);
  justify-content: center;
  align-items: center;

  background: var(--base);
  color: var(--base-120);
  * {
    margin: 0px;
    line-height: 1;
  }
}

.content {
  display: grid;
  padding: var(--space-s);
  gap: var(--space-xs);
  grid-template-columns: 1fr auto;
  h2 {
    text-transform: capitalize;
  }
  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 1.2;
    &.name {
      //opacity: 0.6;
      font-weight: 900;
    }
  }
}

.shade {
  height: 100%;
}

.pallet.copied .cap {
  background-color: var(--base-20);
  animation: flash 0.6s ease-in-out;
}

@keyframes flash {
  0% {
    background-color: var(--base-100);
  }
  100% {
    background-color: var(--base-20);
  }
}

.cap {
  position: absolute;
  right: var(--space-s);
  background-color: var(--base-20);
  padding: var(--space-s);
  min-width: 60px;

  clip-path: circle(0%);
  transition: 0.2s;
}

.pallet:hover .cap {
  clip-path: circle(100%);
}

.compact .pallet {
  .content p,
  .shade,
  .cap {
    opacity: 0;
  }
}
</style>
