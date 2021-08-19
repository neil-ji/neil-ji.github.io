"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHtml = void 0;
const MarkdownIt = require("markdown-it");
function toHtml(text) {
    const mi = new MarkdownIt();
    return mi.render(text);
}
exports.toHtml = toHtml;
