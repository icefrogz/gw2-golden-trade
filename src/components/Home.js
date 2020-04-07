import React from "react";
import GemsToGold from "./home/GemsToGold";
import GoldToGems from "./home/GoldToGems";
import TradingPost from "./home/TradingPost";
const Home = () => (
  <div className="container">
    <div className="row">
      <GemsToGold />
      <GoldToGems />
      <TradingPost />
    </div>
  </div>
);

export default Home;
