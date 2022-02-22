import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart";
import { addToFavorites, toggleFavorites } from "../redux/favorites";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <Card sx={{ maxWidth: 345, minWidth: 250 }}>
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
          Price:{" "}
          {product.price.toLocaleString(
            {
              style: "currency",
              currency: "USD",
            },
            { minimumFractionDigits: 2, maximumFractionDigits: 2 }
          )}
          €
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={() => dispatch(addToCart(product))} size="small">
          Add to Cart
        </Button>
        <Button onClick={() => dispatch(toggleFavorites(product))} size="small">
          <FavoriteIcon
            sx={{
              color: isFavorite ? "red" : "inherit",
            }}
          />
        </Button>
      </CardActions>
    </Card>
  );
}
