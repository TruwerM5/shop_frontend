import axios from "axios";
import { BASE_API_URL } from "~/constants";

const api = axios.create({ 
    baseURL: 'http://localhost:3001',
    withCredentials: true
});

export default api;