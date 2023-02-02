// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from "@jest/globals";
import { readCsv } from "../lib/file.js";
import { parse } from "../lib/parser";

describe("parser", () => {
  describe("parse", () => {
    it("should return an object with two empty arrays for empty inputs", async () => {
      expect(parse("")).toEqual({ courses: [], headers: [] });
      expect(parse(null)).toEqual({ courses: [], headers: [] });
      expect(parse(0)).toEqual({ courses: [], headers: [] });
      expect(parse(false)).toEqual({ courses: [], headers: [] });
      expect(parse({})).toEqual({ courses: [], headers: [] });
    });

    it("should return two empty arrays, for files shorter than 50 lines", async () => {
      const file = readCsv("./test-folder/3");
      const input = parse(file);
      expect(parse(input)).toEqual({ courses: [], headers: [] });
    });
  });
});
