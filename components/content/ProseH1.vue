<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h1)
</script>

<template>
  <h1 :id="id" class="text-base-950 text-9xl font-bold tracking-tight">
    <a v-if="generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>
