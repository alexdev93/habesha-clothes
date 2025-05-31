/** @jsxImportSource @emotion/react */
import { Box, Typography, Button } from "@mui/material";

const PromoBanner = ({ discountCode, message, buttonText }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a73e8",
        color: "white",
        textAlign: "center",
        padding: "2rem 1rem",
        margin: "3rem 0",
        borderRadius: "1rem",
      }}
    >
      <Typography variant="h5" gutterBottom>
        🔥 {message}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Use Code: <strong>{discountCode}</strong> at checkout
      </Typography>
      <Button
        variant="outlined"
        sx={{ color: "white", borderColor: "white", mt: 2 }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default PromoBanner;
