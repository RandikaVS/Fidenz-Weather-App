
export const BASE_URL = import.meta.env.VITE_API_URL;

export const getWeatherById = (cityId) => `/weather/city/${cityId}`;

export const getAllWeather = () => `/weather/all`;


