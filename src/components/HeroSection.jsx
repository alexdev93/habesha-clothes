/** @jsxImportSource @emotion/react */
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ThemeToggle from "./ThemeToggle"

const HeroSection = ({ title, subtitle, buttonText, image }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        height: "80vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: isDark
          ? "linear-gradient(to right, #1c1c1c, #2c2c2c)"
          : `url(${image}) no-repeat center center / cover`,
        color: isDark ? "#fff" : "#000",
        padding: 4,
      }}
    >
      <Box sx={{ position: "absolute", top: 20, right: 20 }}>
        <ThemeToggle />
      </Box>
      <Box>
        <Typography variant="h2" gutterBottom color="inherit">
          {title}
        </Typography>
        <Typography variant="h6" mb={3} color="inherit">
          {subtitle}
        </Typography>
        <Button variant="contained" size="large">
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
