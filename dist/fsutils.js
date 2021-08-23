"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDirs = exports.getFilePaths = void 0;
const promises_1 = require("fs/promises");
const path_1 = require("path");
async function getFilePaths(dir) {
    const result = [];
    const paths = await promises_1.readdir(dir);
    for (const path of paths) {
        const childPath = `${dir}/${path}`;
        if ((await promises_1.stat(childPath)).isDirectory()) {
            result.push(...(await getFilePaths(childPath)));
            continue;
        }
        result.push(childPath);
    }
    return result;
}
exports.getFilePaths = getFilePaths;
async function createDirs(paths) {
    console.log(paths);
    for (const path of paths) {
        const dir = path_1.dirname(path);
        try {
            await promises_1.readdir(dir);
            await promises_1.mkdir(path);
        }
        catch {
            await createDirs([dir]);
        }
    }
}
exports.createDirs = createDirs;
