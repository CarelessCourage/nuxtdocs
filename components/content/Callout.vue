<script setup lang="ts">
const appConfig = useAppConfig();

const config = computed(() => ({
  wrapper:
    "block pl-4 pr-6 py-3 rounded-md border border-gray-700 text-sm/6 my-5 last:mb-0 font-normal group relative",
  to: "hover:border-primary-400 hover:text-gray-100 border-dashed hover:border-solid hover:text-gray-800",
  icon: {
    base: "w-4 h-4 mr-2 inline-flex items-center align-sub",
  },
  externalIcon: {
    name: appConfig.ui.icons.external,
    base: "w-4 h-4 absolute right-2 top-2",
  },
}));

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    icon?: string;
    color?: string;
    to?: string;
    target?: string;
    ui?: Partial<typeof config.value>;
    class?: any;
  }>(),
  {
    icon: undefined,
    color: "primary",
    to: undefined,
    target: undefined,
    ui: () => ({}),
    class: undefined,
  }
);

const { ui, attrs } = useUI(
  "content.callout",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true
);
</script>

<template>
  <div class="callout" :class="[ui.wrapper, to && ui.to]" v-bind="attrs">
    <NuxtLink
      v-if="to"
      :to="to"
      :target="target"
      class="focus:outline-none"
      tabindex="-1"
    >
      <span class="absolute inset-0" aria-hidden="true" />
    </NuxtLink>

    <UIcon v-if="icon" :name="icon" :class="ui.icon.base" />

    <UIcon
      v-if="!!to && target === '_blank'"
      :name="ui.externalIcon.name"
      :class="ui.externalIcon.base"
    />

    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<style lang="scss">
.callout {
  background: rgb(var(--base-20) / 0.5);
  color: rgb(var(--base-120) / 1);
  transition: 0.2s;
}
</style>
