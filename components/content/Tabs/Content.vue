<script setup lang="ts">
import type { NodeX } from "./types";

defineProps<{
  selected?: number;
  tabs: NodeX[];
}>();
</script>

<template>
  <div v-for="(tab, index) in tabs" v-show="selected === index" :key="index">
    <component :is="tab.component" />
  </div>
</template>
