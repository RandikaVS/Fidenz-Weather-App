const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export async function fetchAllWeather(token) {
  const res = await fetch(`${BASE_URL}/weather/all`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error("Failed to fetch weather data");
  return res.json();
}

export async function fetchCityWeather(cityId, token) {
  const res = await fetch(`${BASE_URL}/weather?cityId=${cityId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error("Failed to fetch city weather");
  return res.json();
}
