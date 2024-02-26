<script setup lang="ts">
import { colord } from "colord";
import type { Colord } from "colord";
import { vOnClickOutside } from "@vueuse/components";
import type { OutputColor } from "@umbrajs/dye";

import DyeWrapper from "../dye/components/DyeWrapper.vue";
import Pallet from "../dye/components/Pallet.vue";
import HueCanvas from "../dye/components/Canvas/HueCanvas.vue";
import ColorCanvas from "../dye/components/Canvas/ColorCanvas.vue";
import { useDye } from "../dye/composables/useDye";

// Props
interface Dye {
  name: string;
  color: Colord;
}

const emit = defineEmits<{
  (e: "change", dye: Dye): void;
}>();

interface DyeProps {
  default?: string;
  compact?: boolean;
}

const props = withDefaults(defineProps<DyeProps>(), {
  default: "#ff0000",
  compact: true,
});

// Logic
const compact = ref(props.compact);
const dye = useDye();

onMounted(() => dye.setColor(props.default, true));

function change(color: OutputColor) {
  dye.setColor(color);
  emit("change", {
    name: color.name,
    color: colord(color.hex),
  });
}
</script>

<template>
  <DyeWrapper v-on-click-outside="() => (compact = true)" :compact="compact">
    <Pallet :compact="compact" @click="() => (compact = false)" />
    <ColorCanvas :min="0" :max="100" @change="change" />
    <HueCanvas @change="change" />
  </DyeWrapper>
</template>
