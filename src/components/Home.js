import React from "react";
import GemsToGold from "./home/GemsToGold";
import GoldToGems from "./home/GoldToGems";
import TradingPostCard from "./home/TradingPostCard";
const Home = () => (
  <div className="container">
    <div className="row">
      <GemsToGold />
      <GoldToGems />
      <TradingPostCard />
    </div>
  </div>
);

export default Home;
