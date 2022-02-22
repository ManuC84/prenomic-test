import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

export default function Header() {
  const { cart } = useSelector((state) => state.cart);
  //reduce cart quantity property to total price
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toLocaleString({
      style: "currency",
      currency: "USD",
    });
  const total = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Prenomics Ecommerce
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
              {cart.length > 0 && <p>total: {totalPrice}€</p>}
            </Typography>
            <Badge badgeContent={total} color="secondary">
              <ShoppingCartIcon sx={{ cursor: "pointer" }} fontSize="large" />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
