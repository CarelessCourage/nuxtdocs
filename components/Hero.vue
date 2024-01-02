<script lang="ts" setup>
import { highlight } from "../composables/useHighlight";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const complexUmbra2 = highlight(`umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: [{
    shades: [5, 10, 10, 10, 25, 25, 25, 25, 45, "#ececec", 45, 45],
  }],
}).apply();
`);

const scaleCode = highlight(`umbra(lightTheme).apply({ 
  element: document.querySelector("header") 
});

umbra(darkTheme).apply({ 
  element: document.querySelector("footer")
});`);

const invertTheme =
  highlight(`//Manually set your themes light and dark versions
umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#8888ff"],
  inverted: {
    foreground: "#000000",
    background: "#ffffff",
    accents: ["#8888ff"],
  }
}).apply()


const theme = umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#ff0000", "#0000ff"],
});

//Or automatically convert any theme to a dark/light theme
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
  readability: 40, //0-120
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

const formatTheme = highlight(`umbra(lightTheme).apply({
  formater: (color) => {
    return color.toHslString();
  },
})
`);

const tailwindTheme = highlight(`umbra({
    foreground: "#ffffff",
    background: "#000000",
    accents: ["#8888ff"],
  }).apply({
    formater: rgbStrippedFormat,
  })
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

const inputExample = [
  {
    label: "Simple",
    code: simpleUmbra,
  },
  {
    label: "More",
    code: complexUmbra,
  },
];

const simpleOutput = highlight(
  `/*Example of CSS output shortened for brevity*/
:root {
  --base: #000000;
  --base-10: #111111;
  --base-20: #252525;
  --base-30: #373737;
  --base-40: #484848;
  ...etc
}
`,
  "css"
);

const simple2Output = highlight(
  `/*Example of CSS output expanded for clarity*/
:root {
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

const simpleJSOutput = highlight(
  `//Flattened JS output for eaily iterating through all your colors
const flattened = [
  {name: '--base', color: '#000000'},
  {name: '--base-10', color: '#111111'},
  {name: '--base-20', color: '#252525'},
  {name: '--base-30', color: '#373737'},
  {name: '--base-40', color: '#484848'},
  {name: '--base-50', color: '#727272'},
  {name: '--base-60', color: '#939393'},
  {name: '--base-70', color: '#adadad'},
  {name: '--base-80', color: '#c1c1c1'},
  {name: '--base-90', color: '#dcdcdc'},
  {name: '--base-100', color: '#ececec'},
  {name: '--base-110', color: '#f5f5f5'},
  {name: '--base-120', color: '#f9f9f9'},
  {name: '--base-contrast', color: '#ffffff'},
  {name: '--accent', color: '#8888ff'},
  {name: '--accent-10', color: '#0b0a11'},
  {name: '--accent-20', color: '#191825'},
  {name: '--accent-30', color: '#232237'},
  {name: '--accent-40', color: '#2c2b48'},
  {name: '--accent-50', color: '#424172'}, 
  {name: '--accent-60', color: '#8888ff'},
  {name: '--accent-70', color: '#a9a4ff'},
  {name: '--accent-80', color: '#c0baff'},
  {name: '--accent-90', color: '#ddd9ff'},
  {name: '--accent-100', color: '#eceaff'},
  {name: '--accent-110', color: '#f5f3ff'},
  {name: '--accent-120', color: '#faf8ff'},
  {name: '--accent-contrast', color: '#ffffff'}
]
`
);

const formatedJSOutput =
  highlight(`//Formatted JS output for iterating through a list thats aware of the colors relationships to each other
const formated = [
  {
    name: "base",
    background: "#000000",
    shades: [
      "#111111",
      "#252525",
      "#373737",
      "#484848",
      "#727272",
      "#939393",
      "#adadad",
      "#c1c1c1",
      "#dcdcdc",
      "#ececec",
      "#f5f5f5",
      "#f9f9f9",
    ],
    foreground: "#ffffff",
  },
  {
    name: "accent",
    background: "#8888ff",
    shades: [
      "#0b0a11",
      "#191825",
      "#232237",
      "#2c2b48",
      "#424172",
      "#8888ff",
      "#a9a4ff",
      "#c0baff",
      "#ddd9ff",
      "#eceaff",
      "#f5f3ff",
      "#faf8ff",
    ],
    foreground: "#ffffff",
  },
]; `);

const umbraReturns = highlight(`const {
  input: {/*inputed theme values*/},
  output: {/*raw internal output before formating*/},
  apply: () => /*format and then apply theme to document*/,
  format: () => /*format the output into a usefull shape*/,
  inverse: () => /*inverse the theme - dark/light*/,
  isDark: () => /*check if the theme is dark, return boolean*/,
} = umbra(lightTheme)`);

const outputExample = [
  {
    label: "Shortened",
    code: simpleOutput,
  },
  {
    label: "Full",
    code: simple2Output,
  },
  {
    label: "Flattened",
    code: simpleJSOutput,
  },
  {
    label: "Formated",
    code: formatedJSOutput,
  },
  {
    label: "Umbra",
    code: umbraReturns,
  },
];
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

    <div ref="content" class="content">
      <Showcase :tabs="inputExample">
        <ProseP class="tracking-wide font-bold">Input</ProseP>
        <ProseP>
          Umbra is a simple function that typically takes in as few as 2-3
          colors. Or many more if you want.
        </ProseP>
      </Showcase>

      <UIcon name="i-heroicons-arrow-down" size="lg" class="text-gray-400" />

      <Showcase :tabs="outputExample">
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
          spit out an inversion for you in the meanwhile. Making it easier to
          start out with, and lets you focus on less repetitive tasks.
        </ProseP>
      </Showcase>

      <Showcase :code="apcaTheme">
        <ProseP>
          Prioritse accessibility by setting a readabillity target. Calculated
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
          ranges as you please. Maybe start with an auto generated one and then
          refine it into a handpicked one as you mature.
        </ProseP>
      </Showcase>

      <Showcase :code="formatTheme">
        <ProseP> Format your colors however you want </ProseP>
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
.walkthrough {
  padding: var(--space-l) 0px var(--space-xl);
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

.hero .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-l);
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
