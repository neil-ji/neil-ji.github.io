import { toHtml } from "./markdown";
import { readFile, writeFile } from "fs/promises";
import { format, basename, dirname } from "path";
import { getFilePaths, createDirs } from "./fsutils";

const MARKDOWN_PATH = "./markdown";
const HTML_PATH = "./docs";

async function run() {
  const paths = await getFilePaths(MARKDOWN_PATH);
  const newPaths = paths.map((path) => path.replace(MARKDOWN_PATH, HTML_PATH));
  const result = await Promise.all(paths.map((path) => readFile(path)));
  await createDirs(newPaths);
  result.forEach((item, index) => {
    const html = toHtml(item.toString());
    paths[index];
    writeFile(
      format({
        dir: dirname(newPaths[index]),
        name: basename(paths[index], ".md"),
        ext: ".html",
      }),
      html
    );
  });
}

run();
