interface IFoundNumber {
  line: number;
  column: number;
  value: string;
}

const isSymbol = (char: string): boolean => {
  if (!char) {
    return false;
  }

  if (char === "." || char.match(/\d/)) {
    return false;
  }

  return true;
};

const isPartNumber = (lines: string[], foundNumber: IFoundNumber): boolean => {
  const charBeforeIsValid = isSymbol(
    lines[foundNumber.line][foundNumber.column - 1],
  );
  // console.log("charBeforeIsValid", charBeforeIsValid);

  const charAfterIsValid = isSymbol(
    lines[foundNumber.line][foundNumber.column + foundNumber.value.length],
  );
  // console.log("charAfterIsValid", charAfterIsValid);

  let anyCharAboveIsValid = false;
  if (foundNumber.line > 0) {
    // look at line above
    const lineAbove = lines[foundNumber.line - 1];
    // check also diagonal
    const charsAbove = Array.from(
      lineAbove.slice(
        Math.max(0, foundNumber.column - 1),
        Math.min(
          lineAbove.length,
          foundNumber.column + foundNumber.value.length + 1,
        ),
      ),
    ).filter((char) => isSymbol(char));

    if (charsAbove.length > 0) {
      anyCharAboveIsValid = true;
    }
  }
  // console.log("anyCharAboveIsValid", anyCharAboveIsValid);

  let anyCharBelowIsValid = false;
  if (foundNumber.line < lines.length - 1) {
    // look at line below
    const lineBelow = lines[foundNumber.line + 1];
    // check also diagonal
    const charsBelow = Array.from(
      lineBelow.slice(
        Math.max(0, foundNumber.column - 1),
        Math.min(
          lineBelow.length,
          foundNumber.column + foundNumber.value.length + 1,
        ),
      ),
    );

    if (charsBelow.filter((char) => isSymbol(char)).length > 0) {
      anyCharBelowIsValid = true;
    }
  }
  // console.log("anyCharBelowIsValid", anyCharBelowIsValid);

  return charBeforeIsValid || charAfterIsValid || anyCharAboveIsValid ||
    anyCharBelowIsValid;
};

const extractNumbers = (lines: string[]): IFoundNumber[] => {
  const numbers: IFoundNumber[] = [];

  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const line = lines[lineIdx];
    let tmpNumber = "";

    for (let charIdx = 0; charIdx < line.length; charIdx++) {
      const char = line[charIdx];

      if (char.match(/\d/)) {
        // we have digit
        tmpNumber = tmpNumber + char;
      } else if (tmpNumber !== "") {
        // save found number
        numbers.push({
          line: lineIdx,
          column: charIdx - tmpNumber.length, // let's use first char position
          value: tmpNumber,
        });
        tmpNumber = "";
      }
    }

    if (tmpNumber !== "") {
      // save found number it was last char
      numbers.push({
        line: lineIdx,
        column: line.length - tmpNumber.length, // let's use first char position
        value: tmpNumber,
      });
      tmpNumber = "";
    }
  }

  return numbers;
};

export const puzzle3PartOne = (lines: string[]): number => {
  const numbers = extractNumbers(lines);

  const validNumbers = numbers.filter((number) => isPartNumber(lines, number))
    .map((number) => parseInt(number.value));
  // console.log(validNumbers);
  return validNumbers.reduce((a, b) => a + b, 0);
};

export const puzzle3PartTwo = (lines: string[]): number => {
  const numbers = extractNumbers(lines);
  let sum = 0;

  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    for (let charIdx = 0; charIdx < lines[lineIdx].length; charIdx++) {
      const char = lines[lineIdx][charIdx];

      if (char === "*") {
        const foundNumbers = [];

        const numberBefore = numbers.filter((number) =>
          number.line === lineIdx &&
          number.column + number.value.length === charIdx
        ).map((number) => parseInt(number.value));
        foundNumbers.push(...numberBefore);

        const numberAfter = numbers.filter((number) =>
          number.line === lineIdx && number.column === charIdx + 1
        ).map((number) => parseInt(number.value));
        foundNumbers.push(...numberAfter);

        const numbersAbove = numbers
          .filter((number) => number.line === lineIdx - 1)
          .filter((number) =>
            number.column + number.value.length === charIdx ||
            number.column === charIdx + 1 ||
            number.column === charIdx ||
            (number.column < charIdx &&
              charIdx < number.column + number.value.length)
          )
          .map((number) => parseInt(number.value));
        foundNumbers.push(...numbersAbove);

        const numbersBelow = numbers
          .filter((number) => number.line === lineIdx + 1)
          .filter((number) =>
            number.column + number.value.length === charIdx ||
            number.column === charIdx + 1 ||
            number.column === charIdx ||
            (number.column < charIdx &&
              charIdx < number.column + number.value.length)
          )
          .map((number) => parseInt(number.value));
        foundNumbers.push(...numbersBelow);

        if (foundNumbers.length === 2) {
          sum = sum + foundNumbers.reduce((a, b) => a * b, 1);
        }
      }
    }
  }

  return sum;
};
