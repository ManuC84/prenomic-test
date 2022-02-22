import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        height="140"
        image={product.img}
        alt={product.category}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Type: {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => dispatch(addToCart(product))} size="small">
          Add to Cart
        </Button>
        <Button size="small">Add to Favorites</Button>
      </CardActions>
    </Card>
  );
}
