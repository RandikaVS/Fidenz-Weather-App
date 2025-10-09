const cache = require("../cache");
const fetch = require("node-fetch");
const asyncHandler = require("express-async-handler");
const { COLORS } = require("../utils/colors");


const fetchWeather = asyncHandler(async (cityId, index = 0) => {
  
  const cacheKey = `weather:${cityId}`;

  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const OPENWEATHER_KEY = process.env.OPENWEATHER_KEY;
  const ROOT_URL = process.env.OPENWEATHER_API_ROOT;
  if (!OPENWEATHER_KEY || !ROOT_URL) throw new Error("OPENWEATHER_KEY or ROOT_URL not set");

  const url = `${ROOT_URL}?id=${cityId}&appid=${OPENWEATHER_KEY}&units=metric`;
  const res = await fetch(url);

  if (!res.ok) throw new Error(`OpenWeather error ${res.status}`);
  const json = await res.json();

  const colorSet = COLORS[index % COLORS.length];

  const result = {
    id: json.id,
    name: json.name,
    description: json.weather?.[0]?.description || "",
    temp: json.main?.temp || null,
    tempMin: json.main?.temp_min || null,
    tempMax: json.main?.temp_max || null,
    pressure: json.main?.pressure || null,
    humidity: json.main?.humidity || null,
    visibility: json.visibility / 1000 || null,
    windSpeed: json.wind?.speed || null,
    windDegree: json.wind?.deg || null,
    sunrise: new Date(json.sys?.sunrise * 1000).toLocaleTimeString(),
    sunset: new Date(json.sys?.sunset * 1000).toLocaleTimeString(),
    icon: json.weather?.[0]?.main.toLowerCase(),
    color: colorSet[0], 
    colorSecondary: colorSet[1],
    time: new Date(json.dt * 1000).toLocaleString(),
    city: json.name,
  };

  cache.set(cacheKey, result, 300); 
  return result;
});

module.exports = { fetchWeather };
