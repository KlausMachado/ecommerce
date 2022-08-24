import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./product/product";


const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.'},
    {id: 2, name: 'Macbook', description: 'Apple macbook.'}
]

const RenderProducts = (i) => {
  return (
    <main style={{width: '500px'}}>
      <Grid key={i} sx={{ backgroundColor: "blue" , width: 500 }}>
        <h1>Teste</h1>
        {products.map((props) => {
          return <Grid item key={props.id} xs={12} sm={6} md={4} lg={3}>
            {/* {console.log(props)} */}
            <Product products={props} />
          </Grid>;
        })}
      </Grid>
    </main>
  );
};

export default RenderProducts;
