<script lang="ts" setup>
defineProps<{
  code: string;
}>();
</script>

<template>
  <div class="showcase">
    <UCard>
      <slot />
    </UCard>
    <Code :code="code" />
  </div>
</template>

<style scoped lang="scss">
.showcase {
  display: flex;
  flex-direction: column;
  gap: 0rem;
}
</style>
