"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const markdown_1 = require("./markdown");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const fsutils_1 = require("./fsutils");
const MARKDOWN_PATH = "./markdown";
const HTML_PATH = "./docs";
async function run() {
    const paths = await fsutils_1.getFilePaths(MARKDOWN_PATH);
    const newPaths = paths.map((path) => path.replace(MARKDOWN_PATH, HTML_PATH));
    const result = await Promise.all(paths.map((path) => promises_1.readFile(path)));
    await fsutils_1.createDirs(newPaths);
    result.forEach((item, index) => {
        const html = markdown_1.toHtml(item.toString());
        paths[index];
        promises_1.writeFile(path_1.format({
            dir: path_1.dirname(newPaths[index]),
            name: path_1.basename(paths[index], ".md"),
            ext: ".html",
        }), html);
    });
}
run();
