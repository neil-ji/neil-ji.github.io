import { readdir, stat, mkdir } from "fs/promises";
import {dirname} from "path";

export async function getFilePaths(dir: string): Promise<string[]> {
  const result: string[] = [];
  const paths = await readdir(dir);
  for (const path of paths) {
    const childPath = `${dir}/${path}`;
    if ((await stat(childPath)).isDirectory()) {
      result.push(...(await getFilePaths(childPath)));
      continue;
    }
    result.push(childPath);
  }
  return result;
}

// TODO. Cannot work.
export async function createDirs(paths: string[]) {
  console.log(paths);
  for(const path of paths) {
    const dir = dirname(path);
    try {
      await readdir(dir);
      await mkdir(path);
    } catch {
      await createDirs([dir]);
    }
  }
}