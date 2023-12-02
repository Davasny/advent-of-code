import { assertEquals } from "https://deno.land/std@0.205.0/assert/assert_equals.ts";
import { puzzle2PartOne, puzzle2PartTwo } from "./puzzle2.ts";

Deno.test("puzzle2", async (t) => {
  await t.step("Test example", async () => {
    assertEquals(
      await puzzle2PartOne(
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      ),
      true,
    );
    assertEquals(
      await puzzle2PartOne(
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      ),
      true,
    );
    assertEquals(
      await puzzle2PartOne(
        "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
      ),
      false,
    );
    assertEquals(
      await puzzle2PartOne(
        "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
      ),
      false,
    );
    assertEquals(
      await puzzle2PartOne(
        "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
      ),
      true,
    );
  });

  await t.step("Test puzzle", async () => {
    const data = await Deno.readTextFile("./puzzle-2/input.txt");
    const lines = data.split("\n");

    let sumValidGameIds = 0;

    for (const line of lines) {
      const trimmedLine = line.trim();

      if (trimmedLine.length === 0) {
        continue;
      }

      const result = await puzzle2PartOne(line);
      const gameId = line.split(":")[0].match(/\d+/g);

      if (result) {
        if (gameId) {
          sumValidGameIds += parseInt(gameId[0]);
        }
      }
    }

    console.log(`Sum 2: ${sumValidGameIds}`);
  });
});

Deno.test("puzzle2 part 2", async (t) => {
  await t.step("Test example", async () => {
    assertEquals(
      await puzzle2PartTwo(
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      ),
      {
        blues: 6,
        red: 4,
        greens: 2,
      },
    );
    assertEquals(
      await puzzle2PartTwo(
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      ),
      {
        blues: 4,
        red: 1,
        greens: 3,
      },
    );
  });

  await t.step("Test puzzle", async () => {
    const data = await Deno.readTextFile("./puzzle-2/input.txt");
    const lines = data.split("\n");

    let sum = 0;

    for (const line of lines) {
      const trimmedLine = line.trim();

      if (trimmedLine.length === 0) {
        continue;
      }

      const result = await puzzle2PartTwo(line);
      const multi = result.blues * result.red * result.greens;
      sum += multi;
    }

    console.log(`Sum 2: ${sum}`);
  });
});
