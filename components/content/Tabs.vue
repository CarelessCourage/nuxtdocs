<script setup lang="ts">
const config = {
  wrapper: "relative my-5 space-y-6",
  header: "flex items-center relative",
  border: "absolute bottom-0 inset-x-0 w-full h-px bg-base-500",
  tab: {
    base: "px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-accent-900",
    active: "text-accent-900 border-accent-900",
    inactive:
      "text-base-800 hover:text-base-950 border-transparent hover:border-border-active",
    icon: {
      base: "w-5 h-5 flex-shrink-0",
    },
  },
};

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  selectedIndex?: number;
  class?: any;
}>();

const slots = useSlots();
const { ui, attrs } = useUI(
  "content.codeGroup",
  undefined,
  config,
  toRef(props, "class"),
  true
);

const selectedIndex = ref(props.selectedIndex || 0);

// Computed

const tabs = computed(() => {
  const children = slots.default?.()[0].children;
  //@ts-ignore
  const mapped = children.map((slot, index) => ({
    index,
    label: slot.props?.label || `${index}`,
    icon: slot.props?.icon,
    component: slot,
  }));
  return mapped || [];
});
</script>

<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.header">
      <div :class="ui.border" />

      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[
          ui.tab.base,
          selectedIndex === index ? ui.tab.active : ui.tab.inactive,
        ]"
        @click="selectedIndex = index"
      >
        <UIcon v-if="tab.icon" :name="tab.icon" :class="ui.tab.icon.base" />
        <span>{{ tab.label }}</span>
      </button>
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
