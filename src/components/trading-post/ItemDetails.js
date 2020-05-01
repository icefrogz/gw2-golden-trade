import React, { useEffect, useState, useRef } from "react";
import guildwars2 from "../../api/guildwars2";

const ItemDetails = ({ itemId, index, createdAt, purchasedAt }) => {
  const [item, setItem] = useState({});
  async function itemDetailsAllPurpose() {
    const apiKey = localStorage.getItem("apiKey");
    await guildwars2
      .get(`items/${itemId}`, {
        params: {
          access_token: apiKey,
        },
      })
      .then((response) => {
        setItem(response.data);
      });
  }
  useEffect(() => {
    itemDetailsAllPurpose();
  }, [itemId]);
  return (
    <tr>
      <td>{index + 1}</td>
      <td> {item.name}</td>
      <td>
        <img src={item.icon} />
      </td>
      <td>{item.type}</td>
      <td>{item.rarity}</td>
      <td>{createdAt}</td>
      <td>{purchasedAt}</td>
    </tr>
  );
};

export default ItemDetails;
