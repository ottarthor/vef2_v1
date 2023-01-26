import { join } from "path";

function template(title, content) {
  return `<!doctype html>
    <html lang="is">
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <link rel="stylesheet" href="../public/styles.css">
      </head>
      <body>${content}</body>
    </html>`;
}

function index(results) {
  const list = results
    .map(
      (result) => `
    <li>
      <a href="${result.filename}">${result.title}</a>
      <p>${result.description}</p>
    </li>`
    )
    .join("\n");

  return `<section>
      <h1>Námsskrá</h1>
      <ul>${list}</ul>
    </section>`;
}

export function indexTemplate(results) {
  return template("Námsskrá", index(results));
}

export function info(result, title) {
  const headersHtml = result.headers.map((val) => `<th>${val}</th>`).join("\n");

  const infoHtml = result.courses.map((val) => `<td>${val}</td>`).join("\n");

  return `<article>
    <h1>${title}</h2>
    <section>
    <table>
    <tr>
    ${headersHtml}
    </tr>
    <tr>
    ${infoHtml}
    </tr>
    </table>
    </section>
    <p><a href="/">Til baka</a></p>
  </article>`;
}

export function infoTemplate(title, result) {
  return template(title, info(result, title));
}
