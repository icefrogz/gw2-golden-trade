import guildwars2 from "../api/guildwars2";

export async function iconRetriever(iconId) {
  return await guildwars2.get(`files?ids=${iconId}`).then((response) => {
    return response.data;
  });
}
