<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: "40rem",
  },
  zIndex: {
    type: String,
    default: "10",
  },
  top: {
    type: String,
    default: "auto",
  },
  bottom: {
    type: String,
    default: "auto",
  },
  left: {
    type: String,
    default: "auto",
  },
  right: {
    type: String,
    default: "auto",
  },
  className: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="ellipsis" :class="className">
    <div class="ellipsis-item" />
  </div>
</template>

<style scoped lang="scss">
.ellipsis {
  pointer-events: none;
  z-index: v-bind(zIndex);
  width: v-bind(size);
  height: v-bind(size);
  filter: blur(10rem);
  opacity: 0.7;
  border-radius: 80rem;
  overflow: hidden;
}

.ellipsis .ellipsis-item {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    97.62deg,
    var(--accent-10) 2.27%,
    var(--accent-50) 50.88%,
    var(--accent2-70) 98.48%
  );
}
</style>
W
