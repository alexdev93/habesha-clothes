/** @jsxImportSource @emotion/react */
import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products }) => {
  return (
    <Box my={5}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSection;
