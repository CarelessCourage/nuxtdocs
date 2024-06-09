<script setup lang="ts">
import { umbra } from '../core'
import Range from '../components/Range/index.vue'

const { formated } = umbra({
  background: '#000000',
  foreground: '#000000',
  settings: {
    readability: 1
  }
}).apply()
</script>

<template>
  <Range :formated="formated[0]" />
  <Range :formated="formated[1]" />
</template>
