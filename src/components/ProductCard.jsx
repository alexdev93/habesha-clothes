import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";

const StyledCard = styled(Card)`
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
    <StyledCard>
      <CardMedia
        component="img"
        height="250"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          ${product.price}
        </Typography>
        <Box mt={2}>
          <Button variant="contained" fullWidth>
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
