import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
})

api.interceptors.request.use((config) => {
  const tokenObj = localStorage.getItem("token")
  if (tokenObj) {
    const token = JSON.parse(tokenObj) as string
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api