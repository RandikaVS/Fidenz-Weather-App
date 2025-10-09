import axios from 'axios';
import { BASE_URL } from 'src/config-global';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

let setLoading = null;

export const setLoadingSetter = (setter) => {
  setLoading = setter;
};

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

export const endpoints = {
  getAllWeather: '/weather/all',
  getCityWeather: (id) => `/weather/id/${id}`,
};
