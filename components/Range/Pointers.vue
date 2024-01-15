<script setup lang="ts">
const theme = useUmbra();
const cellClass = "h-10 flex justify-center items-center";

function cva(active: boolean) {
  const activeCell = "rounded-lg";
  return cn(cellClass, {
    [activeCell]: active,
  });
}
</script>

<template>
  <div class="grid grid-cols-14">
    <div :class="cva(true)">
      <RangeHandle />
    </div>
    <div v-for="(color, index) in theme.formated[0]?.shades" :key="color">
      <div :class="cva(index === 9)">
        <RangeHandle v-if="index === 9" />
      </div>
    </div>
    <div :class="cva(true)">
      <RangeHandle />
    </div>
  </div>
</template>
