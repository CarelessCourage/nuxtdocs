<script lang="ts" setup>
import { highlight } from "../composables/useHighlight";

const controlUmbra =
  highlight(`//But you can replace the numbers with strict colors 
//to force a shade to be a specific color in 
//a spesific place and take full control

const customAccent = {
  shades: [5, 10, 10, 10, 25, 25, 25, 25, 45, "#ececec", 45, 45], 
};

umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: [customAccent],
}).apply();`);

const controlUmbra2 =
  highlight(`//12 shades per range is the default and reccomended 
//standard but you can change it. Assuming you're providing
//a color through the color attribute rather than 
//specifying where in the range it goes it will 
//inject your provided color into index 9 of that range 
//but you can also change that aswell.

const accentAtIndex9 = {
  name: "accent2",
  color: "#ececec", 
}

umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#ff0000", customAccent],
}).apply();
`);

const controlThemes = [
  {
    label: "Control",
    code: controlUmbra,
  },
  {
    label: "Control2",
    code: controlUmbra2,
  },
];

const subschemesCode =
  highlight(`//You can attach multiple themes on diffirent elements.
//This means that you can retroactivley make anything 
//customizable at any time without rewriting anything
const header = document.querySelector("header")
const footer = document.querySelector("footer")

//Passing a string instead makes it create a stylesheet
//with the colors scoped to this class
const buttons = ".customizable-buttons"

umbra(lightTheme).apply({
  element: header
});

umbra(darkTheme).apply({
  element: footer
});

umbra(buttonTheme).apply({
  element: buttons
});`);

const scaleCode = highlight(`umbra(lightTheme).apply({
  element: document.querySelector("header")
});

umbra(darkTheme).apply({
  element: document.querySelector("footer")
});`);

const scaleThemes = [
  {
    label: "Simple",
    code: scaleCode,
  },
  {
    label: "Complex",
    code: subschemesCode,
  },
];

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
  formater: (colord) => {
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

const manualInverse =
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
}).apply()`);

const autoInverse = highlight(`const theme = umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#ff0000", "#0000ff"],
});

//Or automatically convert any theme to a dark/light theme
theme.inverse().apply();`);

const checkDark = highlight(`const theme = umbra({
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#ff0000", "#0000ff"],
});

//Check if theme is a dark theme
const isDark = theme.isDark();`);

const manipulateExample = [
  {
    label: "Manual",
    code: manualInverse,
  },
  {
    label: "Automatic",
    code: autoInverse,
  },
  {
    label: "IsDark",
    code: checkDark,
  },
];

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
  /*Base Range - 
  reprents a range of values between background
  and foreground*/
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
  /*Accent Range - 
  All ranges besides the base range are Accent ranges. 
  An accent range can have custom name but they all work 
  the same and the generic default is accent*/
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

const shortJSOutput = highlight(
  `//Flattened JS output to make iterating through all your colors easy. Shortened for brevity
const flattened = [
  {name: '--base', color: '#000000'},
  {name: '--base-10', color: '#111111'},
  {name: '--base-20', color: '#252525'},
  {name: '--base-30', color: '#373737'},
  //...etc
]
`
);

const simpleJSOutput = highlight(
  `//Flattened JS output to make iterating through all your colors easy
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

const umbraReturns = highlight(`//All options returned when umbra() is called
const {
  //data
  input: {/*inputed theme values*/},
  output: {/*output generated from input*/},
  //functions
  apply: () => /*format and then apply output to document*/,
  format: () => /*format the output into a usefull shape*/,
  inverse: () => /*inverse the theme - dark/light*/,
  isDark: () => /*check if the theme is dark, return boolean*/,
} = umbra(lightTheme)`);

const applyReturns =
  highlight(`//All options returned when apply() or format() is called
const {
  input: {/*inputed theme values*/},
  output: {/*inputs generates an output*/},
  formated: {/*output colors gets formated*/},
  flattened: {/*formated theme gets flattened for easy iteration*/},
} = umbra(lightTheme).apply()`);

const outputExample = [
  {
    label: "Shortened",
    code: simpleOutput,
  },
  {
    label: "Full",
    code: simple2Output,
  },
];

const optionsExample = [
  {
    label: "Umbra",
    code: umbraReturns,
  },
  {
    label: "Apply/Format",
    code: applyReturns,
  },
];

const dataExample = [
  {
    label: "Short",
    code: shortJSOutput,
  },
  {
    label: "Flattened",
    code: simpleJSOutput,
  },
  {
    label: "Formated",
    code: formatedJSOutput,
  },
];

const string = "`${rgb.r} ${rgb.g} ${rgb.b}`";

const formatTailwind = highlight(
  `//Tailwind friendly format
theme.apply({
  formater: (colord) => {
    const rgb = colord.toRgb()
    return ` +
    string +
    `
  }
});`
);

