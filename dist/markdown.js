"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHtml = void 0;
const MarkdownIt = require("markdown-it");
const constants_1 = require("./constants");
function toHtml(text) {
    Object.entries(constants_1.textConstants).forEach(([key, value]) => {
        text = text.replace(`\${${key}}`, value);
    });
    const mi = new MarkdownIt();
    return mi.render(text);
}
exports.toHtml = toHtml;
