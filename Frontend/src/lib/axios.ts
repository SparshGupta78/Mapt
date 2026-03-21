// src/lib/axios.ts
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", // your backend URL with correct port
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach JWT token if it exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;