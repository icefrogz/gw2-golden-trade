import React from "react";
import guildwars2 from "../api/guildwars2";
import GemsToGold from "./home/GemsToGold";
import GoldToGems from "./home/GoldToGems";

const Home = () => (
  <div className="container">
    <div className="row">
      <GemsToGold />
      <GoldToGems />
    </div>
  </div>
);

export default Home;
