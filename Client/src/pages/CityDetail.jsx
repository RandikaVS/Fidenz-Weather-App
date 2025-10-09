import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCityWeather } from "../api/api";

export default function CityDetail() {
  const { cityId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const load = async () => {
      const token = localStorage.getItem("auth_token");
      const res = await fetchCityWeather(cityId, token);
      setData(res);
    };
    load();
  }, [cityId]);

  if (!data) return <p>Loading...</p>;

  const { name, temp, description, raw } = data;

  return (
    <div className="city-detail">
      <button className="back" onClick={() => navigate("/")}>← Back</button>
      <div className="detail-card">
        <h2>{name}</h2>
        <h1>{Math.round(temp)}°C</h1>
        <p>{description}</p>

        <div className="stats">
          <div>Pressure: {raw.main.pressure} hPa</div>
          <div>Humidity: {raw.main.humidity}%</div>
          <div>Visibility: {raw.visibility / 1000} km</div>
          <div>Wind: {raw.wind.speed} m/s {raw.wind.deg}°</div>
          <div>Sunrise: {new Date(raw.sys.sunrise * 1000).toLocaleTimeString()}</div>
          <div>Sunset: {new Date(raw.sys.sunset * 1000).toLocaleTimeString()}</div>
        </div>
      </div>
    </div>
  );
}
