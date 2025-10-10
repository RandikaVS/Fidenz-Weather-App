import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, CircularProgress, Button } from "@mui/material";
import { useSnackbar } from "src/components/snackbar";
import Header from "src/components/header/Header";
import Footer from "src/components/footer/Footer";
import { setSession } from "src/utils/session";
import { setLoadingSetter } from "src/utils/axios";

export default function ProtectedLayout() {
  
  // Auth0 hook to manage authentication state
  const { isAuthenticated, isLoading, getAccessTokenSilently, loginWithRedirect } = useAuth0();
  const [tokenLoading, setTokenLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoadingSetter(setLoading);
  }, []);

  useEffect(() => {
    const checkToken = async () => {
      try {
        if (isAuthenticated) {
          const token = await getAccessTokenSilently();
          if (!token) loginWithRedirect();
          else setSession(token);
        }
      } catch (error) {
        enqueueSnackbar("Token error!", { variant: "error" });
        loginWithRedirect();
      } finally {
        setTokenLoading(false);
      }
    };
    checkToken();
  }, [isAuthenticated, getAccessTokenSilently, loginWithRedirect]);

  if (isLoading || tokenLoading) {
    return (
      <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Loading spinner */}
        <CircularProgress /> 
      </Box>
    );
  }

  if (!isAuthenticated) {
    // If not authenticated, show login prompt
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          color: "white",
          backgroundImage: `url('src/assets/Cloudy2.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <h2>Welcome to Fidenz Weather Dashboard</h2>
        <Button variant="contained" color="primary" onClick={() => loginWithRedirect()}>
          Login to Continue
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      
      <Header />


      {/* Loading overlay when performing background tasks */}
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <CircularProgress size={60} />
        </Box>
      )}

      {/* Main content area where nested routes will be rendered */}
      <Box component="main" sx={{ flexGrow: 1, minHeight: "100vh" }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
