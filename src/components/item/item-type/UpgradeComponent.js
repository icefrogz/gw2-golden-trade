import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemDetails } from "../../../helper/itemDetails";
import { tradingPost } from "../../../helper/tradingPost";
import { itemStats } from "../../../helper/itemStats";
import { goldConverter } from "../../../helper/goldConverter";
const UpgradeComponent = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [price, setPrice] = useState({});
  const [itemStatus, setItemStats] = useState({});
  useEffect(() => {
    itemDetails(id).then((response) => {
      console.log(response.details.infix_upgrade.id);
      setItem(response);
    });
  }, [id]);

  useEffect(() => {
    if (item.flags && item.flags.indexOf("AccountBound") === -1) {
      tradingPost(item.id).then((response) => {
        setPrice(response);
      });
    }
    if (item.details) {
      itemStats(item.details.infix_upgrade.id).then((response) => {
        setItemStats(response);
      });
    }
  }, [item]);

  return (
    <div>
      <div>
        <img src={item.icon}></img>
        <h1>{item.name}</h1>
      </div>

      <div>{item.description}</div>
      {item.type}
      {item.rarity}
      {itemStatus.name}
      {item.flags && item.flags.indexOf("AccountBound") > -1 && "Account Bound"}
      <h1>Current Buy</h1>
      {price.buys && goldConverter(price.buys.unit_price)}
      <h1>Current Sell</h1>
      {price.sells && goldConverter(price.sells.unit_price)}
    </div>
  );
};

export default UpgradeComponent;
