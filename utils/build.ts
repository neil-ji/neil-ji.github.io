import { toHtml } from "./markdown";
import { readFile, readdir, writeFile } from "fs/promises";

const MARKDOWN_PATH = "./docs/markdown";
const HTML_PATH = "./docs/html";

async function run() {
  const paths = await readdir(MARKDOWN_PATH);
  const result = await Promise.all(paths.map((path) => readFile(`${MARKDOWN_PATH}/${path}`)));
  result.forEach((res, index)=>{
    const html = toHtml(res.toString());
    writeFile(`${HTML_PATH}/${paths[index]}`, html);
  })
}

run();
