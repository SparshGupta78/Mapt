import api from "./axios.config"

export const uploadResumeWithDetails = async (
  file: File,
  job: string,
  experience: string,
  reason: string
) => {
  const formData = new FormData()

  formData.append("file", file)
  formData.append("job", job)
  formData.append("experience", experience)
  formData.append("reason", reason)

  const res = await api.post("/upload", formData)

  return res.data
}