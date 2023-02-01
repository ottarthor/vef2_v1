import { readFile as fsReadFile, stat } from "fs/promises";

/**
 * Check if a directory exists.
 * @param {string} dir Directory to check
 * @returns `true` if dir exists, `false` otherwise
 */
export async function direxists(dir) {
  try {
    const info = await stat(dir);
    return info.isDirectory();
  } catch (e) {
    return false;
  }
}

/**
 * Read a file and return its content.
 * @param {string} file File to read
 * @param {object} options.encoding asdf
 * @returns {Promise<string | null>} Content of file or `null` if unable to read.
 */
export async function readJson(file, { encoding = "utf8" } = {}) {
  try {
    const content = await fsReadFile(file);
    return content.toString(encoding);
  } catch (e) {
    return null;
  }
}

/**
 * Read a file and return its content.
 * @param {string} file File to read
 * @param {object} options.encoding asdf
 * @returns {Promise<string | null>} Content of file or `null` if unable to read.
 */
export async function readCsv(file, { encoding = "latin1" } = {}) {
  try {
    const content = await fsReadFile(file);
    return content.toString(encoding);
  } catch (e) {
    return null;
  }
}
