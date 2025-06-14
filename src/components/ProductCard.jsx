import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import styled from "@emotion/styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledCard = styled(Card)`
  box-boxshadow: none !important;
  position: relative;
  transition: 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.02);
  }
`;

const ProductCard = ({ product }) => {
  return (
    <StyledCard elevation={0}>
      {/* Media box with overlays */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "16.25em",
            objectFit: "cover",
          }}
          image={product.image}
          alt={product.name}
        />
        {/* Heart icon at top right */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 2,
          }}
        >
          <FavoriteBorderIcon sx={{ color: "#e53935" }} />
        </Box>
        {/* Chip at bottom left */}
        <Chip
          label="Sale"
          color="primary"
          sx={{
            position: "absolute",
            left: 8,
            bottom: 8,
            zIndex: 2,
          }}
        />
      </Box>
      <CardContent
        sx={{
          backgroundColor: "background.paper", // uses theme.palette.background.paper
          color: "text.primary", // uses theme.palette.text.primary
        }}
      >
        <Typography variant="h6" color="text.primary" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          ${product.price}
        </Typography>
        <Box
          mt={2}
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "60%",
            px: 2,
            pb: 2,
          }}
        >
          <Button variant="contained" fullWidth>
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
