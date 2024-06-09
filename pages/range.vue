<script setup lang="ts">
import Range from '../components/Range/index.vue'
import { useUmbra } from '../composables/useUmbra'
import { umbra, rgb, isDark } from '../core'

const theme = useUmbra()

theme.apply({
  background: '#000000',
  foreground: '#000000'
})

function inverse() {
  theme.inverse()
}
</script>

<template>
  <div class="range">
    <Range :formated="theme.formated[0]" cell-class="rounded-none border-0" />
    <Range :formated="theme.formated[1]" cell-class="rounded-none border-0" />
    <inverseBtn @change="inverse" />
  </div>
</template>

<style>
html {
  background-color: var(--base-50);
}

.range {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0rem;
  padding: 2rem 0rem;
}
</style>
