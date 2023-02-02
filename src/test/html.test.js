// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from "@jest/globals";
import { indexTemplate } from "../lib/html";

describe("html", () => {
  describe("info", () => {
    it("should return a template for stats object", () => {
      const input = [
        {
          title: "Hagfræðideild",
          description:
            // eslint-disable-next-line max-len
            "Menntun í Hagfræðideild er greiðasta leiðin til þátttöku, rannsókna og skilnings á hagkerfi okkar. Kennslan stendur á sterkum grunni og er markmið námsins að veita nemendum góðan undirbúning í hagfræði, stærðfræði og tölfræði og möguleika á sérhæfingu í öðrum greinum.",
          csv: "hagfraedi.csv",
        },
        {
          title: "Iðnaðarverkfræði-, vélaverkfræði- og tölvunarfræðideild",
          description:
            // eslint-disable-next-line max-len
            "Deildin býður upp á fjölbreytt námsframboð verkfræði- og tölvunarfræðigreina. Þessar greinar eiga það sameiginlegt að vera afar hagnýtar og þýðingarmiklar við uppbyggingu og rekstur nútíma þjóðfélaga.",
          csv: "ivt.csv",
        },
      ];

      const result = indexTemplate(input, "Námsskrá");
      expect(result).toEqual(`<!doctype html>
    <html lang="is">
      <head>
        <meta charset="utf-8">
        <title>Námsskrá</title>
        <link rel="stylesheet" href="../public/styles.css">
      </head>
      <body><h1>Námsskrá</h1>
    <section class="options">
      <ul>
    <li>
      <a href="hagfraedi.csv.html">Hagfræðideild</a>
      <p>Menntun í Hagfræðideild er greiðasta leiðin til þátttöku, rannsókna og skilnings á hagkerfi okkar. Kennslan stendur á sterkum grunni og er markmið námsins að veita nemendum góðan undirbúning í hagfræði, stærðfræði og tölfræði og möguleika á sérhæfingu í öðrum greinum.</p>
    </li>

    <li>
      <a href="ivt.csv.html">Iðnaðarverkfræði-, vélaverkfræði- og tölvunarfræðideild</a>
      <p>Deildin býður upp á fjölbreytt námsframboð verkfræði- og tölvunarfræðigreina. Þessar greinar eiga það sameiginlegt að vera afar hagnýtar og þýðingarmiklar við uppbyggingu og rekstur nútíma þjóðfélaga.</p>
    </li></ul>
    </section></body>
    </html>`);
    });
  });
});
