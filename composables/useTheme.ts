import { umbra, umbraHydrate, rgbStrippedFormat } from "@umbrajs/core";

export const storedTheme = useState("theme", () => {
  return true;
});

export function useTheme() {
  return false;
  //return umbraHydrate(storedTheme.value);
}
