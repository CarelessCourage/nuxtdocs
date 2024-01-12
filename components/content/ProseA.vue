<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
});
</script>

<template>
  <NuxtLink :href="href" :target="target">
    <p class="linked"><slot /></p>
  </NuxtLink>
</template>

<style lang="scss">
.linked {
  display: inline;
  color: rgb(var(--accent) / 1);
}
</style>
