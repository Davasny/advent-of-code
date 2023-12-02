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

// fully inspired by reddit
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

export const puzzle1PartTwoWithRegex = (line: string): string => {
  const mapping: Record<string, string> = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  const regexString = Object.keys(mapping).join("|");
  const regex = new RegExp(`(?=([0-9]|${regexString}))`, "g");
  const matches = Array.from(line.matchAll(regex));

  const numbers: string[] = [];
  const firstNumber = matches[0][1];
  const lastNumber = matches[matches.length - 1][1];

  if (firstNumber.match(/[0-9]/)) {
    numbers.push(firstNumber);
  } else {
    numbers.push(mapping[firstNumber]);
  }

  if (lastNumber.match(/[0-9]/)) {
    numbers.push(lastNumber);
  } else {
    numbers.push(mapping[lastNumber]);
  }

  return numbers.join("");
};
