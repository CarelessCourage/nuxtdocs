<script setup lang="ts"></script>

<template>
  <div class="app-layout">
    <AppLoadingBar />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space);
}
</style>
