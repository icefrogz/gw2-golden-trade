export const goldConverter = (coinsToConvert) => {
  const gold = Math.floor(coinsToConvert / 10000);
  const silver = Math.floor((coinsToConvert % 10000) / 100);
  const copper = Math.floor(coinsToConvert % 100);
  console.log(gold);
  return `${gold}g ${silver}s ${copper}c`;
};
