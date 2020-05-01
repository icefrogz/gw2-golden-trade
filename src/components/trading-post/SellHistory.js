import React, { useState, useEffect } from "react";
import guildwars2 from "../../api/guildwars2";
import ItemDetails from "./ItemDetails";
const SellHistory = () => {
  const [results, setResults] = useState([]);
  const apiKey = localStorage.getItem("apiKey");
  async function tradingPostTracker() {
    await guildwars2
      .get("/commerce/transactions/history/sells", {
        params: {
          access_token: apiKey,
        },
      })
      .then((response) => {
        setResults(response.data);
      });

    return null;
  }

  useEffect(() => {
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
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default SellHistory;
