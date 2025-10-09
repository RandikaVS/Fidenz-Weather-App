import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";


export default function Layout({children}) {
  return (
    <Box sx={{ display: "flex",flexDirection: "column" }}>

      <Header/>

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
