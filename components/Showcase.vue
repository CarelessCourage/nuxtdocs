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
    <UCard>
      <div class="grid gap-2">
        <slot />
      </div>
    </UCard>
    <div class="u-truncated">
      <div class="veil" />
      <Tabs v-if="!code">
        <div v-for="(tab, index) in tabs" :key="index" :label="tab.label">
          <Code :code="tab.code" />
        </div>
      </Tabs>
      <Code v-else :code="code" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.showcase {
  display: flex;
  flex-direction: column;
  gap: 0rem;
  width: 100%;
}

.u-truncated {
  position: relative;
  //max-height: 202px;
  overflow: hidden;
  border-radius: var(--radius);
}

.veil {
  position: absolute;
  bottom: -90px;
  width: 100%;
  height: 40px;
  //background-color: rgb(var(--base-10) / 1);
  //box-shadow: 0px -40px 60px 60px rgb(var(--base-10) / 1);
  //opacity: 0.8;
}
</style>
