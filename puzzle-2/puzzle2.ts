export const puzzle2PartOne = (line: string): boolean => {
  const MAX_BLUE = 14;
  const MAX_RED = 12;
  const MAX_GREEN = 13;

  let blues = 0;
  let reds = 0;
  let greens = 0;

  for (const gameSet of line.split(":")[1].split(";")) {
    const green = gameSet.match(/(\d+).green/g);
    const blue = gameSet.match(/(\d+).blue/g);
    const red = gameSet.match(/(\d+).red/g);

    if (green) {
      const value = parseInt(green[0]);
      if (value > greens) greens = value;
    }

    if (blue) {
      const value = parseInt(blue[0]);
      if (value > blues) blues = value;
    }

    if (red) {
      const value = parseInt(red[0]);
      if (value > reds) reds = value;
    }
  }

  return Boolean(blues <= MAX_BLUE && reds <= MAX_RED && greens <= MAX_GREEN);
};

export const puzzle2PartTwo = (
  line: string,
): { blues: number; red: number; greens: number } => {
  const blues = [];
  const reds = [];
  const greens = [];

  for (const gameSet of line.split(":")[1].split(";")) {
    const green = gameSet.match(/(\d+).green/g);
    const blue = gameSet.match(/(\d+).blue/g);
    const red = gameSet.match(/(\d+).red/g);

    if (green) {
      const value = parseInt(green[0]);
      greens.push(value);
    }

    if (blue) {
      const value = parseInt(blue[0]);
      blues.push(value);
    }

    if (red) {
      const value = parseInt(red[0]);
      reds.push(value);
    }
  }

  const minBlues = Math.max(...blues);
  const minReds = Math.max(...reds);
  const minGreens = Math.max(...greens);

  return {
    blues: minBlues,
    red: minReds,
    greens: minGreens,
  };
};
