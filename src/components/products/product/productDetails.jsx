import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";

const ProductDetails = (details) => {
  return (
    <Card>
      <CardMedia title={products.products.name} />
      <CardContent>
        <div>
          <Typography variant="h5" gutterBottom>
            {products.products.name}
          </Typography>{" "}
        </div>
        <Typography variant="h5">$ {products.products.price}</Typography>
        <Typography variant="h4">{products.products.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
