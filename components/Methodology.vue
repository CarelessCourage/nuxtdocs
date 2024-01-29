<script setup lang="ts">
import { DyePicker } from "@umbrajs/dye";
import "@umbrajs/dye/dist/style.css";
const theme = useUmbra();
function goooo(color: any) {
  theme.change({
    background: color.value.toHex(),
  });
}

const cellClass =
  "h-10 flex rounded-lg border border-border justify-center items-center";
</script>

<template>
  <div class="flex flex-col">
    <UCard class="!ring-0 border border-border rounded-b-none mb-4">
      <ProseP class="tracking-wide font-bold"> Ranges </ProseP>
      <ProseP>
        The Umbra function makes it easy to modify and manage your themes super
        quick with just a few values. Switch between themes. Change colors.
        Scale. Make theming dynamic.
      </ProseP>
    </UCard>
    <div class="flex flex-col">
      <DyePicker default="#ff0000" @change="(value) => goooo(value)" />
      <RangePointers />

      <RangeCells>
        <div
          class="flex justify-center items-center border border-border rounded-lg h-10 col-span-2"
        >
          bg
        </div>
        <div
          class="flex justify-center items-center border border-border rounded-lg h-10 col-span-3"
        >
          panel
        </div>
        <div
          class="flex justify-center items-center border border-border rounded-lg h-10 col-span-4"
        >
          border
        </div>
        <div
          class="flex justify-center items-center border border-border rounded-lg h-10 col-span-2"
        >
          subtext
        </div>
        <div
          class="flex justify-center items-center border border-border rounded-lg h-10 col-span-3"
        >
          text
        </div>
      </RangeCells>

      <RangeCells>
        <div
          class="flex justify-center items-center border border-border rounded-lg h-10 col-span-5"
        >
          background
        </div>
        <div
          class="flex justify-center items-center border border-border rounded-lg h-10 col-span-4"
        >
          midground
        </div>
        <div
          class="flex justify-center items-center border border-border rounded-lg h-10 col-span-5"
        >
          foreground
        </div>
      </RangeCells>

      <RangeCells>
        <div :class="cellClass">0</div>
        <div v-for="(color, index) in theme.formated[0]?.shades" :key="index">
          <div :class="cellClass">{{ index + 1 }}</div>
        </div>
        <div :class="cellClass">
          {{ theme.formated[0]?.shades.length + 1 }}
        </div>
      </RangeCells>

      <div class="flex flex-col-reverse">
        <RangeCells v-for="range in theme.formated" :key="range.name">
          <RangeColor :color="theme.formated[0]?.background" />
          <RangeColor
            v-for="color in range.shades"
            :key="color"
            :color="color"
          />
          <RangeColor :color="range.foreground" />
        </RangeCells>
      </div>
    </div>
  </div>
</template>
