import axios from "axios"

const api = axios.create({
  baseURL: process.env.AI_PATH,
  timeout: 5000
})

api.interceptors.request.use((config) => {
  const token = process.env.EXTERNAL_API_KEY

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api