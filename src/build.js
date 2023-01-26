import { readJson, direxists, readFilesFromDir, readCsv } from "./lib/file.js";
import { mkdir, writeFile } from "fs/promises";
import { indexTemplate, infoTemplate } from "./lib/html.js";
import path, { join } from "path";
import { parse } from "./lib/parser.js";

const INDEX_DIR = "./data/index.json";
const DATA_DIR = "./data";
const OUTPUT_DIR = "./dist";

async function main() {
  // Búa til `./dist` ef ekki til
  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }

  const indexJson = JSON.parse(await readJson(INDEX_DIR));
  const results = [];

  for (const department of indexJson) {
    results.push(department);
    const title = department.title;
    const csv = department.csv;
    const filename = join(DATA_DIR, csv);
    const content = await readCsv(filename);

    if (content) {
      const information = parse(content);
      const template = infoTemplate(title, information);

      const name = path.basename(csv);
      const filename = `${name}.html`;
      const filepath = join(OUTPUT_DIR, filename);

      // eslint-disable-next-line no-await-in-loop
      await writeFile(filepath, template, { flag: "w+" });
    }
  }
  const filepath = join(OUTPUT_DIR, "index.html");
  const template = indexTemplate(results);

  // eslint-disable-next-line no-await-in-loop
  await writeFile(filepath, template, { flag: "w+" });
}

main();
