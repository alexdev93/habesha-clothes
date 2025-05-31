/** @jsxImportSource @emotion/react */
import { Box, Typography, TextField, Button } from "@mui/material";

const NewsletterSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f1f1f1",
        padding: "2rem",
        textAlign: "center",
        borderRadius: "1rem",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Subscribe for Offers
      </Typography>
      <Typography variant="body2" mb={2}>
        Get updates about new arrivals and special discounts
      </Typography>
      <TextField
        label="Enter your email"
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 400 }}
      />
      <Button variant="contained" sx={{ mt: 2 }}>
        Subscribe
      </Button>
    </Box>
  );
};

export default NewsletterSection;
