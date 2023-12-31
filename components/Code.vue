<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
