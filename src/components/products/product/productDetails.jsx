import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Grid } from "@mui/material";

const ProductDetails = (products) => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        marginLeft: -35,
        paddingLeft: 0,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", width: '100%', justifyContent: 'flex-start', flexWrap: 'wrap',
        paddingLeft: 0, }}>
        {" "}
        <CardMedia
          title={products.products.name}
          image={products.products.image1}
          component="img"
          sx={{ maxWidth: 150 }}
        />
        <CardMedia
          title={products.products.name}
          image={products.products.image2}
          component="img"
          sx={{ maxWidth: 150 }}
        />
        <CardMedia
          title={products.products.name}
          image={products.products.image3}
          component="img"
          sx={{ maxWidth: 150 }}
        />
        <CardContent>
          <div>
            <Typography variant="h5" gutterBottom>
              {products.products.name}
            </Typography>{" "}
          </div>
          <Typography variant="h5">$ {products.products.price}</Typography>
          <Typography variant="h5">{products.products.description}</Typography>
        </CardContent>
      </Box>
    </Grid>
  );
};

export default ProductDetails;
