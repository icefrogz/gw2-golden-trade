import React, { useEffect, useState } from "react";
import guildwars2 from "../../api/guildwars2";
const TradingPostUser = () => {
  async function TradingPostUserBeta() {
    const [buys, setBuys] = useState(0);
    const [sells, setSells] = useState(0);
    return await guildwars2.get("commerce/transaction", { params: {} });
  }
};
