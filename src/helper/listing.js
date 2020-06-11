import React from "react";
import guildwars2 from "../api/guildwars2";
export async function listing(itemId) {
  return await guildwars2
    .get(`commerce/listings/${itemId}`)
    .then((response) => {
      return response.data;
    });
}
