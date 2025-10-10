
export const BASE_URL = import.meta.env.VITE_API_URL;
export const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
export const CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
export const AUDIENCE = import.meta.env.VITE_AUTH0_AUDIENCE;

export const getWeatherById = (cityId) => `/weather/city/${cityId}`;

export const getAllWeather = () => `/weather/all`;


