import React from "react";
import GemsToGold from "./home/GemsToGold";
import GoldToGems from "./home/GoldToGems";
import TradingPostCard from "./home/TradingPostCard";
import ItemSearch from "./item/ItemSearch";
const Home = () => (
  <div className="container">
    <div className="row">
      <GemsToGold />
      <GoldToGems />
      <TradingPostCard />
    </div>
    <div className="row">
      <ItemSearch />
    </div>
  </div>
);

export default Home;
