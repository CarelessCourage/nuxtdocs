import type { UmbraInput } from "@umbrajs/core";
import { umbra, rgbStrippedFormat } from "@umbrajs/core";

const themeInput = {
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#ff88ff"],
};

export const useTheme = (scheme?: UmbraInput) => {
  const input = ref<UmbraInput>(scheme || themeInput);
  const stored = useState("umbra", () => input);
  const theme = umbra(scheme, {
    formater: rgbStrippedFormat,
    callback: (outputs) => {
      console.log("rex: theme set");
    },
  });

  if (scheme) {
    theme.apply({
      formater: rgbStrippedFormat,
    });
  }

  return theme;
};
