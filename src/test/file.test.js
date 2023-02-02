// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from "@jest/globals";
import { direxists, readCsv, readJson } from "../lib/file";

describe("file", () => {
  describe("direxists", () => {
    it("returns false if dir does not exist", async () => {
      const result = await direxists("./does-not-exist");
      expect(result).toBe(false);
    });

    it("returns true if dir does exist", async () => {
      const result = await direxists("./src/test/test-folder");
      expect(result).toBe(true);
    });

    it("returns false if no input", async () => {
      const result = await direxists();
      expect(result).toBe(false);
    });
  });

  describe("readCsv", () => {
    it("should return null for file that does not exist", async () => {
      const result = await readCsv("./does-not-exist");

      expect(result).toEqual(null);
    });

    it("should return content of known file that does exist", async () => {
      const result = await readCsv("./src/test/test-folder/1");

      expect(result).toEqual("gonni\n");
    });
  });

  describe("readJson", () => {
    it("should return null for file that does not exist", async () => {
      const result = await readJson("./does-not-exist");

      expect(result).toEqual(null);
    });

    it("should return content of known file that does exist", async () => {
      const result = await readJson("./src/test/test-folder/1");

      expect(result).toEqual("gonni\n");
    });
  });
});
