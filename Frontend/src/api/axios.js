import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((config) => {

  const adminToken =
    localStorage.getItem("adminToken");

  const webToken =
    localStorage.getItem("webToken");

  const token = adminToken || webToken;

  if (token) {

    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});

export default API;