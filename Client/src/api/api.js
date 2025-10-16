import { cache } from "react";
import axiosInstance, { endpoints } from "src/utils/axios";
import { setSession } from "src/utils/session";


// Fetch all weather data
export const fetchAllWeather = async () => {
  const response = await axiosInstance.get(endpoints.getAllWeather);

  const stringify_data = JSON.stringify(response.data)
  sessionStorage.setItem('weather',stringify_data);
  
  return response.data;
};

// Fetch weather data for a specific city by ID
export const fetchCityWeather = async (cityId) => {
  const response = await axiosInstance.get(endpoints.getCityWeather(cityId));
  return response.data;
};

