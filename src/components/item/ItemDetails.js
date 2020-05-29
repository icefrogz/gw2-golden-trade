import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemDetails } from "../../helper/itemDetails";
import { tradingPost } from "../../helper/tradingPost";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [price, setPrice] = useState({});
  useEffect(() => {
    itemDetails(id).then((response) => {
      console.log(response);
      setItem(response);
    });

    tradingPost(id).then((response) => {
      console.log(response);
      setPrice(response);
    });
  }, [id]);

  return (
    <div>
      {item.name}
      <img src={item.icon}></img>
      {item.description}
      {item.type}
      {item.flags && item.flags.indexOf("AccountBound") > -1 && "Account Bound"}
      {price.buys && price.buys.unit_price}
      {price.selss && price.sells.unit_price}
    </div>
  );
};

export default ItemDetails;
