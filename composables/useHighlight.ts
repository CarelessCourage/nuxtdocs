import { getHighlighter } from "shikiji";

const highlighter = await getHighlighter();
await highlighter.loadLanguage("javascript");
await highlighter.loadLanguage("typescript");
await highlighter.loadLanguage("vue");
await highlighter.loadLanguage("css");
await highlighter.loadTheme("dracula");

export function highlight(code: string, lang = "javascript") {
  return highlighter.codeToHtml(code, {
    theme: "dracula",
    lang,
  });
}
