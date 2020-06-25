import React from "react";
const coinsToGold = (coins) => {
  const gold = Math.floor(coins / 10000);
  const silver = Math.floor((coins % 10000) / 100);
  const copper = Math.floor(coins % 100);

  return [gold, silver, copper];
};

export const goldConverter = (coinsToConvert) => {
  const [gold, silver, copper] = coinsToGold(coinsToConvert);

  if (gold > 1) {
    return (
      <span>
        {gold}
        <img
          className="item-img"
          src="https://render.guildwars2.com/file/090A980A96D39FD36FBB004903644C6DBEFB1FFB/156904.png"
        />
        {silver}
        <img
          className="item-img"
          src="https://render.guildwars2.com/file/E5A2197D78ECE4AE0349C8B3710D033D22DB0DA6/156907.png"
        />
        {copper}
        <img
          className="item-img"
          src="https://render.guildwars2.com/file/6CF8F96A3299CFC75D5CC90617C3C70331A1EF0E/156902.png"
        />
      </span>
    );
  } else if (silver > 1) {
    return (
      <span>
        {silver}
        <img
          className="item-img"
          src="https://render.guildwars2.com/file/E5A2197D78ECE4AE0349C8B3710D033D22DB0DA6/156907.png"
        />
        {copper}
        <img
          className="item-img"
          src="https://render.guildwars2.com/file/6CF8F96A3299CFC75D5CC90617C3C70331A1EF0E/156902.png"
        />
      </span>
    );
  }

  return (
    <span>
      {copper}
      <img
        className="item-img"
        src="https://render.guildwars2.com/file/6CF8F96A3299CFC75D5CC90617C3C70331A1EF0E/156902.png"
      />
    </span>
  );
};
