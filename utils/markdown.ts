import * as MarkdownIt from "markdown-it";

export function toHtml(text: string) {
    const mi = new MarkdownIt();
    return mi.render(text);
}