/**
 * Parse numbers from string of data. Numbers are \n seperated into lines.
 * @param {string} input String with data
 * @returns {number[]} Array of parsed numbers from the data, empty if no numbers
 */
export function parse(input) {
  if (typeof input !== "string") {
    return [];
  }

  const lines = input.split("\n");

  const headers = lines[0].split(";");

  const courses = [];

  for (let i = 1; i < lines.length; i++) {
    let info = lines[i].split(";");
    //skoða ehv skilyrði
    let num = info[0];
    let title = info[1];
    let unit = info[2];
    let sem = info[3];
    let lev = info[4];
    let link = info[5];

    let course = {
      num: num,
      title: title,
      unit: unit,
      sem: sem,
      lev: lev,
      link: link,
    };
    courses.push(course);
  }

  const major = {
    headers: headers,
    courses: courses,
  };
  console.log(major.courses);
  return major;
}
