import type { UmbraInput } from "@umbrajs/core";
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

export const useUmbra = (scheme = themeInput) => {
  const input = ref<UmbraInput>(scheme);
  const stored = useState("umbra", () => input);

  function inverse() {
    const u = umbra(stored.value, {
      formater: rgb,
    }).inverse();
    stored.value = u.input;
    return u;
  }

  function apply() {
    const u = umbra(stored.value, {
      formater: rgb,
    }).apply();
    stored.value = u.input;
    return u;
  }

  return {
    apply,
    inverse,
    isDark: computed(() => isDark(stored.value)),
    input: stored,
  };
};

// export const useUmbra2 = (scheme = themeInput) => {
//   const theme = ref<Umbra | null>(null);

//   onMounted(() => {
//     theme.value = umbra(scheme, {
//       formater: rgb,
//       callback: (outputs) => {
//         console.log("rex: theme set");
//       },
//     });
//   });

//   return theme;
// };
