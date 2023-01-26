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
