import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress, Box, Button } from "@mui/material";
import { useSnackbar } from 'src/components/snackbar';
import { setSession } from "src/utils/session";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently, loginWithRedirect } = useAuth0();
  const [tokenLoading, setTokenLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const checkToken = async () => {
      try {
        if (isAuthenticated) {
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
          bgcolor: "#0A1929",
          color: "white",
        }}
      >
        <h2>Welcome to Fidenz Weather Dashboard</h2>
        <Button variant="contained" color="primary" onClick={() => loginWithRedirect()}>
          Login to Continue
        </Button>
      </Box>
    );
  }

  return children;
};

export default ProtectedRoute;
