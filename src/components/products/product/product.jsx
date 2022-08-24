import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";

const Product = (product) => {
    // console.log(product.products.name)
  return (
    <Card>
      <CardMedia title={product.name} image="" component="img" />
      <CardContent>
        <div>
          <Typography variant="h5" gutterBottom>
            {product.products.name}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;
