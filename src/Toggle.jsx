import React from "react";
import { Box, Typography } from "@mui/material";
import ThemeToggle from "./components/ThemeToggle";
import StyledButton from "./components/StyledButton";

const Home = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4">Habesha Clothes</Typography>
        <ThemeToggle />
        <StyledButton>Click Me</StyledButton>
      </Box>
    </>
  );
};

export default Home;
