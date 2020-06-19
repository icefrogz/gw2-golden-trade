import axios from "axios";

const gw2 = axios.create({
  baseURL: "https://api.guildwars2.com/v2/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default gw2;
