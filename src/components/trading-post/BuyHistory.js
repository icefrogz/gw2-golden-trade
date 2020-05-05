import React, { useState, useEffect } from "react";
import guildwars2 from "../../api/guildwars2";
import ItemDetails from "./ItemDetails";
const BuyHistory = () => {
  const [results, setResults] = useState([]);
  const apiKey = localStorage.getItem("apiKey");

  useEffect(() => {
    async function tradingPostTracker() {
      await guildwars2
        .get("/commerce/transactions/history/buys", {
          params: {
            access_token: apiKey,
          },
        })
        .then((response) => {
          setResults(response.data);
        });

      return null;
    }
    if (apiKey.length > 0) {
      tradingPostTracker();
    }
  }, [apiKey]);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item Name</th>
          <th scope="col"></th>
          <th scope="col">Type</th>
          <th scope="col">Rarity</th>
          <th scope="col">Created At</th>
          <th scope="col">Purchased At</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => {
          return (
            <ItemDetails
              key={result.id}
              index={index}
              itemId={result.item_id}
              createdAt={result.created}
              purchasedAt={result.purchased}
              priceAt={result.price}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default BuyHistory;
