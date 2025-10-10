import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress, Box, Button } from "@mui/material";
import { useSnackbar } from 'src/components/snackbar';
import { setSession } from "src/utils/session";

const ProtectedRoute = ({ children }) => {
  // Auth0 hook to manage authentication state
  const { isAuthenticated, isLoading, getAccessTokenSilently, loginWithRedirect } = useAuth0();
  const [tokenLoading, setTokenLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // Check and set the authentication token
    const checkToken = async () => {
      try {
        if (isAuthenticated) {
          // Get the access token silently
          const token = await getAccessTokenSilently();
          if (!token) {
            loginWithRedirect();
          } else {
            setSession(token);
          }
        }
      } catch (error) {
        enqueueSnackbar('Token error!', { variant: 'error' });
        loginWithRedirect();
      } finally {
        setTokenLoading(false);
      }
    };

    checkToken();
  }, [isAuthenticated, getAccessTokenSilently, loginWithRedirect]);

  // Show loading spinner while checking authentication
  if (isLoading || tokenLoading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // If not authenticated, show login prompt
  if (!isAuthenticated) {
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
          backgroundImage:`url('src/assets/Cloudy2.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <h2>Welcome to Fidenz Weather Dashboard</h2>
        <Button variant="contained" color="primary" onClick={() => loginWithRedirect()}>
          Login to Continue
        </Button>
      </Box>
    );
  }

  // If authenticated, render the child components
  return children;
};

export default ProtectedRoute;
