import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";
import { setLoadingSetter } from "src/utils/axios";


export default function Layout({children}) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoadingSetter(setLoading);
  }, []);

  return (
    <Box sx={{ display: "flex",flexDirection: "column" }}>

      <Header/>

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

      <Box
        component="main"
        minHeight="100vh"
        sx={{
          flexGrow: 1,
        }}
      >
        {children ? children : <Outlet/>}
      </Box>

      <Footer/>

    </Box>
  );
}
