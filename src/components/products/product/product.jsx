import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const Product = (products) => {
  console.log(products.products.src);
  return (
    <Card>
      <CardMedia
        title={products.products.name}
        image={products.products.src}
        component="img"
      />
      <CardContent>
        <div>
          <Typography variant="h5" gutterBottom>
            {products.products.name}
          </Typography>
          <Typography variant="h5">{products.products.price}</Typography>
        </div>
        <Typography variant="h4">{products.products.description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
