import axios from 'axios';
import { BASE_URL } from 'src/config-global';

// Create an Axios instance with the base URL
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

let setLoading = null;

export const setLoadingSetter = (setter) => {
  setLoading = setter;
};
// Request interceptor to set loading state before request is sent
axiosInstance.interceptors.request.use(
  (config) => {
    setLoading && setLoading(true);
    return config;
  },
  (error) => {
    setLoading && setLoading(false);
    return Promise.reject(error);
  }
);
// Response interceptor to unset loading state after response is received
axiosInstance.interceptors.response.use(
  (response) => {
    setLoading && setLoading(false);
    return response;
  },
  (error) => {
    setLoading && setLoading(false);
    return Promise.reject(error);
  }
);

// Request interceptor to add Authorization header with token from sessionStorage
axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle errors and extract error message
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// Fetcher function for use with SWR or similar libraries
export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await axiosInstance.get(url, { ...config });
  return res.data;
};

// Define API endpoints
export const endpoints = {
  getAllWeather: '/weather/all',
  getCityWeather: (id) => `/weather/id/${id}`,
};
