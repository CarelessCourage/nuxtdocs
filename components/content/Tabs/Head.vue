<script setup lang="ts">
import type { NodeX } from "./types";

defineEmits(["update:selected"]);
const props = defineProps<{
  selected?: number;
  class?: any;
  tabs: NodeX[];
}>();

function cva(index: number) {
  const selected = props.selected;
  const active = "text-accent-900 border-accent-900";
  const inactive =
    "text-base-800 hover:text-base-950 border-transparent hover:border-border-active";
  const base =
    "px-4 py-2.5 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-accent-900 ";

  return cn(base, {
    [active]: selected === index,
    [inactive]: selected !== index,
  });
}

function wCVA() {
  const base = "flex items-center relative";
  return cn(base, props.class);
}
</script>

<template>
  <div :class="wCVA()">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      :class="cva(index)"
      @click="$emit('update:selected', index)"
    >
      <UIcon v-if="tab.icon" :name="tab.icon" class="w-5 h-5 flex-shrink-0" />
      <span>{{ tab.label }}</span>
    </button>
    <div class="absolute bottom-0 inset-x-0 w-full h-px bg-base-500" />
  </div>
</template>