const addTailwind =
  highlight(`//list your color variables in the tailwind config

import type { Config } from 'tailwindcss';

export default {
  theme: {
    colors: {
      //Base Range
      'base-120': 'rgb(var(--base-120) / <alpha-value>)',
      'base-110': 'rgb(var(--base-110) / <alpha-value>)',
      'base-100': 'rgb(var(--base-100) / <alpha-value>)',
      'base-90': 'rgb(var(--base-90) / <alpha-value>)',
      'base-80': 'rgb(var(--base-80) / <alpha-value>)',
      'base-70': 'rgb(var(--base-70) / <alpha-value>)',
      'base-60': 'rgb(var(--base-60) / <alpha-value>)',
      'base-50': 'rgb(var(--base-50) / <alpha-value>)',
      'base-40': 'rgb(var(--base-40) / <alpha-value>)',
      'base-30': 'rgb(var(--base-30) / <alpha-value>)',
      'base-20': 'rgb(var(--base-20) / <alpha-value>)',
      'base-10': 'rgb(var(--base-10) / <alpha-value>)',

      //Accent Range
      'accent-120': 'rgb(var(--accent-120) / <alpha-value>)',
      'accent-110': 'rgb(var(--accent-110) / <alpha-value>)',
      'accent-100': 'rgb(var(--accent-100) / <alpha-value>)',
      'accent-90': 'rgb(var(--accent-90) / <alpha-value>)',
      'accent-80': 'rgb(var(--accent-80) / <alpha-value>)',
      'accent-70': 'rgb(var(--accent-70) / <alpha-value>)',
      'accent-60': 'rgb(var(--accent-60) / <alpha-value>)',
      'accent-50': 'rgb(var(--accent-50) / <alpha-value>)',
      'accent-40': 'rgb(var(--accent-40) / <alpha-value>)',
      'accent-30': 'rgb(var(--accent-30) / <alpha-value>)',
      'accent-20': 'rgb(var(--accent-20) / <alpha-value>)',
      'accent-10': 'rgb(var(--accent-10) / <alpha-value>)',

      // other ranges you might have added
      // (warning, success, etc)...
    }
  },
} satisfies Config;`);

const applyTailwind = highlight(
  `//Now you're free to use your theme in tailwind
<div class="bg-base-60" />`
);

const tailwindExample = [
  {
    label: "Format",
    code: formatTailwind,
  },
  {
    label: "Config",
    code: addTailwind,
  },
  {
    label: "Use",
    code: applyTailwind,
  },
];
</script>

