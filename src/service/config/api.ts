import axios from "axios";

const api = axios.create({
    baseURL: "http://164.152.53.208:3000"
})

export default api;