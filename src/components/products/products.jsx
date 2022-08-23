import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./product/product";


const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.'},
    {id: 2, name: 'Macbook', description: 'Apple macbook.'}
]

const RenderProducts = () => {
  return (
    <main>
      <Grid sx={{ backgroundColor: "blue" }}>
        {products.map((props) => {
          return <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
            <Product products={props} />
          </Grid>;
        })}
      </Grid>
    </main>
  );
};

export default RenderProducts;
