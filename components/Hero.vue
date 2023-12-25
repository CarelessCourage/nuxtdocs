<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const hero = ref<HTMLElement>();
const logo = ref<HTMLElement>();
const circle = ref<HTMLElement>();
const content = ref<HTMLElement>();

onMounted(() => {
  if (!process.client) return;

  if (!hero.value) return;
  // gsap.to(hero.value, {
  //   y: 400,
  //   scrollTrigger: {
  //     trigger: hero.value,
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: true,
  //   },
  // });

  // if (!logo.value) return;
  // gsap.to(logo.value, {
  //   rotate: 360,
  //   width: "80rem",
  //   scrollTrigger: {
  //     trigger: hero.value,
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: true,
  //   },
  // });

  // if (!circle.value) return;
  // gsap.to(circle.value, {
  //   y: 400,
  //   scrollTrigger: {
  //     trigger: hero.value,
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: true,
  //   },
  // });

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
  <div ref="hero" class="hero">
    <div ref="logo" class="umbra-logo">
      <Logo />
    </div>
    <div ref="content" class="content">
      <UCard>
        <ProseP>A theme management library to rule them all</ProseP>
      </UCard>
      <div class="showcase">
        <UCard>
          <ProseP>
            Makes it easy to modify and manage your theme. Switch between
            themes. Change theme. Automatic dark/light mode. Monitor theme
            accessibility against cutting edge color contrast standards
            <ULink
              to="https://www.myndex.com/"
              active-class="text-primary"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              (APCA).
            </ULink>
            Perfect parity with

            <ULink
              to="https://www.radix-ui.com/colors"
              active-class="text-primary"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              radix-colors.
            </ULink>
          </ProseP>
        </UCard>

        <UCard> lolers </UCard>
      </div>
      <UCard>
        <ProseP>
          Start simple and scale theme complexity infinitely without any
          friction. You can decide to theme every element on your site
          differently at a moments notice without any need to reorganize
          anything at all. Just plug and play. Scale to infinity.
        </ProseP>
      </UCard>
      <UCard>
        <ProseP>
          Boss-man randomly wants to be able to dynamically change the color of
          that one card? Done. Need more extreme variant in theming
          customisations? Then use a color alias layer that lets you get as
          complex as you want.
        </ProseP>
      </UCard>
      <UCard>
        <ProseP>
          Or keep it all super simple, umbra lets you manage it all from a
          single source and very quickly. Change a color and watch the other
          colors adjust themselves to your change instead of having to manually
          shift everything every time you need to change something.
        </ProseP>
      </UCard>
      <UCard>
        <ProseP>
          It's more than just a theme generator, its a theme manager. The
          generation part is just the backdrop that makes adjustments quick and
          easy to do. You can can manually dictate everything yourself if and
          when you need to.
        </ProseP>
      </UCard>
      <UCard>
        <ProseP>
          If you decide you no longer want Umbra, removing it is as easy as
          copying the output and pasting it yourself. You are never locked into
          this library. This way Umbra will always be a safe bet for the future.
        </ProseP>
      </UCard>
    </div>
  </div>
  <div ref="circle" class="circle" />
  <!-- <Ellipsis size="40rem" class="absolute -top-72 -left-48" />
  <Ellipsis size="60rem" class="absolute -bottom-32 -right-56" />
  <Ellipsis size="40rem" z-index="0" class="absolute" /> -->
</template>

<style scoped lang="scss">
.umbra-logo {
  width: 8rem;
  padding: 100px 0px;
}

.circle {
  position: absolute;
  z-index: 20;
  left: 0px;
  top: -90vw;
  height: 100vw;
  width: 100vw;
  background: var(--base);
  border-radius: 60rem;
  box-shadow: 0px 100px 150px 47px var(--base);
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

.hero .content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  //padding-bottom: 25px;
  max-inline-size: 50ch;
  text-wrap: balance;
}

.her .showcase {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
