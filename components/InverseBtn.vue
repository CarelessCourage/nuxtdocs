<script setup lang="ts">
import { isDark } from '~/core'
const appConfig = useAppConfig()

defineProps({ isDark: Boolean })
const emit = defineEmits(['change'])

function inverse() {
  emit('change')
}
</script>

<template>
  <Button
    variant="icon"
    :icon="isDark ? appConfig.ui.icons.dark : appConfig.ui.icons.light"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    color="bg-[red]"
    @click="inverse"
  />
</template>
