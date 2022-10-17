import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import logo from "../../images/bolsa-de-compras.png";

/*
 * AppBar = componente header
 * Toolbar = componente de div
 * IconButton = componente button 
 * Badge = componente span
 * Typogaphy = componente text
 */

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            color="inherit"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              style={{ marginTop: "2px" , marginRight: '3px'}}
            />
            Commerce.js
          </Typography>
          <div>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                {/* (nº itens carrinho)*/}
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
