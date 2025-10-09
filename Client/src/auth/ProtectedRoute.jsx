import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress, Box, Button } from "@mui/material";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => loginWithRedirect()}
        >
          Login to Continue
        </Button>
      </Box>
    );
  }

  return children;
};

export default ProtectedRoute;
