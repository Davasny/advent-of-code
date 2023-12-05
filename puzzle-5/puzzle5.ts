interface IRange {
  destinationStart: number;
  sourceStart: number;
  rangeLength: number;
  destinationEnd: number;
  sourceEnd: number;
}

interface IMapping {
  name: string;
  ranges: IRange[];
}

const getMappings = (lines: string[]): IMapping[] => {
  const mappings: IMapping[] = [];

  let tmpMapping: IMapping = {
    name: "",
    ranges: [],
  };

  for (const line of lines.slice(2)) {
    if (line.includes("map:")) {
      tmpMapping.name = line;
    }

    // destination, source, length
    const numbers = line.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      tmpMapping.ranges.push({
        destinationStart: numbers[0],
        sourceStart: numbers[1],
        rangeLength: numbers[2],
        destinationEnd: numbers[0] + numbers[2],
        sourceEnd: numbers[1] + numbers[2],
      });
    }

    if (line.trim() === "") {
      mappings.push(tmpMapping);
      tmpMapping = {
        name: "",
        ranges: [],
      };
    }
  }

  if (tmpMapping.name !== "") {
    mappings.push(tmpMapping);
  }
  return mappings;
};

const getRange = (mapping: IMapping, source: number): number => {
  for (const range of mapping.ranges) {
    if (source >= range.sourceStart && source <= range.sourceEnd) {
      return range.destinationStart + (source - range.sourceStart);
    }
  }
  // fallback to source as default value
  return source;
};

const getLocationOfSeed = (seed: number, mappings: IMapping[]) => {
  const soil = getRange(mappings[0], seed);
  const fertilizer = getRange(mappings[1], soil);
  const water = getRange(mappings[2], fertilizer);
  const light = getRange(mappings[3], water);
  const temperature = getRange(mappings[4], light);
  const humidity = getRange(mappings[5], temperature);
  const location = getRange(mappings[6], humidity);
  // console.log(`Seed: ${seed}, Soil: ${soil}, Fertilizer: ${fertilizer}, Water: ${water}, Light: ${light}, Temperature: ${temperature}, Humidity: ${humidity}, Location: ${location}`);

  return location;
};

const getMinimalLocationOfSeeds = (
  seeds: number[],
  lines: string[],
): number => {
  const mappings = getMappings(lines);

  const locations: number[] = seeds.map((seed) =>
    getLocationOfSeed(seed, mappings)
  );

  return Math.min(...locations);
};

export const puzzle5partOne = (lines: string[]): number => {
  const seeds = lines[0].match(/\d+/g)?.map(Number);
  if (!seeds) {
    throw new Error("No seeds found");
  }

  return getMinimalLocationOfSeeds(seeds, lines);
};

export const puzzle5partTwo = (lines: string[]): number => {
  const seedsPairs = lines[0].match(/(\d+ \d+)/g);
  if (!seedsPairs) {
    throw new Error("No seeds found");
  }

  const mappings = getMappings(lines);

  let lowestLocation: null | number = null;
  for (const seedPair of seedsPairs) {
    const startSeed = Number(seedPair.split(" ")[0]);
    const seedRange = Number(seedPair.split(" ")[1]);

    console.log(startSeed + seedRange);
    for (let seed = startSeed; seed < startSeed + seedRange; seed++) {
      const seedLocation = getLocationOfSeed(seed, mappings);
      if (!lowestLocation) {
        lowestLocation = seedLocation;
      } else if (seedLocation < lowestLocation) {
        lowestLocation = seedLocation;
      }

      if (lowestLocation === 0) {
        throw new Error("Found location 0");
      }
    }
  }

  return lowestLocation || -1;
};
