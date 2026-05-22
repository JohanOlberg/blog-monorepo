import axios from "axios";
import { useAuthStore } from "../../features/auth/store/auth.store";


const baseURL = import.meta.env.VITE_API_URL
if (!baseURL) {
  throw new Error('API CONECTION ERROR');
}

export const httpClient = axios.create({
    baseURL : baseURL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        //"Authorization": `Bearer ${accessToken}` 
    },
    timeout: 10000,
})
httpClient.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})