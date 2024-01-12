<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";

const navigation = inject<NavItem[]>("navigation", []);
const { header } = useAppConfig();
</script>

<template>
  <UHeader>
    <template #logo>
      <h1 class="text-base-950">Umbra</h1>
      <UBadge label="Docs" variant="subtle" class="mb-0.5 !text-base-950" />
    </template>

    <template v-if="header?.search" #center>
      <DocsSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <DocsSearchButton v-if="header?.search" :label="null" class="lg:hidden" />

      <InverseButton />

      <Button
        v-for="(link, index) of header.links"
        :key="index"
        v-bind="{ ...link }"
        variant="icon"
      />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
