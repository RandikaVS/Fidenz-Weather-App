// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   Container,
// } from "@mui/material";
// import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import WeatherCard from "../components/WeatherCard";
// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";


// export default function Dashboard() {
//   const [city, setCity] = useState("");
//   const [weatherList, setWeatherList] = useState([]);
//   const [selectedWeather, setSelectedWeather] = useState(null);

//   const fetchAllWeather = async () => {
//     try {
//       const res = await fetch(`${BASE_URL}/weather/all`);
//       if (!res.ok) throw new Error("Failed to fetch weather data");
//       const data = await res.json();
//       setWeatherList(data.filter(w => !w.error));
//     } catch (err) {
//       console.error(err);
//     }
//   };


//   const handleCardClick = (weather) => {
//     setSelectedWeather(weather);
//   };

//   const handleCloseDialog = () => {
//     setSelectedWeather(null);
//   };

//   useEffect(() => {
//     fetchAllWeather();
//   }, []);

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         width: "100vw",
//         background: "linear-gradient(180deg,#1e3c72 0%, #2a5298 100%)",
//         color: "#fff",
//         py: 6,
//       }}
//     >
//       <Container maxWidth="lg" sx={{ textAlign: "center" }}>
//         {/* Header */}
//         <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
//           <WbSunnyRoundedIcon fontSize="large" sx={{ mr: 1 }} />
//           <Typography variant="h5" fontWeight={700}>
//             Weather App
//           </Typography>
//         </Box>

//         {/* Search */}
//        <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         gap={2}
//         mb={4}
//         flexWrap="wrap"
//       >
//         <TextField
//           variant="outlined"
//           size="small"
//           placeholder="Enter a city"
//           sx={{
//             backgroundColor: "#000",
//             borderRadius: 1,
//             width: { xs: "100%", sm: "300px" },
//           }}
//         />
//         <Button
//           variant="contained"
//           startIcon={<SearchRoundedIcon />}
//           sx={{
//             backgroundColor: "#7e57c2",
//             "&:hover": { backgroundColor: "#6a1b9a" },
//           }}
//         >
//           Add City
//         </Button>
//       </Box>

//         {/* Grid: 2 cards per row on sm+ devices (force 2 cols on all large screens) */}
//         <Grid
//           container
//           spacing={{ xs: 2, sm: 3 }}
//           justifyContent="center"
//           alignItems="stretch"
//         >
//           {weatherList.map((city) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={6}
//               lg={6}
//               xl={6}
//               key={city.id}
//               sx={{ display: "flex" }} // make columns equal height
//             >
//               <WeatherCard city={city} />
//             </Grid>
//           ))}
//         </Grid>

//         <Typography
//           variant="caption"
//           sx={{ mt: 6, display: "block", opacity: 0.7 }}
//         >
//           © 2025 Fidenz Technologies
//         </Typography>
//       </Container>
//     </Box>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from '@mui/material';
// import {
//   Cloud,
//   CloudQueue,
//   AcUnit,
//   Grain,
//   WbCloudy,
//   Close,
//   Air,
//   Compress,
//   Visibility,
//   WbSunny,
//   Navigation,
// } from '@mui/icons-material';


// const getWeatherIcon = (icon) => {
//   const iconProps = { sx: { fontSize: 40, color: 'white' } };
//   switch (icon) {
//     case 'clouds':
//       return <CloudQueue {...iconProps} />;
//     case 'broken-clouds':
//       return <WbCloudy {...iconProps} />;
//     case 'clear':
//       return <AcUnit {...iconProps} />;
//     case 'rain':
//       return <Grain {...iconProps} />;
//     case 'mist':
//       return <Cloud {...iconProps} />;
//     default:
//       return <Cloud {...iconProps} />;
//   }
// };


// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

// export default function Dashboard() {
//   const [city, setCity] = useState("");
//   const [weatherList, setWeatherList] = useState([]);
//   const [selectedWeather, setSelectedWeather] = useState(null);

//   const fetchAllWeather = async () => {
//     try {
//       const res = await fetch(`${BASE_URL}/weather/all`);
//       if (!res.ok) throw new Error("Failed to fetch weather data");
//       const data = await res.json();
//       setWeatherList(data.filter(w => !w.error));
//     } catch (err) {
//       console.error(err);
//     }
//   };


//   const handleCardClick = (weather) => {
//     setSelectedWeather(weather);
//   };

//   const handleCloseDialog = () => {
//     setSelectedWeather(null);
//   };

//   useEffect(() => {
//     fetchAllWeather();
//   }, []);

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)',
//         py: 4,
//         position: 'relative',
//         overflow: 'hidden',
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 50%)',
//           pointerEvents: 'none',
//         },
//       }}
//     >
//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
//         {/* Header */}
//         <Box sx={{ textAlign: 'center', mb: 4 }}>
//           <Typography
//             variant="h4"
//             sx={{
//               color: 'white',
//               fontWeight: 600,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               gap: 1,
//             }}
//           >
//             ⛅ Weather App
//           </Typography>
//         </Box>

