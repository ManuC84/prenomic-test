import { Button, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cart";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const individualItemTotal = item.price * item.quantity;
  return (
    <Paper sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={item.img}
            alt={item.name}
            style={{ width: 100, height: 100, margin: "0 10px", objectFit: "contain" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography sx={{ textAlign: "center" }} variant="subtitle1">
            {item.name}
          </Typography>
          <p style={{ textAlign: "center" }}>
            {individualItemTotal.toLocaleString(
              {
                style: "currency",
                currency: "USD",
              },
              { minimumFractionDigits: 2, maximumFractionDigits: 2 }
            )}
            €
          </p>
          <Button onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <IconButton onClick={() => dispatch(increaseQuantity(item.id))}>
          <ArrowDropUpIcon />
        </IconButton>
        <p style={{ textAlign: "center" }}>{item.quantity}</p>
        <IconButton onClick={() => dispatch(decreaseQuantity(item.id))}>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default CartItem;
