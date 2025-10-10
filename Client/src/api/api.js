import axiosInstance, { endpoints } from "src/utils/axios";


// Fetch all weather data
export const fetchAllWeather = async () => {
  const response = await axiosInstance.get(endpoints.getAllWeather);
  return response.data;
};

// Fetch weather data for a specific city by ID
export const fetchCityWeather = async (cityId) => {
  const response = await axiosInstance.get(endpoints.getCityWeather(cityId));
  return response.data;
};

