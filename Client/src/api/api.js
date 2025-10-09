import axiosInstance, { endpoints } from "src/utils/axios";


export const fetchAllWeather = async () => {
  const response = await axiosInstance.get(endpoints.getAllWeather);
  return response.data;
};

export const fetchCityWeather = async (cityId) => {
  const response = await axiosInstance.get(endpoints.getCityWeather(cityId));
  return response.data;
};

