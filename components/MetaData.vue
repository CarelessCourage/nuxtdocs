<script setup>
const className = "!bg-base-100 !text-base-950";
</script>

<template>
  <div class="metadata">
    <UKbd :class="className"> 6kB Minified </UKbd>
    <UKbd :class="className"> 2 dependencies </UKbd>
  </div>
</template>

<style scoped lang="scss">
.metadata {
  position: absolute;
  right: -220px;
  top: 77vh;
  transform: rotate(-90deg);
  //background: red;

  display: flex;
  gap: var(--space-xs);
  margin: 0px;
  //padding: var(--space) var(--space-xs);
}
</style>
