import axios from "axios";

export const api = axios.create({
  baseURL: "node-api-dulivi-production.up.railway.app/api",
});
