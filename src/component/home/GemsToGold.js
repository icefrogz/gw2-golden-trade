import React, { useEffect, useState } from "react";
import guildwars2 from "../../api/guildwars2";

const GemsToGold = () => {
  const [gold, setGold] = useState(0);
  const [gems, setGems] = useState(100);
  const gemsToGold = async (gemsToConvert) => {
    const response = await guildwars2.get("commerce/exchange/gems", {
      params: {
        quantity: gemsToConvert
      }
    });
    console.log(response.data);
    setGold(Math.floor(response.data.quantity / 10000));
  };
  useEffect(() => {
    gemsToGold(gems);
  }, [gems]);

  return (
    <div>
      Gold is : {gold} Gems is: {gems}
    </div>
  );
};

export default GemsToGold;
