import React from "react";
import {
  Card,
  CardContent,
  IconButton,
  Box,
  Typography,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NavigationIcon from "@mui/icons-material/Navigation";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GrainIcon from "@mui/icons-material/Grain";
import CloudIcon from "@mui/icons-material/Cloud";

const getWeatherIcon = (icon) => {
  const iconProps = { sx: { fontSize: 40, color: "white" } };
  switch (icon) {
    case "clouds":
      return <CloudQueueIcon {...iconProps} />;
    case "broken-clouds":
      return <WbCloudyIcon {...iconProps} />;
    case "clear":
      return <AcUnitIcon {...iconProps} />;
    case "rain":
      return <GrainIcon {...iconProps} />;
    case "mist":
      return <CloudIcon {...iconProps} />;
    default:
      return <CloudIcon {...iconProps} />;
  }
};

const formatTime = (timestamp) => {
  const d = new Date(timestamp);
  return d.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    month: "short",
    day: "numeric",
  });
};


export default function WeatherCard({ weather, onClose }) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      onClick={() => {}}
      sx={{
        width: "100%",
        borderRadius: 3,
        backgroundColor: "transparent",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        cursor: "pointer",
        transition: "transform 0.25s ease",
        "&:hover": { transform: "translateY(-5px)" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          backgroundColor: weather.color,
          p: 3,
          position: "relative",
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      >
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
            backgroundColor: "rgba(255,255,255,0.2)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
          }}
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            p:2
          }}
        >

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: 0.5,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, color: "white" }}>
              {weather.city}
            </Typography>
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.8)" }}>
              {formatTime(weather.time)}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {getWeatherIcon(weather.icon)}
              <Typography
                variant="body2"
                sx={{ color: "white", fontSize: "0.9rem" }}
              >
                {weather.description}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: 300,
                fontSize: "3rem",
                lineHeight: 1,
                mb: 1,
              }}
            >
              {weather.temp}°C
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.9)", fontSize: "0.8rem" }}
            >
              Temp Min: {weather.tempMin}°C
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.9)", fontSize: "0.8rem" }}
            >
              Temp Max: {weather.tempMax}°C
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Top Section */}

      {/* Bottom Section */}
        <CardContent
          sx={{
            backgroundColor: "#2C3E50",
            color: "white",
            p: 2,
          }}
        >

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            p:2
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs display="flex" flexDirection="column" gap={0.5}>
              <Typography variant="caption" sx={{ display: "block" }}>
                Pressure: {weather.pressure} Pa
              </Typography>
              <Typography variant="caption" sx={{ display: "block" }}>
                Humidity: {weather.humidity}%
              </Typography>
              <Typography variant="caption" sx={{ display: "block" }}>
                Visibility: {weather.visibility} km
              </Typography>
          </Grid>

        {!isMobile && <Divider orientation="vertical" flexItem sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />}

         <Grid item xs display="flex" flexDirection="column" alignItems="center" gap={0.5}>
            
            <NavigationIcon
              sx={{
                fontSize: 24,
                transform: `rotate(${weather.windDegree}deg)`,
                color: "white",
              }}
            />

            <Typography variant="caption" sx={{ textAlign: "center" }}>
              {weather.windSpeed} m/s, {weather.windDegree} Degree
            </Typography>
          </Grid>


          {!isMobile && <Divider orientation="vertical" flexItem sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />}

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
        </CardContent>
        {/* Bottom Section */}
      
    </Card>
  );
}
