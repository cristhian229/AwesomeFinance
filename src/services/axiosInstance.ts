import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://chilly-yoko-mspena14-2193922e.koyeb.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
