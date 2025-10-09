import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

export default function WeatherDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const weather = state?.weather;

  if (!weather) {
    return <Typography color="white">No data found</Typography>;
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#1e3c72',
      color: 'white',
      p: 4,
    }}>
      <Button variant="contained" sx={{ mb: 3 }} onClick={() => navigate(-1)}>⬅ Back</Button>
      <Typography variant="h4" mb={2}>{weather.city}</Typography>
      <Typography variant="h6">{weather.condition}</Typography>
      <Typography variant="h2">{weather.temp}°C</Typography>
      <Typography>Humidity: {weather.humidity}%</Typography>
      <Typography>Pressure: {weather.pressure}Pa</Typography>
      <Typography>Wind: {weather.windSpeed}m/s</Typography>
      <Typography>Sunrise: {weather.sunrise}</Typography>
      <Typography>Sunset: {weather.sunset}</Typography>
    </Box>
  );
}
