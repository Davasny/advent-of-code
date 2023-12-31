import { assertEquals } from "https://deno.land/std@0.205.0/assert/assert_equals.ts";
import { puzzle4partOne, puzzle4PartTwo } from "./puzzle4.ts";

Deno.test("puzzle4 part one", async (t) => {
  await t.step("Test example", () => {
    assertEquals(
      puzzle4partOne("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"),
      8,
    );
    assertEquals(
      puzzle4partOne("Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19"),
      2,
    );
    assertEquals(
      puzzle4partOne("Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1"),
      2,
    );
    assertEquals(
      puzzle4partOne("Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83"),
      1,
    );
    assertEquals(
      puzzle4partOne("Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36"),
      0,
    );
    assertEquals(
      puzzle4partOne("Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11"),
      0,
    );
  });

  await t.step("Input data", async () => {
    const data = await Deno.readTextFile("./puzzle-4/input.txt");
    const lines = data.split("\n");

    let sum = 0;
    for (const line of lines) {
      sum += puzzle4partOne(line);
    }

    console.log(`Sum 4 part 1: ${sum}`);
  });
});

Deno.test("puzzle4 part two", async (t) => {
  await t.step("Test example", () => {
    const result = puzzle4PartTwo(
      "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53\n" +
        "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19\n" +
        "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1\n" +
        "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83\n" +
        "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36\n" +
        "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
    );

    assertEquals(result, 30);
  });

  await t.step("Test input data", async () => {
    const data = await Deno.readTextFile("./puzzle-4/input.txt");

    const sum = puzzle4PartTwo(data);

    console.log(`Sum 4 part 2: ${sum}`);
  });
});
