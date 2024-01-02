<script lang="ts" setup>
import { highlight } from "../composables/useHighlight";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const simpleUmbra = highlight(`umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#ff0000"],
}).apply();
`);

const scaleCode = highlight(`const header = document.querySelector("header");

umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#ff0000", "#0000ff"],
}).apply({ element: header });

const footer = document.querySelector("footer");

umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#ff0000", "#0000ff"],
}).apply({ element: footer });`);

const invertTheme = highlight(` const theme = umbra({
    foreground: "#ffffff",
    background: "#000000",
    accents: ["#ff0000", "#0000ff"],
  });

  //Convert to dark theme
  theme.inverse().apply();`);

const simpleOutput = highlight(
  `:root {
  --base: #000000;
  --base-10: #111111;
  --base-20: #252525;
  --base-30: #373737;
  --base-40: #484848;
  --base-50: #727272;
  --base-60: #939393;
  --base-70: #adadad;
  --base-80: #c1c1c1;
  --base-90: #dcdcdc;
  --base-100: #ececec;
  --base-110: #f5f5f5;
  --base-120: #f9f9f9;
  --base-contrast: #ffffff;
  --accent: #ff0000;
  --accent-10: #140602;
  --accent-20: #281005;
  --accent-30: #3a1408;
  --accent-40: #4b170a;
  --accent-50: #741b0c;
  --accent-60: #ff0000;
  --accent-70: #ff6945;
  --accent-80: #ff9271;
  --accent-90: #ffc4af;
  --accent-100: #ffdfd2;
  --accent-110: #ffede6;
  --accent-120: #fff5f1;
}
`,
  "css"
);

const hero = ref<HTMLElement>();
const logo = ref<HTMLElement>();
const circle = ref<HTMLElement>();
const content = ref<HTMLElement>();

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
    <div class="cta">
      <UButton to="/getting-started" icon="i-heroicons-rocket-launch" size="lg"
        >Get Started</UButton
      >
      <UButton
        to="/getting-started"
        icon="i-simple-icons-nuxtdotjs"
        size="lg"
        variant="outline"
        >Documentation</UButton
      >
    </div>

    <div ref="content" class="content">
      <Showcase :code="simpleUmbra">
        <ProseP>A theme management library to rule them all</ProseP>
      </Showcase>

      <Showcase :code="simpleOutput">
        <ProseP>
          Generated output is a standardised collection of CSS variables that
          will stay the same pattern no matter the theme
        </ProseP>
      </Showcase>

      <Showcase :code="invertTheme">
        <ProseP>
          Makes it easy to modify and manage your theme. Switch between themes.
          Change theme. Automatic dark/light mode. Monitor theme accessibility
          against cutting edge color contrast standards
          <ULink
            to="https://www.myndex.com/"
            active-class="text-primary"
            inactive-class="text-primary-500 hover:text-gray-100"
          >
            (APCA).
          </ULink>
          Perfect parity with

          <ULink
            to="https://www.radix-ui.com/colors"
            active-class="text-primary"
            inactive-class="text-primary-500 hover:text-gray-100"
          >
            radix-colors.
          </ULink>
        </ProseP>
      </Showcase>

      <Showcase :code="scaleCode">
        <ProseP>
          Start simple and scale theme complexity infinitely without any
          friction. You can decide to theme every element on your site
          differently at a moments notice without any need to reorganize
          anything at all. Just plug and play. Scale to infinity.
        </ProseP>
      </Showcase>

      <Showcase :code="simpleUmbra">
        <ProseP>
          Boss-man randomly wants to be able to dynamically change the color of
          that one card? Done. Need more extreme variant in theming
          customisations? Then use a color alias layer that lets you get as
          complex as you want.
        </ProseP>
      </Showcase>

      <Showcase :code="simpleUmbra">
        <ProseP>
          Or keep it all super simple, umbra lets you manage it all from a
          single source and very quickly. Change a color and watch the other
          colors adjust themselves to your change instead of having to manually
          shift everything every time you need to change something.
        </ProseP>
      </Showcase>

      <Showcase :code="simpleUmbra">
        <ProseP>
          It's more than just a theme generator, its a theme manager. The
          generation part is just the backdrop that makes adjustments quick and
          easy to do. You can can manually dictate everything yourself if and
          when you need to.
        </ProseP>
      </Showcase>

      <Showcase :code="simpleUmbra">
        <ProseP>
          If you decide you no longer want Umbra, removing it is as easy as
          copying the output and pasting it yourself. You are never locked into
          this library. This way Umbra will always be a safe bet for the future.
        </ProseP>
      </Showcase>
    </div>
  </div>
  <!-- <Ellipsis size="40rem" class="absolute -top-72 -left-48" />
  <Ellipsis size="60rem" class="absolute -bottom-32 -right-56" />
  <Ellipsis size="40rem" z-index="0" class="absolute" /> -->
</template>

<style scoped lang="scss">
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

.hero .content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-inline-size: 50ch;
  text-wrap: balance;
}

.her .showcase {
  display: flex;
  gap: 2rem;
}

.cta {
  display: flex;
  gap: var(--space-xs);
  margin: var(--space) 0px;
  padding-bottom: var(--space-xl);
}
</style>
