<script setup lang="ts">
const config = {
  wrapper: "relative my-5 space-y-6",
  header: "flex items-center relative",
  border:
    "absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",
  tab: {
    base: "px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",
    active: "text-primary border-primary",
    inactive:
      "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",
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
  console.log("rex2: ", mapped);
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
