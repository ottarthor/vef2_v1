let header = [];

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
      <a href="${result.csv}.html">${result.title}</a>
      <p>${result.description}</p>
    </li>`
    )
    .join("\n");

  return `<h1>Námsskrá</h1>
    <section class="options">
      <ul>${list}</ul>
    </section>`;
}

export function indexTemplate(results) {
  return template("Námsskrá", index(results));
}

export function info(result, title) {
  let courseHtml = "";
  let headersHtml = [];

  if (!result.courses) {
    headersHtml = header;
  } else if (result.courses.length === 0) {
    headersHtml = header;
  } else {
    headersHtml = result.headers.map((val) => `<th>${val}</th>`).join("\n");
    header = headersHtml;
  }

  for (const c in result.courses) {
    if (c !== undefined) {
      courseHtml = courseHtml.concat("<tr>");
      courseHtml = courseHtml.concat("\n");
      const i = Object.values(result.courses[c]);
      // eslint-disable-next-line no-loop-func, no-return-assign
      i.forEach((stat) => (courseHtml = courseHtml.concat(`<td>${stat}</td>`)));
      courseHtml = courseHtml.concat("\n");
      courseHtml = courseHtml.concat("</tr>");
    }
  }

  return `<article>
    <h1>${title}</h2>
        <section>
            <table>
                <tr>
                    ${headersHtml}
                </tr>
                <tr>
                    ${courseHtml}
                </tr>
            </table>
        </section>
        <p><a href="/">Til baka</a></p>
  </article>`;
}

export function infoTemplate(title, result) {
  return template(title, info(result, title));
}
