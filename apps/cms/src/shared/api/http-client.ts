import axios from "axios";

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
