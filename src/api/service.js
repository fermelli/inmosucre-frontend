import axios from "axios";

const service = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  timeout: 1000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

export default service;
