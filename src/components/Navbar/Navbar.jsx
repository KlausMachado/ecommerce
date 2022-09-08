import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import logo from '../../images/bolsa-de-compras.png'

const Navbar = () => {
  return (
    <>
     <AppBar position='fixed' color='inherit'> {/*componente de barra de navegação*/}
      <Toolbar>
        <Typography variant='h6' color='inherit'>
          <img src={logo} alt="Commerce.js" height='25px' />
          Commerce.js
        </Typography>
        <div>
          <IconButton aria-label='Show cart items' color='inherit'>
            <Badge badgeContent={2} color='secondary'> {/*componente de nº itens carrinho */}
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>

     </AppBar> 
    </>
  )
}

export default Navbar
