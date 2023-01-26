import { readJson, direxists, readFilesFromDir, readCsv } from "./lib/file.js";
import { mkdir, writeFile } from "fs/promises";
import { indexTemplate } from "./lib/html.js";
import path, { join } from "path";

const INDEX_DIR = "./data/index.json";
const DATA_DIR = "./data";
const OUTPUT_DIR = "./dist";

async function main() {
  // Búa til `./dist` ef ekki til
  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }

  const indexJson = JSON.parse(await readJson(INDEX_DIR));

  const dataFiles = await readFilesFromDir(DATA_DIR);
  const results = [];

  for (const department of indexJson) {
    results.push(department);
    const filename = join(DATA_DIR, department.csv);
    const content = await readCsv(filename);

    if (content) {
    }
  }
  const filepath = join(OUTPUT_DIR, "index.html");
  const template = indexTemplate(results);

  // eslint-disable-next-line no-await-in-loop
  await writeFile(filepath, template, { flag: "w+" });
}

main();
