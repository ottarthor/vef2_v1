/**
 * Parse numbers from string of data. Numbers are \n seperated into lines.
 * @param {string} input String with data
 * @returns {number[]} Array of parsed numbers from the data, empty if no numbers
 */
export function parse(input) {
  if (typeof input !== "string") {
    return { courses: [], headers: [] };
  }

  const lines = input.split("\n");

  let headers = lines[0].split(";");

  const courses = [];

  if (lines.length > 50) {
    for (let i = 1; i < lines.length - 1; i += 1) {
      const info = lines[i].split(";");
      // skoða ehv skilyrði
      const num = info[0];
      const title = info[1];
      const unit = info[2];
      const sem = info[3];
      const lev = info[4];
      const link = info[5];

      /* if (Number.isNaN(parseInt(10, unit))) {
        unit = "prump";
        sem = "plast";
      }
      */

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
  } else {
    headers = [];
  }

  const major = {
    headers,
    courses,
  };
  return major;
}
