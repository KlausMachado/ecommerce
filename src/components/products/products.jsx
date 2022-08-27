import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./product/product";
import Running from "../../images/running-shoes.jpg"
import Macbook from "../../images/macbook.jpg"
//Grid é um componente de colunas

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "100",
    src: {Running},
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook.",
    price: "1000",
    src: {Macbook},
  },
];

const RenderProducts = (i) => {
  return (
    <main style={{ width: "500px" }}>
      <Grid key={i}>
        {products.map((props) => {
          return (
            <Grid item key={props.id} xs={12} sm={6} md={4} lg={3}>
              {/* {console.log(props)} */}
              <Product products={props} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default RenderProducts;
