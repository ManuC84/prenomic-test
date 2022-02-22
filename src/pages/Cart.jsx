import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeAllFromCart } from "../redux/cart";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography sx={{ marginTop: 5 }} variant="h4">
        Your Items
      </Typography>
      {cart.length > 0 && (
        <Button
          onClick={() => dispatch(removeAllFromCart())}
          sx={{ marginTop: 5 }}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Remove all items from cart
        </Button>
      )}
      <Container
        sx={{
          marginTop: 10,
          marginBottom: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        {cart.length > 0 ? (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <Typography variant="h6">Your cart is empty</Typography>
        )}
      </Container>
    </Container>
  );
};

export default Cart;