<template>
  <div class="tabs-content">
    <Showcase :tabs="inputExample">
      <ProseP class="tracking-wide font-bold">Input</ProseP>
      <ProseP>
        Umbra is a simple function that typically takes in as few as 2-3 colors
        and auto generates a theme in a standardized pattern. Or you can input
        many more if you want and take full control.
      </ProseP>
    </Showcase>

    <UIcon name="i-heroicons-arrow-down" size="lg" class="text-base-900" />

    <Showcase :tabs="outputExample">
      <ProseP class="tracking-wide font-bold">Output</ProseP>
      <ProseP>
        The generated output is a standardised collection of CSS variables. The
        pattern itself stays consistent regardless of the theme and all results
        are adjusted against the background colors to meet
        <ULink
          to="https://www.myndex.com/"
          active-class="text-link-active"
          inactive-class="text-link hover:text-link-active"
        >
          APCA
        </ULink>
        readability standards.
      </ProseP>
    </Showcase>

    <Showcase :tabs="controlThemes">
      <ProseP class="tracking-wide font-bold">Control</ProseP>
      <ProseP>
        Color ranges will be auto generated using numbers to represent the
        percent mixture of the previous color toward the next known color from
        background -> foregrond.
      </ProseP>
    </Showcase>

    <Showcase :code="manageThemes">
      <ProseP class="tracking-wide font-bold">Manage</ProseP>
      <ProseP>
        The Umbra function makes it easy to modify and manage your themes super
        quick with just a few values. Switch between themes. Change colors.
        Scale. Make theming dynamic.
      </ProseP>
      <ProseP>
        Imagine if you where doing this manually? You would have to write and
        organize like 30+ color values every time you tried out a new theme. And
        it would not be quick to write even one value as it wold be a lot of
        back and forth.
      </ProseP>
      <ProseP>
        And every time you wanted to try to modify a color you would have to
        modify every other color also to adjust for the change.
      </ProseP>
      <ProseP>
        This will be really cumbersome even assuming you have done a great job
        of planning for it which you probably haven't - let's be real. I know
        because I spent the last 2 years thinking through color theming and even
        I still run into shit I had not thought through well enough.
      </ProseP>
      <ProseP>
        With umbra you can get started immediatly. It auto generates for you and
        it does a very good job of it, but the point isnt to be perfect, the
        point is to be fast and flexible and to let you take over if its ever
        lacking.
      </ProseP>
      <ProseP>
        Make a new theme in 3 seconds. Try out a small adjustment in 1 second.
        Take full control when you need. Trust that the solution umbra gives
        you, through years of testing and thurough thought, is flexible enough
        to handle pretty much anything no matter the scale or complexity.
      </ProseP>
    </Showcase>

    <Showcase :tabs="optionsExample">
      <ProseP class="tracking-wide font-bold">Options</ProseP>
      <ProseP> Umbra returns a number of useful functions and data </ProseP>
    </Showcase>

    <Showcase :tabs="dataExample">
      <ProseP class="tracking-wide font-bold">Data</ProseP>
      <ProseP>
        Examples of what the formated data looks like. Returned from both the
        apply() function and the format() function
      </ProseP>
    </Showcase>

    <Showcase :tabs="manipulateExample">
      <ProseP class="tracking-wide font-bold">Dark/Light</ProseP>
      <ProseP>
        Automatic dark/light mode. You can manually define your own light and
        dark version of a theme, but even without that it can automatically spit
        out an inversion for you in the meanwhile. Making it easier to start out
        with, and lets you focus on less repetitive tasks.
      </ProseP>
    </Showcase>

    <Showcase :code="apcaTheme">
      <ProseP class="tracking-wide font-bold">Accessibility</ProseP>
      <ProseP>
        Prioritize accessibility by setting a readabillity target. Calculated
        using the best color contrast standard
        <ULink
          to="https://www.myndex.com/"
          active-class="text-link-active"
          inactive-class="text-link hover:text-link-active"
        >
          (APCA).
        </ULink>
        Defaults to a sensible target.
      </ProseP>
    </Showcase>

    <Showcase :code="radixTheme">
      <ProseP class="tracking-wide font-bold">Radix Colors</ProseP>
      <ProseP>
        Perfect parity with
        <ULink
          to="https://www.radix-ui.com/colors"
          active-class="text-link-active"
          inactive-class="text-link hover:text-link-active"
        >
          radix-colors.
        </ULink>
        So you can mix and match handpicked color ranges and automatic color
        ranges as you please. Maybe start with an auto generated one and then
        refine it into a handpicked one as you mature.
      </ProseP>
    </Showcase>

    <Showcase :code="formatTheme">
      <ProseP class="tracking-wide font-bold">Formating</ProseP>
      <ProseP>
        Format your colors however you want. Defaults to plain hex color. Umbra
        uses
        <ULink
          to="https://github.com/omgovich/colord"
          active-class="text-link-active"
          inactive-class="text-link hover:text-link-active"
        >
          colord
        </ULink>
        to handle color manipulation. Its a tiny library and using it gives you
        all the power to do whatever you need with the color. colord comes with
        multiple extentions and I reccomend using it alongside umbra if you need
        more color tools.
      </ProseP>
    </Showcase>

    <Showcase :tabs="tailwindExample">
      <ProseP class="tracking-wide font-bold">Tailwind</ProseP>
      <ProseP>
        Tailwind expects colors to be stripped RGB values (number, number,
        number) so that it can apply opacity to them. To acomplish this format
        simply pass a formater that splits rgb into seperate values
      </ProseP>
    </Showcase>

    <Showcase :tabs="scaleThemes">
      <ProseP class="tracking-wide font-bold">Scale Complexity</ProseP>
      <ProseP>
        Start simple and scale theme complexity infinitely without any friction.
        You can decide to theme every element on your site differently at a
        moments notice without any need to reorganize anything at all. Just plug
        and play. Scale to infinity.
      </ProseP>
    </Showcase>

    <Showcase :code="simpleUmbra">
      <ProseP class="tracking-wide font-bold">More Extreme Themes</ProseP>
      <ProseP>
        Need more extreme variant in theming customisations? Then use a color
        alias layer that lets you get as complex as you want.
      </ProseP>
    </Showcase>

    <Showcase :code="manualTheme">
      <ProseP class="tracking-wide font-bold">Full Control</ProseP>
      <ProseP>
        It's more than just a theme generator, its a theme manager. The
        generation part is just the backdrop that makes adjustments quick and
        easy to do. You can can manually dictate everything yourself if and when
        you need to.
      </ProseP>
    </Showcase>

    <Showcase :code="lockTheme">
      <ProseP class="tracking-wide font-bold">No Lockin</ProseP>
      <ProseP>
        If you decide you no longer want Umbra, removing it is as easy as
        copying the output and pasting it yourself. You are never locked into
        this library. This way Umbra will always be a safe bet for the future.
      </ProseP>
    </Showcase>
  </div>
</template>

<style scoped>
.tabs-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-l);
  text-wrap: balance;
}
</style>
