import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import guildwars2 from "../../api/guildwars2";
import startCase from "lodash/startCase";
import moment from "moment";
import { itemDetails } from "../../helper/itemDetails";
const ItemDetails = ({ itemId, index, createdAt, purchasedAt, priceAt }) => {
  const [item, setItem] = useState({});
  const toStringConvert = new Date();
  const apiKey = useSelector((state) => state.apiKey.apiKey);
  useEffect(() => {
    itemDetails(apiKey, itemId).then((response) => {
      setItem(response);
    });
  }, [itemId]);
  return (
    <tr>
      <td>{index + 1}</td>
      <td> {item.name}</td>
      <td>
        <img alt="icon" src={item.icon} />
      </td>
      <td>{startCase(item.type)}</td>
      <td>{item.rarity}</td>
      <td>{moment(createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
      <td>{toStringConvert.toTimeString(purchasedAt)}</td>
      <td>{priceAt}</td>
    </tr>
  );
};

export default ItemDetails;
