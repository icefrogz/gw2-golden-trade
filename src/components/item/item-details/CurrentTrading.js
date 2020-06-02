import React, { useEffect, useState } from "react";
import { tradingPost } from "../../../helper/tradingPost";
import { goldConverter } from "../../../helper/goldConverter";

const CurrentTrading = ({ itemId }) => {
  const [price, setPrice] = useState({});

  useEffect(() => {
    tradingPost(itemId).then((response) => {
      setPrice(response);
    });
  }, [itemId]);

  return (
    <div className='card'>
      <div className='card-body'>
        <h1>Current Buy</h1>
        {price.buys && goldConverter(price.buys.unit_price)}
        <h1>Current Sell</h1>
        {price.sells && goldConverter(price.sells.unit_price)}
      </div>
    </div>

  )
}

export default CurrentTrading;