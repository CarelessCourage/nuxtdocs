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

const complexUmbra = highlight(`const success = {
  name: "success",
  color: "#ececec",
}

const warning = {
  name: "warning",
  color: "#ececec",
}

umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: ['#ff0000', '#00ff00', '#0000ff', success, warning],
}).apply();
`);

const complexUmbra2 = highlight(`umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: [{
    shades: [5, 10, 10, 10, 25, 25, 25, 25, 45, "#ececec", 45, 45],
  }],
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

const invertTheme = highlight(`const theme = umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#ff0000", "#0000ff"],
});

//Convert to dark theme
theme.inverse().apply();`);

const manageThemes = highlight(`
const darkTheme = {
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#ff0000"],
}

const lightTheme = {
  foreground: "#000000",
  background: "#ffffff",
  accents: ["#ff0000"],
}

const theme = umbra(lightTheme).apply();
`);

const apcaTheme = highlight(`const settings = {
  readability: 40,
};

umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#8888ff"],
}, settings).apply()`);

const radixTheme = highlight(`import { blue, blueDark } from '@radix-ui/colors'

const radixBlue = {
  name: 'blue',
  shades: Object.values(blueDark),
  tints: Object.values(blue)
}

const theme = umbra({
  background: '#000000',
  foreground: '#ffffff',
  accents: [radixBlue]
}).apply()
`);

const manualTheme = highlight(`const theme = umbra({
  background: '#000000',
  foreground: '#ffffff',
  accents: [{
    name: 'red',
    shades:
      [
        '#140602', 
        '#281005', 
        '#3a1408', 
        '#4b170a', 
        '#741b0c', 
        '#ff0000', 
        '#ff6945', 
        '#ff9271', 
        '#ffc4af', 
        '#ffdfd2', 
        '#ffede6', 
        '#fff5f1'
      ]
  }]
}).apply()
`);

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

const lockTheme = highlight(`//Delete this
const theme = umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#ff0000"],
}).apply();

//Paste output into your css
// :root {
//   --base: #000000;
//   --base-10: #111111;
//   --base-20: #252525;
//   --base-30: #373737;
//   --base-40: #484848;
//   --base-50: #727272;
//   --base-60: #939393;
//   --base-70: #adadad;
//   --base-80: #c1c1c1;
//   --base-90: #dcdcdc;
//   --base-100: #ececec;
//   --base-110: #f5f5f5;
//   --base-120: #f9f9f9;
//   --base-contrast: #ffffff;
//   ///...etc
// }
`);

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
    <ProseP class="text-gray-400">
      A theme management library to rule them all 💍
    </ProseP>
    <div class="cta">
      <UButton to="/getting-started" icon="i-heroicons-rocket-launch" size="lg">
        Get Started
      </UButton>
      <UButton
        to="/getting-started"
        icon="i-simple-icons-nuxtdotjs"
        size="lg"
        variant="outline"
      >
        Documentation
      </UButton>
    </div>

    <div ref="content" class="content">
      <Showcase :code="simpleUmbra">
        <ProseP class="tracking-wide font-bold">Input</ProseP>
        <ProseP>
          Umbra is a simple function that typically takes in as few as 2-3
          colors.
        </ProseP>
      </Showcase>

      <Showcase :code="complexUmbra">
        <ProseP> Or many more if you want. </ProseP></Showcase
      >

      <Showcase :code="simpleOutput">
        <ProseP class="tracking-wide font-bold">Output</ProseP>
        <ProseP>
          Generated output is a standardised collection of CSS variables. The
          pattern itself stays consistent regardless of the theme and all
          results are adjusted against the background colors to meet
          <ULink
            to="https://www.myndex.com/"
            active-class="text-primary"
            inactive-class="text-primary-500 hover:text-gray-100"
          >
            APCA
          </ULink>
          standards.
        </ProseP>
      </Showcase>

      <Showcase :code="manageThemes">
        <ProseP class="tracking-wide font-bold">Manage</ProseP>
        <ProseP>
          This makes it easy to modify and manage your theme. Switch between
          themes. Change colors.
        </ProseP>
      </Showcase>

      <Showcase :code="invertTheme">
        <ProseP>
          Automatic dark/light mode. You can manually define your own light and
          dark version of a theme, but even without that it can automatically
          spit out an inversion for you in the meanwhile. Makes it easier to
          start out with, and lets you focus on less repetitive tasks.
        </ProseP>
      </Showcase>

      <Showcase :code="apcaTheme">
        <ProseP>
          Prioritse accessibility by setting readabillity target. Calculated
          using the best color contrast standard
          <ULink
            to="https://www.myndex.com/"
            active-class="text-primary"
            inactive-class="text-primary-500 hover:text-gray-100"
          >
            (APCA).
          </ULink>
          Defaults to a sensible target.
        </ProseP>
      </Showcase>

      <Showcase :code="radixTheme">
        <ProseP>
          Perfect parity with
          <ULink
            to="https://www.radix-ui.com/colors"
            active-class="text-primary"
            inactive-class="text-primary-500 hover:text-gray-100"
          >
            radix-colors.
          </ULink>
          So you can mix and match handpicked color ranges and automatic color
          ranges as you please. Maybe start with an auto generated one and the
          refine it into a handpicked one as you mature.
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
          Need more extreme variant in theming customisations? Then use a color
          alias layer that lets you get as complex as you want.
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

      <Showcase :code="manualTheme">
        <ProseP>
          It's more than just a theme generator, its a theme manager. The
          generation part is just the backdrop that makes adjustments quick and
          easy to do. You can can manually dictate everything yourself if and
          when you need to.
        </ProseP>
      </Showcase>

      <Showcase :code="lockTheme">
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
  gap: var(--space-s);
  margin: var(--space) 0px;
  padding-bottom: var(--space-xl);
}
</style>
