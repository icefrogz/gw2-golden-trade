import React, { useRef } from "react";
import SellHistory from "./trading-post/SellHistory";
import BuyHistory from "./trading-post/BuyHistory";
const TradingPost = () => {
  const apiKey = localStorage.getItem("apiKey");
  const inputTest = useRef(null);

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
      <ul className="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Active
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>
      <SellHistory />
    </div>
  );
};

export default TradingPost;
