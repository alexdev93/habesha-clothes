/** @jsxImportSource @emotion/react */
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "white",
        padding: "2rem 1rem",
        textAlign: "center",
        marginTop: "3rem",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Hanibal Clothing Store. All rights
        reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
