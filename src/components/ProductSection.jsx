/** @jsxImportSource @emotion/react */
import { Box, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products }) => {
  return (
    <Box
      my={5}
      sx={{
        width: "100%",
        mx: "auto",
        backgroundColor: "background.paper", // uses theme.palette.background.paper
        color: "text.primary",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ mx: "auto", mb: 3, width: "100%" }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2.5,
          overflowX: "auto",
          overflowY: "hidden",
          scrollBehavior: "smooth",
          py: 2,
          px: 2,
          // Remove px, use spacers for persistent gap
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {/* Left gap */}
        <Box sx={{ flex: "0 0 auto", maxWidth: "2" }} />
        {products.map((product) => (
          <Box key={product.id} sx={{ flex: "0 0 auto" }}>
            <ProductCard product={product} />
          </Box>
        ))}
        {/* Right gap */}
        <Box sx={{ flex: "0 0 auto", maxWidth: "2" }} />
      </Box>
    </Box>
  );
};

export default ProductSection;
