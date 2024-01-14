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

export const useUmbra = (scheme = themeInput) => {
  const input = ref<UmbraInput>(scheme);
  const stored = useState("umbra", () => input);
  const formated = ref<FormatedRange[]>([]);
  const storedFormated = useState("umbra-formated", () => formated);
  const dark = ref<boolean>(true);
  const storedDark = useState("umbra-dark", () => dark);

  function store(u: any) {
    stored.value = u.input;
    storedFormated.value = u.formated;
    storedDark.value = isDark(u.input);
    console.log("rex: u", u);
  }

  function inverse() {
    const u = umbra(stored.value, settings).inverse();
    store(u.format());
    return u;
  }

  function apply() {
    const u = umbra(stored.value, settings).apply();
    store(u);
    return u;
  }

  return {
    apply,
    inverse,
    input: stored,
    isDark: storedDark,
    formated: storedFormated,
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
