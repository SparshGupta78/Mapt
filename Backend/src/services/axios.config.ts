// src/services/axios.config.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.EXTERNAL_API_BASE_URL,
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  const token = process.env.EXTERNAL_API_KEY;

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;