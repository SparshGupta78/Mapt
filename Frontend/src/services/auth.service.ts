import { useNavigate } from "react-router-dom";
import api from "./axios.config";

const useAuthAPI = () => {
  
  const navigate = useNavigate()

  const signUpAPI = async (data: any) => {
    const res = await api.post('/auth/signup', data)
    const { token } = res.data
    if (!token) return
    if (token) {
      localStorage.setItem('token', token)
      navigate("/job-details")
    }
  }
  
  const signInAPI = async (data: any) => {
    const res = await api.post('/auth/signin', data)
    const { token } = res.data
    if (!token) return
    localStorage.setItem('token', token)
    navigate("/job-details")
  }

  return {
    signInAPI,
    signUpAPI
  }
}

export default useAuthAPI