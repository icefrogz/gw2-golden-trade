import React from "react";
import guildwars2 from "../api/guildwars2";
export async function itemStats(itemId) {
  return await guildwars2.get(`itemstats/${itemId}`).then((response) => {
    return response.data;
  });
}
