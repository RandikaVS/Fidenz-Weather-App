import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 4,
        bgcolor: "#1e1e1e",
        color: "white",
        textAlign: "center",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderTop: '1px solid #333'
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} My Weather App. Develop By Sahan Randika. All rights reserved.
      </Typography>
    </Box>
  );
}
