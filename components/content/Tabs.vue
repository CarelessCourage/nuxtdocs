<script setup lang="ts">
import type { Component } from "vue";
const props = defineProps<{
  selectedIndex?: number;
  class?: any;
}>();

const slots = useSlots();
const selectedIndex = ref(props.selectedIndex || 0);

interface NodeX {
  index: number;
  label: string;
  icon: string;
  component: Component;
}

function nodeMap(nodes: any): NodeX[] {
  return nodes.map((node: any, index: number) => ({
    index,
    label: node.props?.label || `${index}`,
    icon: node.props?.icon,
    component: node,
  }));
}

const tabs = computed(() => {
  const nodes = slots.default?.();
  const children = slots.default?.()[0].children;
  if (nodes.length > 1) return nodeMap(nodes);
  const mapped = nodeMap(children);
  return mapped || [];
});

function cva(index: number) {
  const selected = selectedIndex.value;
  const active = "text-accent-900 border-accent-900";
  const inactive =
    "text-base-800 hover:text-base-950 border-transparent hover:border-border-active";
  const base =
    "px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-accent-900 ";

  return cn(base, {
    [active]: selected === index,
    [inactive]: selected !== index,
  });
}
</script>

<template>
  <div class="relative my-5 space-y-6 border rounded-lg border-border pb-9">
    <div class="flex items-center relative">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="cva(index)"
        @click="selectedIndex = index"
      >
        <UIcon v-if="tab.icon" :name="tab.icon" class="w-5 h-5 flex-shrink-0" />
        <span>{{ tab.label }}</span>
      </button>
      <div class="absolute bottom-0 inset-x-0 w-full h-px bg-base-500" />
    </div>

    <div
      v-for="(tab, index) in tabs"
      v-show="selectedIndex === index"
      :key="index"
    >
      <component :is="tab.component" />
    </div>
  </div>
</template>
