import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  height: 100%;
`;

export const RecipesList = ({ recipes }) => {
  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={5}
      padding={{ xs: 0, md: 3, lg: 5 }}
    >
      {recipes.map((recipe) => (
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard>
            <CardMedia
              sx={{ height: 140 }}
              image={recipe.recipe.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              {recipe.recipe.ingredientLines.map((ingredientLine) => (
                <Typography gutterBottom variant="body2" component="div">
                  {ingredientLine}
                </Typography>
              ))}
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};
