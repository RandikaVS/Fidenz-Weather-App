import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography,TextField, Button, useTheme, useMediaQuery } from "@mui/material";
import WeatherCard from "../components/weather-card/WeatherCard";
import { fetchAllWeather } from "../api/api";
import { useSnackbar } from 'src/components/snackbar';

export default function Dashboard() {



  const { enqueueSnackbar } = useSnackbar()

  const [weatherList, setWeatherList] = useState([]);
  

  const handlefetchAllWeather = async () => {
    try {
      const data = await fetchAllWeather()
      setWeatherList(data.filter((w) => !w.error));
    } catch (err) {
      enqueueSnackbar('Unable to get weather data!', { variant: 'error' });
    }
  };

  useEffect(() => {
    handlefetchAllWeather();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >

      <Container maxWidth="lg">


         <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, gap:2 }}>
           <TextField
            placeholder="Enter a city"
            sx={{
              width: 300,
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255,255,255,0.3)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'rgba(255,255,255,0.5)',
                },
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'rgba(255,255,255,0.5)',
                opacity: 1,
              },
            }}
          />
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: '#7B68EE',
              '&:hover': {
                backgroundColor: '#6A5ACD',
              },
              textTransform: 'none',
            }}
          >
            Add City
          </Button>
        </Box>

       

        <Grid container spacing={3} justifyContent="center">
          {weatherList.map((weather) => (
            <Grid item xs={12} sm={6} md={6} key={weather.id}>
              <WeatherCard weather={weather} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
