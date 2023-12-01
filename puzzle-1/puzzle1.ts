export const puzzle1PartOne = (line: string): string => {
  const regex = new RegExp(/\d/g);
  const matches = line.match(regex);

  const numbers = [];

  if (!matches) {
    throw Error(`No numbers found in line "${line}"`);
  }

  if (matches.length >= 1) {
    numbers.push(matches[0]);

    if (matches.length === 1) {
      numbers.push(matches[0]);
    } else {
      numbers.push(matches[matches.length - 1]);
    }
  }

  return numbers.join("");
};

export const puzzle1PartTwo = (line: string): string => {
  const line2 = line
    .replaceAll("one", "one1one")
    .replaceAll("two", "two2two")
    .replaceAll("three", "three3three")
    .replaceAll("four", "four4four")
    .replaceAll("five", "five5five")
    .replaceAll("six", "six6six")
    .replaceAll("seven", "seven7seven")
    .replaceAll("eight", "eight8eight")
    .replaceAll("nine", "nine9nine");

  console.log(line2);

  const regex = new RegExp(/\d/g);
  const matches = Array.from(line2.matchAll(regex));

  const numbers: string[] = [];

  if (!matches) {
    throw Error(`No numbers found in line "${line2}"`);
  }

  if (matches.length >= 1) {
    const firstMatch = matches[0][0];
    numbers.push(firstMatch);

    const lastMatch = matches[matches.length - 1][0];
    numbers.push(lastMatch);
  }

  return numbers.join("");
};
