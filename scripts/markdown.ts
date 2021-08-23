import * as MarkdownIt from "markdown-it";
import { textConstants } from "./constants";

export function toHtml(text: string) {
  Object.entries(textConstants).forEach(([key, value]) => {
    text = text.replace(`\${${key}}`, value);
  });
  const mi = new MarkdownIt();
  return mi.render(text);
}
