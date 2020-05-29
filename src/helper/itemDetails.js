import guildwars2 from "../api/guildwars2";

export async function itemDetails(itemId) {
  return await guildwars2.get(`items/${itemId}`).then((response) => {
    return response.data;
  });
}
