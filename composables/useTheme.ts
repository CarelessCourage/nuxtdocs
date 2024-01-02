export const useTheme = () => {
  const theme = ref<any>({
    settings: undefined,
    scheme: {
      foreground: "#ffffff",
      background: "#000000",
      accents: ["#003344"],
    },
  });
  return useState("theme", () => theme);
};
