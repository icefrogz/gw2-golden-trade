import React, { useEffect, useState, useRef } from "react";
import guildwars2 from "../api/guildwars2";
const TradingPostMenu = () => {
  const apiKey = localStorage.getItem("apiKey");
  const inputTest = useRef(null);

  async function TradingPostTracker() {
    return await guildwars2
      .get("/commerce/transactions", {
        params: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .then((response) => {
        console.log(Object.values(response));
      });
  }

  // Store data
  function storeData() {
    var someData = inputTest.current.value;
    localStorage.setItem("apiKey", someData);
  }

  return (
    <div className="container">
      <form onSubmit={storeData}>
        <div className="form-group">
          <label>Insert Api Key</label>
          <input
            ref={inputTest}
            type="text"
            className="form-control"
            id="tradingPostInput"
            placeholder="Api Key"
            defaultValue={apiKey}
          />
        </div>
        <input className="btn-dark btn" type="submit" value="Submit" />
        {TradingPostTracker()}
      </form>
    </div>
  );
};

export default TradingPostMenu;
