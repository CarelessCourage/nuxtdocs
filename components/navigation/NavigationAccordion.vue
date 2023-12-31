<template>
  <UAccordion
    :key="route.path"
    :items="(items as AccordionItem[])"
    :multiple="multiple"
    :ui="{
      wrapper: [ui.wrapper, level > 0 && ui.level].filter(Boolean).join(' '),
      item: {
        padding: !multiple ? 'p-0 mb-3' : 'p-0 mb-3 lg:mb-6',
        color: 'text-inherit dark:text-inherit',
      },
    }"
    v-bind="attrs"
  >
    <template #default="{ item, open }">
      <ULink
        :class="[ui.button.base, level > 0 && ui.button.level]"
        :active-class="ui.button.active"
        :inactive-class="ui.button.inactive"
      >
        <UIcon
          v-if="item.icon"
          :name="item.icon"
          :class="ui.button.icon.base"
        />

        <span :class="ui.button.label">{{ item.label }}</span>

        <UIcon
          v-if="!item.disabled"
          :name="ui.button.trailingIcon.name"
          :class="[
            ui.button.trailingIcon.base,
            open
              ? ui.button.trailingIcon.active
              : ui.button.trailingIcon.inactive,
          ]"
        />
      </ULink>
    </template>

    <template
      v-for="({ label }, index) in links"
      :key="index"
      #[label.toLowerCase()]="{ item }"
    >
      <NavigationTree
        :links="item.children"
        :level="level + 1"
        :default-open="defaultOpen"
        :multiple="multiple"
        :style="{ marginLeft: `${0.5 * (level + 1) + 0.5 * level}rem` }"
        :class="ui.tree"
      />
    </template>
  </UAccordion>
</template>

<script setup lang="ts">
import type { AccordionItem } from "#ui/types";
import type { Link } from "#ui-pro/types";

const appConfig = useAppConfig();

const config = computed(() => ({
  wrapper: "w-full block",
  level:
    "border-l border-gray-200 dark:border-gray-800 -ml-px pl-px hover:border-gray-300 dark:hover:border-gray-700",
  button: {
    base: "flex items-center gap-1.5 group mb-3 w-full focus-visible:outline-primary",
    active: "text-primary border-current",
    inactive: "border-transparent",
    level: "border-l -ml-px pl-4",
    icon: {
      base: "w-5 h-5 flex-shrink-0",
    },
    trailingIcon: {
      name: appConfig.ui.icons.chevron,
      base: "w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",
      active: "text-gray-700 dark:text-gray-200",
      inactive:
        "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90",
    },
    label: "text-sm/6 font-semibold truncate",
  },
  tree: "border-l border-gray-200 dark:border-gray-800",
}));

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    level?: number;
    links?: Link[];
    multiple?: boolean;
    defaultOpen?: boolean;
    ui?: Partial<typeof config.value>;
    class?: any;
  }>(),
  {
    level: 0,
    links: () => [],
    multiple: true,
    defaultOpen: undefined,
    ui: () => ({}),
    class: undefined,
  }
);

const route = useRoute();
const { ui, attrs } = useUI(
  "navigation.accordion",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true
);

// Computed

const items = computed(() =>
  props.links?.map((link) => {
    const defaultOpen =
      !props.defaultOpen ||
      (link.to && route.path.startsWith(link.to.toString()));

    return {
      label: link.label,
      icon: link.icon,
      slot: link.label.toLowerCase(),
      disabled: link.disabled,
      defaultOpen,
      children: link.children,
    };
  })
);
</script>
