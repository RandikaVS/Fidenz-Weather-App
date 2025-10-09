const cache = require("../cache");
const fetch = require("node-fetch");
const asyncHandler = require("express-async-handler");

const OPENWEATHER_KEY = process.env.OPENWEATHER_KEY;
if (!OPENWEATHER_KEY) throw new Error("OPENWEATHER_KEY not set");

const COLORS = [
  ["#42a5f5", "#1e88e5"], // Blue
  ["#7e57c2", "#6a1b9a"], // Purple
  ["#ffb74d", "#f57c00"], // Orange
  ["#ef5350", "#c62828"], // Red
  ["#4caf50", "#43a047"], // Green
  ["#26c6da", "#00acc1"], // Cyan
  ["#ab47bc", "#8e24aa"], // Pink
  ["#ffa726", "#fb8c00"], // Deep Orange
];

const fetchWeather = asyncHandler(async (cityId, index = 0) => {
  const cacheKey = `weather:${cityId}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${OPENWEATHER_KEY}&units=metric`;
  const res = await fetch(url);

  if (!res.ok) throw new Error(`OpenWeather error ${res.status}`);
  const json = await res.json();

  // Pick a color from COLORS array in cyclic manner
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
    color: colorSet[0], // primary color
    colorSecondary: colorSet[1], // secondary color
    time: new Date(json.dt * 1000).toLocaleString(),
    city: json.name,
  };

  cache.set(cacheKey, result, 300); // Cache for 5 minutes
  return result;
});

module.exports = { fetchWeather };
