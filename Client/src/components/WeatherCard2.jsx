import React from "react";
import {
  Card,
  CardContent,
  IconButton,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

/**
 * WeatherCard: top colored banner + dark info strip below
 */
export default function WeatherCard({ city }) {
  const getColor = (desc) => {
    if (!desc) return ["#42a5f5", "#1e88e5"]; // blue
    const s = desc.toLowerCase();
    if (s.includes("cloud")) return ["#7e57c2", "#6a1b9a"]; // purple
    if (s.includes("rain")) return ["#ffb74d", "#f57c00"]; // orange
    if (s.includes("mist") || s.includes("fog")) return ["#ef5350", "#c62828"]; // red
    if (s.includes("clear")) return ["#4caf50", "#43a047"]; // green
    return ["#42a5f5", "#1e88e5"];
  };

  const [c1, c2] = getColor(city.description);

  const formatTime = (ts) => {
    if (!ts) return "-";
    const d = new Date(ts * 1000);
    // "9:19 AM, Feb 8"
    return d.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top colored banner */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
          color: "#fff",
          px: 3,
          py: 3,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box textAlign="left">
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {city.name}{city.raw?.sys?.country ? `, ${city.raw.sys.country}` : ""}
            </Typography>
            <Typography variant="caption" sx={{ display: "block", mt: 0.5 }}>
              {formatTime(city.raw?.sys?.sunrise)} {/* Using sunrise as sample time */}
            </Typography>

            <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
              {/* small icon or placeholder for weather */}
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  display: "inline-block",
                  mr: 1.5,
                }}
              />
              <Typography variant="body2">{city.description}</Typography>
            </Box>
          </Box>

          {/* Right: big temperature and min/max */}
          <Box textAlign="right" sx={{ minWidth: 120 }}>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              {Math.round(city.temp)}°C
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Temp Min: {city.raw?.main?.temp_min}°c
              <br />
              Temp Max: {city.raw?.main?.temp_max}°c
            </Typography>
          </Box>
        </Box>

        {/* small close icon top-right */}
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            right: 20,
            top: 16,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          {/* <CloseRoundedIcon fontSize="small" /> */}
        </IconButton>
      </Box>

      {/* Bottom dark info strip */}
      <Box sx={{ background: "#34353a", px: 3, py: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {/* Left column */}
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Pressure: <Typography component="span" sx={{ fontWeight: 400 }}>{city.raw?.main?.pressure}hPa</Typography>
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Humidity: <Typography component="span" sx={{ fontWeight: 400 }}>{city.raw?.main?.humidity}%</Typography>
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Visibility: <Typography component="span" sx={{ fontWeight: 400 }}>{(city.raw?.visibility || 0) / 1000} km</Typography>
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ bgcolor: "rgba(255,255,255,0.06)", display: { xs: "none", sm: "block" } }} />

          {/* Center column - wind */}
          <Box sx={{ textAlign: "center", minWidth: 120 }}>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              {city.raw?.wind?.speed} m/s
            </Typography>
            <Typography variant="caption" sx={{ display: "block", mt: 0.5 }}>
              {city.raw?.wind?.deg}°
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ bgcolor: "rgba(255,255,255,0.06)", display: { xs: "none", sm: "block" } }} />

          {/* Right column - sunrise/sunset */}
          <Box sx={{ textAlign: "right", minWidth: 140 }}>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Sunrise: <Typography component="span" sx={{ fontWeight: 400 }}>{formatTime(city.raw?.sys?.sunrise)}</Typography>
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Sunset: <Typography component="span" sx={{ fontWeight: 400 }}>{formatTime(city.raw?.sys?.sunset)}</Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
