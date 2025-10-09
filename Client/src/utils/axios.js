import axios from 'axios';
import { BASE_URL } from 'src/config-global';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await axiosInstance.get(url, { ...config });
  return res.data;
};

// API endpoints
export const endpoints = {
  getAllWeather: '/weather/all',
  getCityWeather: (id) => `/weather/id/${id}`,
};
