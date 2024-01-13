<script lang="ts" setup>
defineProps<{
  code?: string;
  tabs?: {
    label: string;
    code: string;
  }[];
}>();
</script>

<template>
  <div class="showcase">
    <UCard class="!ring-0 border border-border border-b-0 rounded-b-none pb-3">
      <div class="grid gap-2">
        <slot />
      </div>
    </UCard>
    <Tabs v-if="!code">
      <div v-for="(tab, index) in tabs" :key="index" :label="tab.label">
        <Code :code="tab.code" class="px-3" />
      </div>
    </Tabs>
    <Code v-else :code="code" class="border rounded-lg border-border pb-9" />
  </div>
</template>

<style scoped lang="scss">
.showcase {
  display: flex;
  flex-direction: column;
  gap: 0rem;
  width: 100%;
}
</style>
