<script setup lang="ts">
import type { NodeX } from "./types";
import TabsHead from "./Head.vue";
import TabsContent from "./Content.vue";

interface Props {
  head?: string;
  class?: string;
  selectedIndex?: number;
  variant?: "contained" | "uncontained";
}

const props = withDefaults(defineProps<Props>(), {
  head: "",
  class: "",
  selectedIndex: 0,
  variant: "contained",
});

const slots = useSlots();
const selectedIndex = ref(props.selectedIndex || 0);

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

function cva() {
  const contained = "border rounded-lg border-border rounded-t-none";
  const uncontained = "";

  return cn(
    "relative space-y-6 pb-9 w-full",
    {
      [contained]: props.variant === "contained",
      [uncontained]: props.variant === "uncontained",
    },
    props.class
  );
}
</script>

<template>
  <div :class="cva()">
    <TabsHead
      :tabs="tabs"
      :class="head"
      :selected="selectedIndex"
      @update:selected="selectedIndex = $event"
    />
    <TabsContent :tabs="tabs" :selected="selectedIndex" />
  </div>
</template>
