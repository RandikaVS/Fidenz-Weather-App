import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCityWeather } from "src/api/api";
import { useSnackbar } from 'src/components/snackbar';
import { formatTime } from "src/utils/fomatTime";


export default function CityDetail() {

  const { enqueueSnackbar } = useSnackbar()
  const { cityId } = useParams(); // Get cityId from URL parameters
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [weather, setWeather] = useState({
    id: cityId,
    city: "",
    description: "",
    icon: "",
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    pressure: 0,
    visibility: 0,
    windSpeed: 0,
    windDegree: 0,
    sunrise: "",
    sunset: "",
    time: Date.now(),
    color: "#3498db",
  });

  // Fetch weather data for the city
  const handleFetchCityWeather = async (cityId) => {
    
    try {
        const data = await fetchCityWeather(cityId);
        setWeather({
            id: data.id,
            city: data.name,
            description: data.description,
            icon: data.icon,
            temp: data.temp,
            tempMin: data.tempMin,
            tempMax: data.tempMax,
            humidity: data.humidity,
            pressure: data.pressure,
            visibility: data.visibility,
            windSpeed: data.windSpeed,
            windDegree: data.windDegree,
            sunrise: data.sunrise,
            sunset: data.sunset,
            time: new Date(data.time),
            color: data.color,
        });
    } catch (err) {
      enqueueSnackbar('Failed to fetch city weather:', { variant: 'error' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  useEffect(() => {
    if(cityId){
        handleFetchCityWeather(cityId);
    }
  
}, [cityId]);


  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "-100px",
      }}
    >


      <Card
        sx={{
          width: isMobile ? "95%" : "60%",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
        }}
      >
        <Box
          sx={{
            backgroundColor: `${weather.color}CC`,
            backgroundImage: ` url('src/assets/Cloudy1.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
            p: 3,
            position: "relative",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        >
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              color: "white",
              backgroundColor: "rgba(255,255,255,0.2)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {weather.city}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              {formatTime(weather.time)}
            </Typography>
          </div>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">{weather.description}</Typography>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                bgcolor: "rgba(255,255,255,0.4)",
                display: { xs: "none", sm: "block" },
              }}
            />
            <Grid item xs={12} sm={4}>
              <Typography variant="h2" sx={{ fontWeight: 300 }}>
                {weather.temp}°C
              </Typography>
              <Typography variant="body2">
                Temp Min: {weather.tempMin}°C | Temp Max: {weather.tempMax}°C
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundColor: "#2C3E50",
            color: "white",
            p: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs display="flex" flexDirection="column" gap={0.5}>
              <Typography variant="caption">
                Pressure: {weather.pressure} hPa
              </Typography>
              <Typography variant="caption">
                Humidity: {weather.humidity}%
              </Typography>
              <Typography variant="caption">
                Visibility: {weather.visibility} km
              </Typography>
            </Grid>

            {!isMobile && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "rgba(255,255,255,0.3)" }}
              />
            )}

            <Grid
              item
              xs
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={0.5}
            >
              <NavigationIcon
                sx={{
                  fontSize: 24,
                  transform: `rotate(${weather.windDegree}deg)`,
                }}
              />
              <Typography variant="caption">
                {weather.windSpeed} m/s, {weather.windDegree}°
              </Typography>
            </Grid>

            {!isMobile && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "rgba(255,255,255,0.3)" }}
              />
            )}

            <Grid item xs display="flex" flexDirection="column" gap={0.5}>
              <Typography variant="caption">
                Sunrise: {weather.sunrise}
              </Typography>
              <Typography variant="caption">
                Sunset: {weather.sunset}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>

    </Box>
  );
}
