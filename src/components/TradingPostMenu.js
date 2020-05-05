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
      <ul className="nav nav-tabs mt-1" role="tablist">
        <li className="nav-item" id="sell-tab">
          <a className="nav-link active" data-toggle="tab" href="#sell">
            Sell
          </a>
        </li>
        <li className="nav-item" id="buy-tab">
          <a className="nav-link " data-toggle="tab" href="#buy" role="tab">
            Buy
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tab-content" role="tab">
        <div
          className="tab-pane fade show active"
          id="sell"
          role="tabpanel"
          aria-labelledby="sell-tab"
        >
          <SellHistory />
        </div>
        <div
          className="tab-pane fade"
          id="buy"
          role="tabpanel"
          aria-labelledby="buy-tab"
        >
          <BuyHistory />
        </div>
      </div>
    </div>
  );
};

export default TradingPost;
