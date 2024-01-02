<script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});

defineOgImage({
  component: "Docs",
  title: page.value.title,
  description: page.value.description,
});
</script>

<template>
  <div>
    <UContainer>
      <Hero />
    </UContainer>

    <LandingSection :title="page.features.title">
      <UPageGrid>
        <LandingCard
          v-for="(item, index) of page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </LandingSection>
  </div>
</template>
