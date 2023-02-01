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

  if (lines.length > 50) {
    for (let i = 1; i < lines.length - 1; i += 1) {
      const info = lines[i].split(";");
      // skoða ehv skilyrði
      const num = info[0];
      const title = info[1];
      let unit = info[2];
      let sem = info[3];
      const lev = info[4];
      const link = info[5];

      console.log(unit, sem);
      if (Number.isNaN(parseInt(10, unit))) {
        unit = info[3];
        sem = info[2];
        console.log(unit, sem);
      }

      const course = {
        num,
        title,
        unit,
        sem,
        lev,
        link,
      };
      courses.push(course);
    }
  }

  const major = {
    headers,
    courses,
  };
  return major;
}
