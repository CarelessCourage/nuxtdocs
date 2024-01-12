<script setup>
defineProps({
  icon: {
    type: String,
    default: "sun",
  },
  ariaLabel: {
    type: String,
    default: "Switch to dark mode",
  },
});
</script>

<template>
  <button
    class="p-2 flex border border-transparent rounded-lg duration-100 active:bg-base-600 hover:bg-base-300 hover:border-border transition"
  >
    <UIcon :name="icon" />
  </button>
</template>
