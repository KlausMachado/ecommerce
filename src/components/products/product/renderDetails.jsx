import React from "react";
import Grid from "@mui/material/Grid";
import ProductDetails from "../product/productDetails";

import Sneakers1 from "../../../images/image-product-1.jpg"
import Sneakers2 from "../../../images/image-product-2.jpg"
import Sneakers3 from "../../../images/image-product-3.jpg";

const details = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes. BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla",
    price: "100",
    image1: Sneakers1,
    image2: Sneakers2,
    image3: Sneakers3,
  },
];

const RenderDetails = (i) => {
  return (
    <Grid
      key={i}
      container
      justifyContent="center"
      spacing={4}
      sx={{ marginTop: 5 }}
    >
      {details.map((props) => {
            console.log(props)

        return (
          <Grid item key={props.id} xs={12} sm={6} md={4} lg={3}>
            <ProductDetails products={props} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default RenderDetails