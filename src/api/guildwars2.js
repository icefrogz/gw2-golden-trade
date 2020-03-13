import axios from "axios";
const KEY =
  "2CD468CC-5140-514D-AC14-0AE5A8222E25E2CBE59F-5A64-4C26-8379-D3B9356CA701";

const gw2 = axios.create({
  baseURL: "https://api.guildwars2.com/v2/",
  params: {
    access_token: KEY
  }
});
gw2.defaults.headers.common["Authorization"] = `Bearer ${KEY}`;
export default gw2;
