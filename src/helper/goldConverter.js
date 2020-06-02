const coinsToGold = (coins) => {
  const gold = Math.floor(coins / 10000);
  const silver = Math.floor((coins % 10000) / 100);
  const copper = Math.floor(coins % 100);

  return [gold, silver, copper];
};

export const goldConverter = (coinsToConvert) => {
  const [gold, silver, copper] = coinsToGold(coinsToConvert);

  if (gold > 1) {
    return `${gold}g ${silver}s ${copper}c`;
  } else if (silver > 1) {
    return `${silver}s ${copper}c`;
  }

  return `${copper}c`;
};
