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
        <i className="gw2-icon gw2-icon-gold" />
        {silver}
        <i className="gw2-icon gw2-icon-silver" />
        {copper}
        <i className="gw2-icon gw2-icon-copper" />
      </span>
    );
  } else if (silver > 1) {
    return (
      <span>
        {silver}
        <i className="gw2-icon gw2-icon-silver" />
        {copper}
        <i className="gw2-icon gw2-icon-copper" />
      </span>
    );
  }

  return (
    <span>
      {copper}
      <i className="gw2-icon gw2-icon-copper" />
    </span>
  );
};

export const goldConverterString = (coinsToConvert) => {
  const [gold, silver, copper] = coinsToGold(coinsToConvert);

  if (gold > 1) {
    return (
      "<span>" +
      gold +
      '<i class="gw2-icon gw2-icon-gold"></i>' +
      silver +
      '<i class="gw2-icon gw2-icon-silver"></i>' +
      copper +
      '<i class="gw2-icon gw2-icon-copper"></i>' +
      "</span>"
    );
  } else if (silver > 1) {
    return (
      "<span>" +
      silver +
      '<i class="gw2-icon gw2-icon-silver"></i>' +
      copper +
      '<i class="gw2-icon gw2-icon-copper"></i>' +
      "</span>"
    );
  }

  return (
    "<span>" + copper + '<i class="gw2-icon gw2-icon-copper"></i>' + "</span>"
  );
};
