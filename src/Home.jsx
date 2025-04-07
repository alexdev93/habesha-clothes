/** @jsxImportSource @emotion/react */
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";
import ProductCard from "./components/ProductCard";

const HeroSection = styled(Box)`
  background: url("/images/hero-banner.jpg") no-repeat center center/cover;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 2rem;
`;

const CategoryCard = styled(Card)`
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
  &:hover {
    transform: scale(1.03);
  }
`;

const PromoBanner = styled(Box)`
  background-color: #1a73e8;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  margin: 3rem 0;
  border-radius: 1rem;
`;

const Newsletter = styled(Box)`
  background-color: #f1f1f1;
  padding: 2rem;
  text-align: center;
  border-radius: 1rem;
`;

const Footer = styled(Box)`
  background-color: #333;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
  margin-top: 3rem;
`;

const dummyProducts = [
  { id: 1, name: "T-shirt", price: "29.99", image: "/images/tshirt.jpg" },
  { id: 2, name: "Jeans", price: "49.99", image: "/images/jeans.jpg" },
  { id: 3, name: "Jacket", price: "89.99", image: "/images/jacket.jpg" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection>
        <Box>
          <Typography variant="h2" gutterBottom>
            Style Redefined
          </Typography>
          <Typography variant="h6" mb={3}>
            Discover the latest trends in fashion
          </Typography>
          <Button variant="contained" size="large">
            Shop Now
          </Button>
        </Box>
      </HeroSection>

      <Container maxWidth="lg">
        {/* Categories */}
        <Box my={5}>
          <Typography variant="h4" gutterBottom>
            Shop by Category
          </Typography>
          <Grid container spacing={3}>
            {["Men", "Women", "Accessories"].map((cat, idx) => (
              <Grid item xs={12} sm={4} key={idx}>
                <CategoryCard>
                  <CardMedia
                    component="img"
                    height="180"
                    image={`/images/category-${cat.toLowerCase()}.jpg`}
                  />
                  <CardContent>
                    <Typography variant="h6">{cat}</Typography>
                  </CardContent>
                </CategoryCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* New Arrivals */}
        <Box my={5}>
          <Typography variant="h4" gutterBottom>
            New Arrivals
          </Typography>
          <Grid container spacing={3}>
            {dummyProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Promo Banner */}
        <PromoBanner>
          <Typography variant="h5" gutterBottom>
            🔥 20% OFF on First Order
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use Code: <strong>FIRST20</strong> at checkout
          </Typography>
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white", mt: 2 }}
          >
            Shop Now
          </Button>
        </PromoBanner>

        {/* Newsletter */}
        <Newsletter>
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
        </Newsletter>
      </Container>

      {/* Footer */}
      <Footer>
        <Typography variant="body2">
          © {new Date().getFullYear()} Hanibal Clothing Store. All rights
          reserved.
        </Typography>
      </Footer>
    </>
  );
}
