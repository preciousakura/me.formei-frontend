import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.111:3000/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
});

export default api;
