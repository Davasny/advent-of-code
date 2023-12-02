import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { puzzle1PartOne, puzzle1PartTwoWithRegex } from "./puzzle1.ts";

Deno.test("puzzle1", async (t) => {
  await t.step("Test example", async () => {
    assertEquals(await puzzle1PartOne("1abcd2"), "12");
    assertEquals(await puzzle1PartOne("pqr3stu8vwx"), "38");
    assertEquals(await puzzle1PartOne("a1b2c3d4e5f"), "15");
    assertEquals(await puzzle1PartOne("treb7uchet"), "77");
  });

  await t.step("Test file", async () => {
    const data = await Deno.readTextFile("./puzzle-1/input.txt");
    const lines = data.split("\n");

    const numbers: number[] = [];

    for (const line of lines) {
      const trimmedLine = line.trim();

      if (trimmedLine.length === 0) {
        continue;
      }

      const result = await puzzle1PartOne(line);
      numbers.push(parseInt(result));
    }

    // sum all numbers
    const sum = numbers.reduce((a, b) => a + b, 0);
    console.log(`Sum 1: ${sum}`);
  });
});

Deno.test("puzzle2", async (t) => {
  await t.step("Test example", async () => {
    assertEquals(await puzzle1PartTwoWithRegex("one"), "11");
    assertEquals(await puzzle1PartTwoWithRegex("twone"), "21");
    assertEquals(await puzzle1PartTwoWithRegex("two"), "22");
    assertEquals(await puzzle1PartTwoWithRegex("three"), "33");
    assertEquals(await puzzle1PartTwoWithRegex("four"), "44");
    assertEquals(await puzzle1PartTwoWithRegex("five"), "55");
    assertEquals(await puzzle1PartTwoWithRegex("six"), "66");
    assertEquals(await puzzle1PartTwoWithRegex("seven"), "77");
    assertEquals(await puzzle1PartTwoWithRegex("eight"), "88");
    assertEquals(await puzzle1PartTwoWithRegex("nine"), "99");

    assertEquals(await puzzle1PartTwoWithRegex("1"), "11");
    assertEquals(await puzzle1PartTwoWithRegex("2"), "22");
    assertEquals(await puzzle1PartTwoWithRegex("3"), "33");
    assertEquals(await puzzle1PartTwoWithRegex("4"), "44");
    assertEquals(await puzzle1PartTwoWithRegex("5"), "55");
    assertEquals(await puzzle1PartTwoWithRegex("6"), "66");
    assertEquals(await puzzle1PartTwoWithRegex("7"), "77");
    assertEquals(await puzzle1PartTwoWithRegex("8"), "88");
    assertEquals(await puzzle1PartTwoWithRegex("9"), "99");

    assertEquals(await puzzle1PartTwoWithRegex("two1nine"), "29");
    assertEquals(await puzzle1PartTwoWithRegex("eightwothree"), "83");
    assertEquals(await puzzle1PartTwoWithRegex("abcone2threexyz"), "13");
    assertEquals(await puzzle1PartTwoWithRegex("xtwone3four"), "24");
    assertEquals(await puzzle1PartTwoWithRegex("4nineeightseven2"), "42");
    assertEquals(await puzzle1PartTwoWithRegex("zoneight234"), "14");
    assertEquals(await puzzle1PartTwoWithRegex("7pqrstsixteen"), "76");

    assertEquals(
      await puzzle1PartTwoWithRegex(
        "jjhxddmg5mqxqbgfivextlcpnvtwothreetwonerzk",
      ),
      "51",
    );
    assertEquals(await puzzle1PartTwoWithRegex("2nineninesixsixfive5"), "25");
    assertEquals(await puzzle1PartTwoWithRegex("four9four"), "44");
    assertEquals(await puzzle1PartTwoWithRegex("oneoneoneoneone"), "11");
  });

  await t.step("Test file", async () => {
    const data = await Deno.readTextFile("./puzzle-1/input.txt");
    const lines = data.split("\n");

    const numbers: number[] = [];
    for (const line of lines) {
      const trimmedLine = line.trim();

      if (trimmedLine.length === 0) {
        continue;
      }

      const result = puzzle1PartTwoWithRegex(line);
      numbers.push(parseInt(result));
    }

    // sum all numbers
    const sum2 = numbers.reduce((a, b) => a + b, 0);
    console.log(`Sum 2: ${sum2}`);
  });
});
