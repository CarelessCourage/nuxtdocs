<script setup lang="ts">
const theme = useUmbra();
const cellClass = "flex justify-center items-center";

function cva(active: boolean) {
  const activeCell = "rounded-lg flex flex-col justify-center items-center";
  return cn(cellClass, {
    [activeCell]: active,
  });
}
</script>

<template>
  <UCard class="!ring-0 border border-border flex justify-center">
    <div class="flex gap-2 flex-col">
      <div class="flex gap-2 items-center">
        <RangeColor
          :color="theme.formated[0]?.background"
          class-name="w-10 h-10"
        />
        <p>background</p>
      </div>
      <div class="flex gap-2 items-center">
        <RangeColor
          :color="theme.formated[0]?.foreground"
          class-name="w-10 h-10"
        />
        <p>foreground</p>
      </div>
      <div class="flex gap-2 items-center mt-5">
        <RangeColor
          :color="theme.formated[1]?.background"
          class-name="w-10 h-10"
        />
        <p>accents</p>
      </div>
    </div>
  </UCard>
  <RangeCells>
    <div :class="cva(true)">
      <RangeColor
        :color="theme.formated[0]?.background"
        class-name="w-10 h-10"
      />
      <RangeHandle />
    </div>
    <div v-for="(color, index) in theme.formated[0]?.shades" :key="color">
      <div :class="cva(index === 9)">
        <RangeColor
          v-if="index === 9"
          :color="theme.formated[1]?.background"
          class-name="w-10 h-10"
        />
        <RangeHandle v-if="index === 9" />
      </div>
    </div>
    <div :class="cva(true)">
      <RangeColor
        :color="theme.formated[0]?.foreground"
        class-name="w-10 h-10"
      />
      <RangeHandle />
    </div>
  </RangeCells>
</template>
