/** @jsxImportSource @emotion/react */
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import styled from "@emotion/styled";

const CategoryCard = styled(Card)`
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
  &:hover {
    transform: scale(1.03);
  }
`;

const CategorySection = ({ categories }) => {
  return (
    <Box my={5}>
      <Typography variant="h4" gutterBottom>
        Shop by Category
      </Typography>
      <Grid container spacing={3}>
        {categories.map((cat, idx) => (
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
  );
};

export default CategorySection;
