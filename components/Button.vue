<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "sun",
  },
  ariaLabel: {
    type: String,
    default: "Switch to dark mode",
  },
  to: {
    type: String,
    default: undefined,
  },
  variant: {
    type: String,
    default: "primary",
  },
});

const iconClass = "p-2";
const primary =
  "bg-accent-900 text-accent-100 hover:bg-accent-700 hover:border-accent-900";
const secondary = "border-accent-900 text-accent-900 hover:bg-accent-100";

const buttonClass = cn(
  "p-2 border border-transparent px-4 flex gap-2 justify-center items-center rounded-lg duration-100 transition active:bg-base-600 hover:bg-base-300 hover:border-border",
  {
    [primary]: props.variant === "primary",
    [secondary]: props.variant === "secondary",
    [iconClass]: props.variant === "icon",
  }
);
</script>

<template>
  <ULink v-if="to" :to="to">
    <button :aria-label="ariaLabel" :class="buttonClass">
      <UIcon v-if="icon" :name="icon" />
      <slot />
    </button>
  </ULink>

  <button v-else :aria-label="ariaLabel" :class="buttonClass">
    <UIcon v-if="icon" :name="icon" />
    <slot />
  </button>
</template>
