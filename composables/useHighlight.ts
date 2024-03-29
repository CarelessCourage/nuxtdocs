import { getHighlighter } from "shikiji";

const highlighter = await getHighlighter();
await highlighter.loadLanguage("javascript");
await highlighter.loadLanguage("typescript");
await highlighter.loadLanguage("vue");
await highlighter.loadLanguage("css");
await highlighter.loadTheme("slack-dark");
await highlighter.loadTheme("solarized-light");

import { useUmbra } from "./useUmbra";

export function highlight(code: string, lang = "javascript") {
  return highlighter.codeToHtml(code, {
    theme: "slack-dark",
    lang,
  });
}
