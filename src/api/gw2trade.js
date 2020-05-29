import axios from "axios";

const gw2trade = axios.create({
  baseURL: "http://localhost:4001/",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    'X-Requested-With': 'XMLHttpRequest'
  },
});

export default gw2trade;
