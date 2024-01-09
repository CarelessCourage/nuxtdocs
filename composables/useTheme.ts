import type { UmbraInput } from "@umbrajs/core";
import { umbra, rgbStrippedFormat, isDark } from "@umbrajs/core";

const themeInput = {
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#ff88ff"],
};

export const useTheme = (scheme?: UmbraInput) => {
  const input = ref<UmbraInput>(scheme || themeInput);
  const stored = useState("umbra", () => input);
  const theme = umbra(scheme, (outputs) => {
    console.log("rex: theme set");
  });

  if (scheme) {
    theme.apply({
      formater: rgbStrippedFormat,
    });
  }

  function setTheme(input: UmbraInput) {
    return umbra(input, (outputs) => {
      stored.value = outputs.input;
      console.log("rex: theme set");
    }).apply({
      formater: rgbStrippedFormat,
    });
  }

  function inverseTheme(input: UmbraInput) {
    return umbra(input, (outputs) => {
      stored.value = outputs.input;
      console.log("rex: theme inversed");
    })
      .inverse()
      .apply({
        formater: rgbStrippedFormat,
      });
  }

  function isDarkTheme() {
    return isDark(stored.value);
  }

  return theme;
};
