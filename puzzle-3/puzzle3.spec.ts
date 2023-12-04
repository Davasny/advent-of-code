import { assertEquals } from "https://deno.land/std@0.205.0/assert/assert_equals.ts";
import { puzzle3PartOne, puzzle3PartTwo } from "./puzzle3.ts";

Deno.test("puzzle3", async (t) => {
  await t.step("Test example", () => {
    const result = puzzle3PartOne([
      "467..114..",
      "...*......",
      "..35..633.",
      "......#...",
      "617*......",
      ".....+.58.",
      "..592.....",
      "......755.",
      "...$.*....",
      ".664.598..",
    ]);

    assertEquals(result, 4361);
  });

  await t.step("No pattern", () => {
    assertEquals(
      puzzle3PartOne([
        "..1.....",
        "........",
      ]),
      0,
    );
  });

  await t.step("Line below", () => {
    assertEquals(
      puzzle3PartOne([
        "........",
        "...1....",
        "..*.....",
        "........",
      ]),
      1,
    );

    assertEquals(
      puzzle3PartOne([
        "........",
        "...1....",
        "...*....",
        "........",
      ]),
      1,
    );

    assertEquals(
      puzzle3PartOne([
        "........",
        "...1....",
        "....*...",
        "........",
      ]),
      1,
    );
  });

  await t.step("Line above", () => {
    assertEquals(
      puzzle3PartOne([
        "..*.....",
        "...1....",
        "........",
        "........",
      ]),
      1,
    );

    assertEquals(
      puzzle3PartOne([
        "...*....",
        "...1....",
        "........",
        "........",
      ]),
      1,
    );

    assertEquals(
      puzzle3PartOne([
        "........",
        "....*...",
        "...1....",
        "........",
      ]),
      1,
    );
  });

  await t.step("Same line", () => {
    assertEquals(
      puzzle3PartOne([
        "........",
        "..*6....",
        "........",
      ]),
      6,
    );

    assertEquals(
      puzzle3PartOne([
        "........",
        "...7*...",
        "........",
      ]),
      7,
    );
  });

  await t.step("Number placement", () => {
    assertEquals(
      puzzle3PartOne([
        "........",
        ".....*11",
        "........",
      ]),
      11,
    );

    assertEquals(
      puzzle3PartOne([
        "........",
        "22*......",
        "........",
      ]),
      22,
    );

    assertEquals(
      puzzle3PartOne([
        "........",
        ".....*..",
        "......33",
      ]),
      33,
    );

    assertEquals(
      puzzle3PartOne([
        "44......",
        "..*.....",
        "........",
      ]),
      44,
    );

    assertEquals(
      puzzle3PartOne([
        "......55",
        ".....*..",
        "........",
      ]),
      55,
    );

    assertEquals(
      puzzle3PartOne([
        "........",
        "..*.....",
        "66......",
      ]),
      66,
    );
  });

  await t.step("Check numbers overlapping", () => {
    assertEquals(
      puzzle3PartOne([
        "......1.",
        "......1.",
        "........",
      ]),
      0,
    );
  });

  await t.step("Input data", async () => {
    const data = await Deno.readTextFile("./puzzle-3/input.txt");
    const lines = data.split("\n");

    const result = await puzzle3PartOne(lines);

    console.log(`Sum 3: ${result}`);
  });
});

Deno.test("puzzle3  part two", async (t) => {
  await t.step("Test example", () => {
    assertEquals(
      puzzle3PartTwo([
        "467..114..",
        "...*......",
        "..35..633.",
        "......#...",
        "617*......",
        ".....+.58.",
        "..592.....",
        "......755.",
        "...$.*....",
        ".664.598..",
      ]),
      467835,
    );
  });

  await t.step("Test inline", () => {
    assertEquals(
      puzzle3PartTwo([
        ".2.3*2..",
      ]),
      6,
    );
  });

  await t.step("Input data", async () => {
    const data = await Deno.readTextFile("./puzzle-3/input.txt");
    const lines = data.split("\n");

    const result = await puzzle3PartTwo(lines);

    console.log(`Sum 3 part 2: ${result}`);
  });
});
