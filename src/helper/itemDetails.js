import guildwars2 from "../api/guildwars2";

export async function itemDetails(apiKey, itemId) {
  return await guildwars2
    .get(`items/${itemId}`, {
      params: {
        access_token: apiKey,
      },
    })
    .then((response) => {
      return response.data;
    });
}
