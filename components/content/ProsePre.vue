<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});

const codeHighlight = highlight(props.code, props.language);
</script>

<template>
  <pre class="prose code" :class="$props.class" v-html="codeHighlight" />
</template>

<style lang="scss">
.code pre code .line {
  display: inline;
}
</style>
