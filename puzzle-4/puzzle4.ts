const processCard = (card: string): number[] => {
  const winningNumbers = card
    .split("|")[0]
    .split(":")[1]
    .match(/\d+/g)
    ?.map((n) => parseInt(n));

  const elfNumbers = card
    .split("|")[1]
    .trim()
    .match(/\d+/g)
    ?.map((n) => parseInt(n));

  const matchedNumbers: number[] = [];

  elfNumbers?.forEach((elfNum) => {
    if (winningNumbers?.includes(elfNum)) {
      matchedNumbers.push(elfNum);
    }
  });

  return matchedNumbers;
};

export const puzzle4partOne = (card: string): number => {
  const numbers = processCard(card);

  let points = 0;
  numbers.forEach(() => {
    if (points === 0) {
      points = 1;
    } else {
      points = points * 2;
    }
  });

  return points;
};

interface IParsedCard {
  id: number;
  matchedNumbers: number[];
}

export const puzzle4PartTwo = (cards: string): number => {
  const parsedCards: IParsedCard[] = [];

  cards.split("\n").forEach((card) => {
    let matchedId: RegExpMatchArray | string | number =
      card.split("|")[0]?.match(/\d+/g) || 0;
    if (Array.isArray(matchedId)) {
      matchedId = matchedId[0];
    }

    if (typeof matchedId === "string") {
      matchedId = parseInt(matchedId);
    }

    const matchedNumbers = processCard(card);
    parsedCards.push({
      id: matchedId,
      matchedNumbers,
    });
  });

  for (const card of parsedCards) {
    card.matchedNumbers.forEach((_, index) => {
      const newCard = parsedCards.find((c) => c.id === card.id + index + 1);

      if (newCard) {
        parsedCards.push(newCard);
      } else {
        console.log("Not found", card.id + index + 1);
      }
    });
  }

  return parsedCards.length;
};
