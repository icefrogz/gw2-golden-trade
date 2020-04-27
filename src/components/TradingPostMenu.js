import React, { useEffect, useState, useRef } from "react";
import guildwars2 from "../api/guildwars2";
const TradingPost = () => {
  const apiKey = localStorage.getItem("apiKey");
  const inputTest = useRef(null);
  const [results, setResults] = useState([]);
  async function tradingPostTracker() {
    await guildwars2
      .get("/commerce/transactions/history/sells", {
        params: {
          access_token: apiKey,
        },
      })
      .then((response) => {
        console.log(response.data);
        setResults(response.data);
        // results.map((result) => {
        //   console.log(result.id);
        // });
      });

    return null;
  }

  useEffect(() => {
    if (apiKey.length > 0) {
      tradingPostTracker();
    }
  }, [apiKey]);

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
      </form>
      {results.map((result) => {
        return <div key={result.id}>{result.id}</div>;
      })}
    </div>
  );
};

export default TradingPost;
