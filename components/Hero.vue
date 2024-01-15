<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const hero = ref<HTMLElement>();
const logo = ref<HTMLElement>();
const circle = ref<HTMLElement>();

onMounted(() => {
  if (!process.client) return;

  // if (!logo.value) return;
  // gsap.to(logo.value, {
  //   rotate: 160,
  //   scale: 3.2,
  //   scrollTrigger: {
  //     trigger: hero.value,
  //     start: "top top",
  //     end: "600px top",
  //     scrub: true,
  //   },
  // });

  if (!circle.value) return;
  gsap.to(circle.value, {
    y: 900,
    scrollTrigger: {
      trigger: hero.value,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  // if (!content.value) return;
  // gsap.to(content.value, {
  //   y: -700,
  //   scrollTrigger: {
  //     trigger: hero.value,
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: true,
  //   },
  // });
});
</script>

<template>
  <Circle ref="circle" />
  <div ref="hero" class="hero">
    <div ref="logo" class="umbra-logo">
      <Logo />
    </div>

    <ProseH1>UmbraJS</ProseH1>
    <ProseP class="text-base-800">
      A dynamic theme management library to rule them all 💍
    </ProseP>
    <MetaData />
    <div class="cta">
      <Button to="/getting-started" icon="i-heroicons-rocket-launch" size="lg">
        Get Started
      </Button>
      <ProseCodeInline
        class="p-1 px-3 rounded-lg gap-3 flex justify-center items-center"
      >
        <UIcon name="i-simple-icons-npm" size="lg" />
        npm i @umbrajs/core
      </ProseCodeInline>
    </div>

    <div class="walkthrough">
      <ProseH1>Walkthrough</ProseH1>
    </div>

    <Tabs
      variant="uncontained"
      head="border border-border rounded-lg overflow-hidden font-extrabold text-lg"
    >
      <div label="Methodology"><Methodology /></div>
      <div label="Practice"><Practice /></div>
    </Tabs>
  </div>
  <!-- <Ellipsis size="40rem" class="absolute -top-72 -left-48" />
  <Ellipsis size="60rem" class="absolute -bottom-32 -right-56" />
  <Ellipsis size="40rem" z-index="0" class="absolute" /> -->
</template>

<style scoped lang="scss">
.walkthrough {
  padding: var(--space-l) 0px var(--space);
}

.umbra-logo {
  width: 8rem;
  padding: var(--space-l) 0px var(--space);
}

.hero {
  position: relative;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 12rem;
  min-height: 100vh;
}

.her .showcase {
  display: flex;
  gap: 2rem;
}

.cta {
  display: flex;
  gap: var(--space-s);
  margin: var(--space) 0px;
  padding-bottom: var(--space-xl);
}
</style>
