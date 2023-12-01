import { assertEquals } from "https://deno.land/std@0.205.0/assert/mod.ts";
import { puzzle1PartOne, puzzle1PartTwo } from "./puzzle1.ts";

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
    assertEquals(await puzzle1PartTwo("one"), "11");
    assertEquals(await puzzle1PartTwo("twone"), "21");
    assertEquals(await puzzle1PartTwo("two"), "22");
    assertEquals(await puzzle1PartTwo("three"), "33");
    assertEquals(await puzzle1PartTwo("four"), "44");
    assertEquals(await puzzle1PartTwo("five"), "55");
    assertEquals(await puzzle1PartTwo("six"), "66");
    assertEquals(await puzzle1PartTwo("seven"), "77");
    assertEquals(await puzzle1PartTwo("eight"), "88");
    assertEquals(await puzzle1PartTwo("nine"), "99");

    assertEquals(await puzzle1PartTwo("1"), "11");
    assertEquals(await puzzle1PartTwo("2"), "22");
    assertEquals(await puzzle1PartTwo("3"), "33");
    assertEquals(await puzzle1PartTwo("4"), "44");
    assertEquals(await puzzle1PartTwo("5"), "55");
    assertEquals(await puzzle1PartTwo("6"), "66");
    assertEquals(await puzzle1PartTwo("7"), "77");
    assertEquals(await puzzle1PartTwo("8"), "88");
    assertEquals(await puzzle1PartTwo("9"), "99");

    assertEquals(await puzzle1PartTwo("two1nine"), "29");
    assertEquals(await puzzle1PartTwo("eightwothree"), "83");
    assertEquals(await puzzle1PartTwo("abcone2threexyz"), "13");
    assertEquals(await puzzle1PartTwo("xtwone3four"), "24");
    assertEquals(await puzzle1PartTwo("4nineeightseven2"), "42");
    assertEquals(await puzzle1PartTwo("zoneight234"), "14");
    assertEquals(await puzzle1PartTwo("7pqrstsixteen"), "76");

    assertEquals(
      await puzzle1PartTwo("jjhxddmg5mqxqbgfivextlcpnvtwothreetwonerzk"),
      "51",
    );
    assertEquals(await puzzle1PartTwo("2nineninesixsixfive5"), "25");
    assertEquals(await puzzle1PartTwo("four9four"), "44");
    assertEquals(await puzzle1PartTwo("oneoneoneoneone"), "11");
  });

  await t.step("Test file", async () => {
    const data = await Deno.readTextFile("./puzzle-1/input.txt");
    const lines = data.split("\n");

    const numbers2: number[] = [];
    for (const line of lines) {
      const trimmedLine = line.trim();

      if (trimmedLine.length === 0) {
        continue;
      }

      const result = puzzle1PartTwo(line);
      numbers2.push(parseInt(result));
      console.log(line, result);
    }

    console.log(numbers2.length);

    // sum all numbers2
    const sum2 = numbers2.reduce((a, b) => a + b, 0);
    console.log(`Sum 2: ${sum2}`);
  });
});
