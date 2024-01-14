import type { UmbraInput, FormatedRange } from "@umbrajs/core";
import { umbra, rgb, isDark } from "@umbrajs/core";

const themeInput: UmbraInput = {
  foreground: "#ffffff",
  background: "#000000",
  accents: ["#9999ff"],
  inversed: {
    foreground: "#000000",
    background: "#ffffff",
    accents: ["#ff0000"],
  },
};

const settings = {
  formater: rgb,
};

export const useUmbra = defineStore("umbra", () => {
  const input = ref<UmbraInput>(themeInput);
  const formated = ref<FormatedRange[]>([]);
  const dark = ref<boolean>(true);

  function store(u: any) {
    input.value = u.input;
    formated.value = u.formated;
    dark.value = isDark(u.input);
  }

  function inverse() {
    const u = umbra(input.value, settings).inverse();
    store(u.format());
    return u;
  }

  function apply() {
    const u = umbra(input.value, settings).apply();
    store(u);
    return u;
  }

  return {
    apply,
    inverse,
    input,
    isDark: dark,
    formated,
  };
});
