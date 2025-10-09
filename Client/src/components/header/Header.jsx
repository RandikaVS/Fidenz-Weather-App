import React from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import getWeatherIcon from "src/utils/getWeatherIcon";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { logout, user } = useAuth0();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ position: "relative", width: "100%", mb: 4 }}>
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 2,
        }}
      >
        {user && !isMobile && (
          <Typography variant="body1" sx={{ color: "white", fontWeight: 500 }}>
            Hello 👋 {user.name}
          </Typography>
        )}
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          sx={{
            borderColor: "white",
            color: "white",
            ml: 2,
            "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
          }}
        >
          Logout
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: 600,
          }}
        >
          {getWeatherIcon("title")} Weather App
        </Typography>
      </Box>
    </Box>
  );
}
