import type { UmbraInput } from "@umbrajs/core";

export const useTheme = () => {
  const theme = ref<any>({
    settings: undefined,
    scheme: {
      foreground: "#ffffff",
      background: "#000000",
      accents: ["#ff0000"],
    },
  });
  return useState("theme", () => theme);
};
