"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const markdown_1 = require("./markdown");
const promises_1 = require("fs/promises");
const MARKDOWN_PATH = "./docs/markdown";
const HTML_PATH = "./docs/html";
async function run() {
    const paths = await promises_1.readdir(MARKDOWN_PATH);
    const result = await Promise.all(paths.map((path) => promises_1.readFile(`${MARKDOWN_PATH}/${path}`)));
    result.forEach((res, index) => {
        const html = markdown_1.toHtml(res.toString());
        promises_1.writeFile(`${HTML_PATH}/${paths[index]}`, html);
    });
}
run();