//         {/* Input Section */}
//         <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, gap: 2 }}>
//           <TextField
//             placeholder="Enter a city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             sx={{
//               width: 300,
//               '& .MuiOutlinedInput-root': {
//                 backgroundColor: 'rgba(255,255,255,0.1)',
//                 color: 'white',
//                 '& fieldset': {
//                   borderColor: 'transparent',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: 'rgba(255,255,255,0.3)',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: 'rgba(255,255,255,0.5)',
//                 },
//               },
//               '& .MuiInputBase-input::placeholder': {
//                 color: 'rgba(255,255,255,0.5)',
//                 opacity: 1,
//               },
//             }}
//           />
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: '#7B68EE',
//               '&:hover': {
//                 backgroundColor: '#6A5ACD',
//               },
//               textTransform: 'none',
//               px: 3,
//             }}
//           >
//             Add City
//           </Button>
//         </Box>

//         {/* Weather Cards Grid */}
//         <Grid
//           container
//           spacing={3}
//           justifyContent="center"
//           alignItems="stretch"
//           sx={{ maxWidth: 900, mx: "auto" }}
//         >
//           {weatherList?.map((weather) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={6}
//               key={weather.id}
//               sx={{
//                 display: "flex" }}
//             >

//               <Card
//                 onClick={() => handleCardClick(weather)}
//                 sx={{
//                   width: "100%",
//                   borderRadius: 3,
//                   backgroundColor: 'transparent',
//                   boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
//                   cursor: 'pointer',
//                   transition: 'transform 0.25s ease',
//                   '&:hover': { transform: 'translateY(-5px)' },
//                 }}
//               >
//                 {/* Colored Top Section */}
//                 <Box
//                   sx={{
//                     backgroundColor: weather.color,
//                     p: 3,
//                     position: 'relative',
//                     borderTopLeftRadius: 4,
//                     borderTopRightRadius: 4,
//                   }}
//                 >
//                   <IconButton
//                     size="small"
//                     sx={{
//                       position: 'absolute',
//                       top: 8,
//                       right: 8,
//                       color: 'white',
//                       backgroundColor: 'rgba(255,255,255,0.2)',
//                       '&:hover': {
//                         backgroundColor: 'rgba(255,255,255,0.3)',
//                       },
//                     }}
//                   >
//                     <Close fontSize="small" />
//                   </IconButton>

//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                     <Box>
//                       <Typography variant="h5" sx={{ color: 'white', fontWeight: 600, mb: 0.5 }}>
//                         {weather.city}
//                       </Typography>
//                       <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2, fontSize: '0.85rem' }}>
//                         {weather.time}
//                       </Typography>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         {getWeatherIcon(weather.icon)}
//                         <Typography variant="body2" sx={{ color: 'white', fontSize: '0.9rem' }}>
//                           {weather.condition}
//                         </Typography>
//                       </Box>
//                     </Box>

//                     <Box sx={{ textAlign: 'right' }}>
//                       <Typography
//                         variant="h2"
//                         sx={{
//                           color: 'white',
//                           fontWeight: 300,
//                           fontSize: '4rem',
//                           lineHeight: 1,
//                           mb: 1,
//                         }}
//                       >
//                         {weather.temp}°C
//                       </Typography>
//                       <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem' }}>
//                         Temp Min: {weather.tempMin}°C
//                       </Typography>
//                       <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem' }}>
//                         Temp Max: {weather.tempMax}°C
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Box>

//                 {/* Dark Bottom Section */}
//                 <CardContent
//                   sx={{
//                     backgroundColor: '#2C3E50',
//                     color: 'white',
//                     p: 2.5,
//                   }}
//                 >
//                   <Grid container spacing={2}>
//                     <Grid item xs={6}>
//                       <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block', fontSize: '0.75rem' }}>
//                         Pressure: {weather.pressure}Pa
//                       </Typography>
//                       <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block', fontSize: '0.75rem' }}>
//                         Humidity: {weather.humidity}%
//                       </Typography>
//                       <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block', fontSize: '0.75rem' }}>
//                         Visibility: {weather.visibility}km
//                       </Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
//                         <Navigation sx={{ fontSize: 16, transform: `rotate(${weather.windDegree}deg)`, color: 'white' }} />
//                         <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
//                           {weather.windSpeed}m/s {weather.windDegree} Degree
//                         </Typography>
//                       </Box>
//                       <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block', fontSize: '0.75rem' }}>
//                         Sunrise: {weather.sunrise}
//                       </Typography>
//                       <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block', fontSize: '0.75rem' }}>
//                         Sunset: {weather.sunset}
//                       </Typography>
//                     </Grid>
//                   </Grid>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Footer */}
//         <Typography
//           variant="body2"
//           sx={{
//             textAlign: 'center',
//             color: 'rgba(255,255,255,0.5)',
//             mt: 4,
//             fontSize: '0.8rem',
//           }}
//         >
//           2021 Fideris Technologies
//         </Typography>
//       </Container>
    
//     </Box>
//   );
// }


import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography,TextField, Button } from "@mui/material";
import WeatherCard from "../components/WeatherCard";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export default function Dashboard() {
  const [weatherList, setWeatherList] = useState([]);

  const fetchAllWeather = async () => {
    try {
      const res = await fetch(`${BASE_URL}/weather/all`);
      if (!res.ok) throw new Error("Failed to fetch weather data");
      const data = await res.json();
      setWeatherList(data.filter((w) => !w.error));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllWeather();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)",
        py: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" sx={{ color: "white", fontWeight: 600 }}>
            ⛅ Weather App
          </Typography>
        </Box>

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
