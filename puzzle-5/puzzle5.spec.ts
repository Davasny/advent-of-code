import { assertEquals } from "https://deno.land/std@0.205.0/assert/assert_equals.ts";
import { puzzle5partOne, puzzle5partTwo } from "./puzzle5.ts";

Deno.test("puzzle5 part one", async (t) => {
  await t.step("Test example", () => {
    const result = puzzle5partOne(
      [
        "seeds: 79 14 55 13",
        "",
        "seed-to-soil map:",
        "50 98 2",
        "52 50 48",
        "",
        "soil-to-fertilizer map:",
        "0 15 37",
        "37 52 2",
        "39 0 15",
        "",
        "fertilizer-to-water map:",
        "49 53 8",
        "0 11 42",
        "42 0 7",
        "57 7 4",
        "",
        "water-to-light map:",
        "88 18 7",
        "18 25 70",
        "",
        "light-to-temperature map:",
        "45 77 23",
        "81 45 19",
        "68 64 13",
        "",
        "temperature-to-humidity map:",
        "0 69 1",
        "1 0 69",
        "",
        "humidity-to-location map:",
        "60 56 37",
        "56 93 4",
      ],
    );

    assertEquals(result, 35);
  });

  await t.step("Test input data", async () => {
    const data = await Deno.readTextFile("./puzzle-5/input.txt");

    const result = puzzle5partOne(data.split("\n"));

    console.log(`Result puzzle 5 part 1: ${result}`);
  });
});

Deno.test("puzzle5 part two", async (t) => {
  await t.step("Test example", () => {
    const result = puzzle5partTwo(
      [
        "seeds: 79 14 55 13",
        "",
        "seed-to-soil map:",
        "50 98 2",
        "52 50 48",
        "",
        "soil-to-fertilizer map:",
        "0 15 37",
        "37 52 2",
        "39 0 15",
        "",
        "fertilizer-to-water map:",
        "49 53 8",
        "0 11 42",
        "42 0 7",
        "57 7 4",
        "",
        "water-to-light map:",
        "88 18 7",
        "18 25 70",
        "",
        "light-to-temperature map:",
        "45 77 23",
        "81 45 19",
        "68 64 13",
        "",
        "temperature-to-humidity map:",
        "0 69 1",
        "1 0 69",
        "",
        "humidity-to-location map:",
        "60 56 37",
        "56 93 4",
      ],
    );

    assertEquals(result, 46);
  });

  await t.step("Test input data", async () => {
    const data = await Deno.readTextFile("./puzzle-5/input.txt");

    const result = puzzle5partTwo(data.split("\n"));

    console.log(`Result puzzle 5 part 2: ${result}`);
  });
});
