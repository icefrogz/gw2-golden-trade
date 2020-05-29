import guildwars2 from "../api/guildwars2";

export async function tradingPost(itemId) {
  return await guildwars2.get(`commerce/prices/${itemId}`).then((response) => {
    return response.data;
  });
}
