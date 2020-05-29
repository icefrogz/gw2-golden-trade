import React, { useEffect, useState } from "react";
import guildwars2 from "../../api/guildwars2";
import startCase from "lodash/startCase";
import moment from "moment";
const ItemDetails = ({ itemId, index, createdAt, purchasedAt, priceAt }) => {
  const [item, setItem] = useState({});
  const toStringConvert = new Date();

  useEffect(() => {
    function itemDetailsAllPurpose() {
      const apiKey = localStorage.getItem("apiKey");

      guildwars2
        .get(`items/${itemId}`, {
          params: {
            access_token: apiKey,
          },
        })
        .then((response) => {
          setItem(response.data);
        });
    }
    itemDetailsAllPurpose();
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
