import guildwars2 from "../api/guildwars2";

export async function tradingPost(itemId) {
  let url;
  let params = {};
  if (Array.isArray(itemId)) {
    url = "commerce/prices";
    params = {
      ids: itemId.join(),
    };
  } else {
    url = `commerce/prices/${itemId}`;
  }
  return await guildwars2
    .get(url, {
      params,
    })
    .then((response) => {
      return response.data;
    });
}
