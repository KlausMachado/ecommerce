import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./product/product";
import Running from "../../assets/images/running-shoes.jpg";
import Macbook from "../../assets/images/macbook.jpg";
import Sneakers from "../../assets/images/image-product-1.jpg";
import { Link } from "react-router-dom";
//Grid é um componente de colunas

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "100",
    src: Running,
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook",
    price: "1000",
    src: Macbook,
  },
  {
    id: 3,
    name: "Sneakers",
    description: "usual sneakers",
    price: "80",
    src: Sneakers,
  },
];

console.log(Running);

const RenderProducts = (i) => {
  return (
    <main
      style={{
        backgroundColor: "#d4d6da",
        flexGrow: "1",
        padding: "24px",
      }}
    >
      <Grid
        key={i}
        container
        justifyContent="center"
        spacing={4}
        sx={{ marginTop: 5 }}
      >
        {products.map((props) => {
          return (
              <Grid item key={props.id} xs={12} sm={6} md={4} lg={3}>
                <Product products={props} />
              </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default RenderProducts;
