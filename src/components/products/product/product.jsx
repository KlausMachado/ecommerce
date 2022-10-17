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
import { Link } from "react-router-dom";

const Product = (products) => {
  console.log(products.products.src);
  return (
    <Card>
      <Link
        to="/product-details"
        style={{ textDecoration: "none", color: "unset" }}
      >
        <CardMedia
          sx={{ maxHeight: 284 }}
          title={products.products.name}
          image={products.products.src}
          component="img"
        />
        <CardContent>
          <div>
            <Typography variant="h5" gutterBottom sx={{ maxHeight: "41px" }}>
              {products.products.name}
            </Typography>
            <Typography variant="h5">$ {products.products.price}</Typography>
          </div>
          <Typography variant="h4">{products.products.description}</Typography>
        </CardContent>
      </Link>

      <CardActions disableSpacing>
        <IconButton aria-label="Add to cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
