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
    <div class="u-truncated">
      <div class="veil" />
      <Code :code="code" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.showcase {
  display: flex;
  flex-direction: column;
  gap: 0rem;
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
