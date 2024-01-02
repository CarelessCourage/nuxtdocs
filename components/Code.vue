<script lang="ts" setup>
defineProps<{
  code: string;
}>();
</script>

<template>
  <div class="prose code" v-html="code" />
</template>

<style lang="scss">
.code pre code .line {
  display: inline;
}
</style>
